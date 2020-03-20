<script>
     import {onMount} from "svelte";
     import VideoPlayer from '../components/VideoPlayer.svelte';
     import Header from "../components/Header.svelte";
	 import Footer from "../components/Footer.svelte";
     import Wrapper from "../components/Wrapper.svelte";

     let txtVideo = false;
     let karisVideo = false;
     let lvVideo = false;

     let lvLink = "./build/assets/videos/lv_psa.mp4";
     let karisLink = "./build/assets/videos/karis_law.mp4";
     let txtLink = "./build/assets/videos/txt_to_911.mp4";
     
     let mobileAppear = false;

    onMount(() => {

        mobileAppear = (window.innerWidth < 1290) ? true : false;
        window.onresize = (e) => {
            let target = e.target || e.srcElement;
            if(target.innerWidth < 1290){
                mobileAppear  = true;
            }else {
                mobileAppear = false;
            }
        }
    })
</script>
<style>
    h1 {
        color: rgb(226, 28, 13);
        
    }
    h2{
        color: rgb(226, 28, 13);
    }
    h1 i {
        color: #707070;
    }
    .flex-container {
        max-width: 1200px;
     margin: auto;
     
     padding: 10px;
    }
    img {
       
        margin-right: 30px;
        padding-bottom: 25px;
    }
    p {
        color: #2B4988;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 17px;
        padding-left: 15px; 
                
    }



    button {
        border-radius: 16px;
        color:white;
        background: #2B4988;
        cursor: pointer;
        text-align: center;
        width: 190px;
        margin-top: 25px;
        margin-left: 200px;
    }
    button:hover {
       background:rgb(226, 28, 13);
    }
    .grid-container-3 {
        display: grid;
        grid-template-columns: 45% 8% 47%;
    }
    .grid-container-2{
        display: grid;
      
        grid-template-columns: 50% 50%;
    }
    .imgResponsive {
        width: 590px;
        height: 375px;
    }
    .imgResponsive:hover {
        cursor: pointer;
    }
  
    #btnEvent{
        margin-top: 5px;
    }
    #imgCon {
        max-width: 68vh;
        height: 500px; 
        border: 2px solid #143975!important;
        padding: 1px;       
    }
    h2:hover{
        color: rgb(226, 28, 13) !important;
        cursor: pointer;
    }
        hr.type_1 {
        border: 0;
        height: 270px;
        background-image: url('/build/assets/pages/pubed/PUBED_BAR.png');
        background-repeat: no-repeat;
        background-size: 1150px;
        background-position: center;
        padding-top: 50px;
        
    }
    .bannerMsg {
        color: #36454f ;
        padding: 15px;
        font-weight: bold;
        font-size: 1.29rem;
    }

    #innerComms2{
        
        margin-top: 25px;      
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: center;

    }
    #imgCon2 {
        max-width: 68vh;
        height: 210px; 
        border: 0px solid #ccc!important;
        padding-right: 4px;   

    }
   
   .title2 {

       color: #DF744A !important;
   }
   

    @media only screen and (max-width: 1600px) {
     
      #imgCon {
        width: 100%;
        height: auto;
      }
      .center-image{
          display: flex;
          text-align: center;
          align-content: center;
          justify-content: center;
      }
      .grid-container-3 {
          display: initial;
      
      }
       .flex-container {
            max-width: 100%;
            margin: 0;
            padding: 30px;
           
        }
         #btnEvent{
        margin-top: 60px;
    }
     #btnEvent{
            text-align: center;
        }

        button{
             margin-top: 0;
        }
    }

     @media only screen and (max-width: 1290px) {
      
     }

   
</style>
<Header   />   
    <Wrapper>
        <div  class="flex-container">
        <h1><b>Public Education </b><i > Program</i></h1>
        <div class="grid-container-3">
            <div><b>
                    
                    <p>We provide presentations to our local cities, school, daycares, Emergency Medical Services (EMS), Fire and Police Departments within Hidalgo and Willacy County. 
                    
                    <p>Promotional item distribution is a major part of educating the public on how to correctly use the 9-1-1 system. During our promotional events, our mascots (Cell Phone Sally, Kid Friendly Keith, and Josh) have become a BIG part of our interaction with the early youth.
                    </p>
                    <p>
                        We promote and educate the public on how to correctly use the 9-1-1 system. By using multi-media, we demonstrate the proper way to call 9-1-1 and what is considered a 9-1-1 emergency call. 
                    </p>
                    <p>Schedule your event today!</p>
                </b>

            
            <!-- <div id="titleServe">We Serve</div> -->
            <div id="innerComms2">
                
                
                <div class="title2"><h4><center>CELL PHONE SALLY</center></h4>
                    <img id="imgCon2"  src="/build/assets/pages/pubed/cellphonesally_mascot.jpg"  alt="Cell Phone Sally" />
                </div>
                <div class="title2"><h4><center>KID FRIENDLY KEITH</center></h4>
                    <img id="imgCon2"  src="/build/assets/pages/pubed/kfk_mascot.jpg"  alt="Keith Friendly Kid" />
                </div>
                <div class="title2"><h4><center>JOSH</center></h4>
                    <img id="imgCon2"  src="/build/assets/pages/pubed/josh_mascot.jpg"  alt="Josh" />
                </div>
                
            </div>

 
            </div>
            <div></div>
            
            <div>
            
                <div class="center-image">
                   <img id="imgCon"  src="/build/assets/pages/pubed/main-photo.jpg"  alt="Kids with mascot" />

                    <div id="btnEvent">
                       <button on:click="{()=>{window.app.navigate('/EventRequest')}}">EVENT REQUEST</button>
                    </div>

                </div>
            
            </div>
        </div>
        

<hr class="type_1" />
       
        
        </div>
                

           
</Wrapper>
<Footer />