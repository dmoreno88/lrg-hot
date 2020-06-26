<script>
    import {onMount} from "svelte";
     import {count} from "../components/store/stores.js";
    import RoundCard from "../components/Cards/RoundCard.svelte";
    import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
    import Wrapper from "../components/Wrapper.svelte";
    import Loading from "../components/Loading.svelte";
    import AuthorizeLetter from "../components/Window/AuthorizeLetter.svelte";
    import SignaturePad from "../components/Letter/SignaturePad.svelte";

    let url = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/addressticket/getAllReadyTickets/";
    let genLetter = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/template/pythonTemplateAnySvr/";
    let tickets = [];
    let searchTicket;
    let ticketsLoading = true;
    let authorize = false;
    let selected = null;
    let ticket = null;
    let record = null;
    let fname = "";
    let signature = false;
    let pad = null;
    let pdf = null;
    let mobile = false;
    let format = 'webp';
    let disProgress = false;


    
    let listPorts = [8080, 5000, 8080, 8080];


    onMount(() => {
        ticketsLoading = true;
         mobile = window.isMobile;
        //Lazy LOADING CSS IMPORTANT FOR TABLE..
        lazyLoadingCSS();
    });

    function lazyLoadingCSS() {
        const links = document.getElementsByTagName("link");
        const size = links.length;
        let found = false;
      
        for(var i = 0; i < size; i++){
            
            if(links[i].rel == "stylesheet" && links[i].href.indexOf("metro-table.css") > 0){
                found = true;
                break;
            }
        }

        if(!found) {
            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = '/metro-table.css';
            style.onload = ()=>{
               
                onDownloadTickets();
            }
            head.appendChild(style);
        }else{
            onDownloadTickets();
        }
    }

    async function onDownloadTickets(){
        
        const response = await fetch(url);
        const json = await response.json();
        ticketsLoading = false;
        tickets = json;
    
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


    function ifPropertyId(){

        if(selected.property_id){
            return "PID # " +  selected.property_id;
        }else 
        {
            return `${selected.subdivision} LOT ${selected.lot_num}`;
        }
        
    }
    
     //Old GENERATION OF LETTER
     async function onGenerateLetter() {
        let index = getRandomInt(4); 
      
        let server = window.listServers[index];
        let port   = listPorts[index];
        // console.log(`${server} : ${port}`);

       
        let form = new FormData();
        form.append("srv", server);
        form.append("port", port);

        form.append("name", fname);
        form.append("ticket", selected.objectid);
        form.append("pr_name", '');
        form.append("propid", ifPropertyId());
        form.append("addr1", selected.full_address);
        form.append("addr2", selected.msag_comm);
       
       fetch(genLetter, {method: 'POST', body: form}).then((response) =>{
           return response.json()
       }).then((data) => {
           
           if(data.hasOwnProperty("pdf")){
                signature = true;
               pdf = data.pdf;
               if(pad){
                   pad.download(pdf);
               }
               
           }

           ticketsLoading = true;

       });
    }

    function generateTest(){
        //1910082567

        let timer = null;
        count.update(n => n = 0);
        // Select Random number from 0, 3;
        let index = getRandomInt(4); 
      
        // Select Server and Port...
        let server = window.listServers[index];
        let port   = listPorts[index];
      

        //Create the FormData to send to the API..
        let form = new FormData();
        form.append("srv", server);
        form.append("port", port);

        form.append("name", fname);
        form.append("ticket", selected.objectid);
        form.append("pr_name", '');
        form.append("propid", ifPropertyId());
        form.append("addr1", selected.full_address);
        form.append("addr2", selected.msag_comm);

           // 1. Create a new XMLHttpRequest object
          let xhr = new XMLHttpRequest();
            xhr.responseType = 'json'; 
          // 2. Configure it: GET-request for the URL /article/.../load
          xhr.open('POST', genLetter);

          
          // 4. This will be called after the response is received
          xhr.onload = function() {
            if (xhr.status != 200) { // analyze HTTP status of the response
            
              alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
               
            } else { // show the result
              
              if(timer) {
                clearInterval(timer);
                count.update(n => n = 100);
              }
              let data = xhr.response;
           
                if(data.hasOwnProperty("pdf")){
                   
                     pdf = data.pdf;
                    if(pad){
                        pad.download(pdf);
                    }
                     //Delay the transition..
                     setTimeout(() => {
                         count.update(n => n = 0); //Reset percentage..
                        signature = true;
                        ticketsLoading = false;   
                    }, 500)
                    
                }else{
                    alert("Please try again.");
                }
                          
              
            }

           
          };

              xhr.upload.onprogress = function(event) {
                   
                    if (event.lengthComputable) {
                        let loaded = event.loaded;
                        let total  = event.total;
                        let percentage = Math.floor((loaded/total) * 100);
                        if(total == loaded && timer == null){

                            timer = setInterval(() => {

                             
                               count.update(n => n = n + 1);

                            }, 600);
                        }
                    
                    } else {
                        console.log(`Received ${event.loaded} bytes`); // no Content-Length
                    }
          };

          xhr.onerror = function() {
            alert("You're request failed try again. Use Wifi if possible.");
          };

           // 3. Send the request over the network
          xhr.send(form);

    }

    function parseLegal(ticket) {
        
        if(ticket.subdivision && ticket.lot_num){
            return `${ticket.subdivision} LOT ${ticket.lot_num}`;
        }
        else{
            return ticket.subdivision;
        }

    }
    function onEnter(e){
       
        if(e.keyCode == window.ENTER){
           
           tickets = tickets.filter((e) => e.objectid.includes(searchTicket));
            ticketsLoading = false;
        }
        else if(!searchTicket){
            onDownloadTickets();
        }
    }

    function onSearch() {
         tickets = tickets.filter((e) => e.objectid.includes(searchTicket));
         ticketsLoading = false;
    }

    function onPopUp(tick){
        authorize = true;
        selected = tick;
        record = selected;
        ticket = selected.objectid;
        fname = `${tick.cfirst_name} ${tick.clast_name}`;
            
    }

    function onInvalid(){
        authorize = false;
    }

    function onSignature(){
        ticketsLoading = true;
        authorize = false;
        disProgress = true;
        generateTest();
        //onGenerateLetter()
    }

    function onReadyPad() {
        if(pad){
             pad.resizeCanvas();
        }
       
    }

    function onLoading(e){
        if(e){
            ticketsLoading = e.detail;
        }else{
            ticketsLoading = true;
        }
        
    }

</script>
<style>
    .flex-main{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    }
    #table{
        height: 390px;
        padding: 20px;
        border: 1px solid #ccc!important
    }


     img {
    max-width: 98%;
    max-height: 100%;
    border: 1px solid #ccc!important;
    padding: 4px;
}

    .center {
        text-align: center;
    }
    #table{
       
        height: 600px;
        overflow: auto;
    }
    button{
        background: rgb(45, 45, 97);
        color:white;
    }
    button:hover{
        background: rgba(45, 45, 97, 0.5);
        cursor: pointer;
    }
    .input-group{
        text-align: center;
    }
    input{
        width: 80%;
    }

   
