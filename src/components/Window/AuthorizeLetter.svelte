<script>
    import { onMount, createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let fname;
    export let ticket = 0;
    let value;
    let tries = 4;
    let error = false;
    let mobile = false;

  
    onMount(async () =>{
        mobile = window.isMobile;
    })

    function fixName(name){
       let lower = name.toLowerCase();
       let arr = lower.split(" ");
       name = "";
       
       arr.forEach(letter => {
           if(letter){
                name += letter.replace(/^./, letter[0].toUpperCase()) + " "; 
           }else {
                name += " "; 
           }
          
       });

       return name;
    }

    function onClose(){
        dispatch("close", false);
    }
    function onKeyDown(e){
        if(e.keyCode == window.ENTER){
            if(value == ticket){
                dispatch("passed", true);
               
            }else{
                tries -= 1;
                error = true;
                if(tries == 0){
                    dispatch("invalid", true);
                }
            }
        }
    }

    function onEnter(){
     
        if(value == ticket){
           dispatch("passed", true);
          
        }else{
            tries -= 1;
            error = true;
            if(tries == 0){
                dispatch("invalid", true);
            }
        }
    }

 

   

</script>
<style>
    #window{
        position: absolute;
        width: 500px;
        height: 250px;
        left: 50%;
        margin-left: -250px;
        margin-top: -250px;
        background: white;
        border: 4px solid rgb(219, 92, 92);
    }
    h2{
        text-align: center;
    }
    p{
        text-align: center;
        padding: 8px;
    }

    .flex-box{
        display: flex;
        flex-basis: auto;
        align-items: center;
        justify-content: center;
    }
    .hover-close{
        position: absolute;
        right: -12px;
        top: -14px;       
    }
    .close{
        border-radius: 30px;
        width: 40px;
        height: 40px;
        background: rgb(209, 62, 62);
        text-align: center;
        color: white;
        border: 1px solid black;
    }
    .close:hover{
        cursor: pointer;
         background: rgb(209, 62, 62, 0.8);
    }
     .enter{
        background: rgb(45, 45, 97);
        color:white;
    }
    .enter:hover{
        background: rgba(45, 45, 97, 0.5);
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {

        #window{
            width: 90%;
            left: 0;
            margin-left:0;
            margin-top:0;
            
        }

    }
</style>
<div id="window">
    <div class="hover-close">
        <button on:click={onClose} class="close">X</button>
    </div>
    <h2>Authorize User</h2>
    <p>
        {fixName(fname)} please enter ticket number to verify this ticket is associated to you.
        To protect your private information we implemented this security measure.
    </p>
    <div class="flex-box">
        {#if mobile}
             <input  on:keydown={onKeyDown} bind:value={value} type="number" placeholder="Enter Ticket Number" />
        {:else}
            <input  on:keydown={onKeyDown} bind:value={value} type="text" placeholder="Enter Ticket Number" />
        {/if}
        <button on:click={onEnter} class="enter">Verify</button>
    </div>
    {#if error}
        <div>
            <p>Incorrect ticket number have {tries} tries.</p>
        </div>
    {/if}
   
    
</div>