</style>
<Header />
<Wrapper>
     
    <div class="flex-main">
        <div class="center">
            <img loading="lazy" on:error="{()=>{format = 'png'}}" class="clickable" alt="LV" src="./build/assets/pages/letter/ADDRESS_LETTER_STEPS_BANNER.{format}" />
        </div>
        <br />
        {#if ticketsLoading}
            <Loading progressOn={disProgress} />
        {/if}
        {#if authorize}
            <AuthorizeLetter on:loading={onLoading} on:passed={onSignature} on:invalid={onInvalid} {ticket} on:close="{(e)=>{authorize = e.dislay}}" {fname} />
        {/if}
        {#if signature}
             <SignaturePad on:done="{(e) => {signature = false;}}" on:loading={onLoading} {record} {fname} {pdf} bind:this={pad} on:ready={onReadyPad} />
        {/if}

        <div class="input-group">
           {#if mobile}
                <input type="number" on:keydown={onEnter} bind:value={searchTicket} placeholder="Search By Ticket Number" />
           {:else}
                <input type="text" on:keydown={onEnter} bind:value={searchTicket} placeholder="Search By Ticket Number" />
           {/if}
            
             <button on:click={onSearch}>Search</button>
             <button on:click={onDownloadTickets}>Refresh</button>
        </div>
        <br />
       
        <div id="table">
            <table class="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Date Requested</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Legal Description</th>
                        <th>Property Id</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                         
                          {#each tickets as ticket, i}
                             <tr>
                                <td>{(i + 1)}</td>
                                <td>{ticket.created_date}</td>
                                <td>{ticket.cfirst_name}</td>
                                <td>{ticket.clast_name}</td>
                                <td>{parseLegal(ticket)}</td>
                                <td>{ticket.property_id}</td>
                                <td><button on:click="{()=>{onPopUp(ticket)}}">Sign Letter</button></td>
                             </tr>
                          {/each}  
                    </tbody>
                </table>
        </div>
    </div>
</Wrapper>
<br />
<Footer />