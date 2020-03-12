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
        color: #2B4988;
        
    }
    h3{
        color: #2B4988;
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
        margin-top: 20px;
    }
    button:hover {
       background:rgb(12, 37, 90);
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
        height: 420px; 
        border: 2px solid #143975!important;
        padding: 1px;       
    }
    h2:hover{
        color: rgb(226, 28, 13) !important;
        cursor: pointer;
    }
    .bannerMsg {
        color: #B39945;
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

       color: red !important;
   }

   .asset-video{
       width: 590px;
       height: 375px;
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

         .grid-container-2{
             display: flex;
             flex-direction: column;
             justify-content: space-around;
         }
         .asset-video
         {
             text-align: center;
             margin: 0 auto;
         }

         .video-top{
             margin-top: 30px;
         }
        .mobile-flex{
            display: flex;
            flex-direction: column-reverse;
        }

       
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

                    <div id="btnEvent">
<<<<<<< HEAD
                    <button on:click="{()=>{console.log("EVENT")}}">EVENT REQUEST</button>
=======
                       <button on:click="{()=>{window.app.navigate('/EventRequest')}}">EVENT REQUEST</button>
>>>>>>> ef6474bee1b21bce105496b2ac3279b6957ca075
                    </div>
            </div>
            <div></div>
            <div>
                <div class="center-image">
                   <img id="imgCon"  src="/build/assets/pages/pubed/main-photo.jpg"  alt="Kids with mascot" />
                </div>
               
                <div class="flex-container"><b>
            <h1><i>Know WHEN to call 9-1-1.</i></h1>
            <b><p>9-1-1 is for emergencies only. You should only be dialing 9-1-1 if someone is hurt or in danger, or
                  if you are in immediate need of police, fire, or medical assistance.
               </p>

        <p>
            Knowing where you are is the most important information you can provide as a 9-1-1 caller, so be sure to be aware of 
            your surroundings. Make a real effort to be as detailed as possible.
        </p>

            </b>
            </div>
        </div>
        

<div class="flex-container">
            

            <h1><i>Know the capabilities of the device you are using.</i></h1>
            <b><p>9-1-1 can be contacted from any device that can 
            make phone calls (traditional landline, cell, VoIP), but the callback 
            and location information that accompanies your call to the 9-1-1 center 
            can vary drastically amongst technologies and between geographic regions. 
            LRGVDC 9-1-1 and telecommunications professionals are hard at work to make sure 
            9-1-1 works the same on all devices.</p>

            </b>
             
            
            <div class="grid-container-2">
                   <div class="asset-video">
 
                        {#if karisVideo}
                            <VideoPlayer on:click="{()=>{karisVideo = false;}}"  src="{karisLink}" />
                        {:else}
                            <img  on:click="{()=>{karisVideo=!karisVideo}}" loading="lazy" class="imgResponsive" src="/build/assets/pages/pubed/Karis_law_cover_photo.png" alt="Kari Photo" />
                        {/if}
                    </div>

                    <div>
                 
                     <h1><i><center>Kari's Law</center></i></h1>
                        <b>
                            <p> On May 15, 2015, Governor Abbott signed <a href="https://www.capitol.state.tx.us/tlodocs/84R/billtext/html/SB00788F.htm">Senate Bill 788 </a>(Texas Kari's Law). The law represents the culmination of 
                            efforts in the aftermath of the murder of Kari Hunt in a motel room in Marshall, Texas. Ms. Hunt’s 9-year-old daughter 
                            tried to call 9-1-1 for help four times from the motel room phone. 
                            
                            <p> The call never went through because she did not know 
                            to dial “9” for an outbound line before dialing “9-1-1.” On March 1, 2016, Commission on State Emergency Communications 
                            <a href="https://texreg.sos.state.tx.us/public/readtac$ext.TacPage?sl=R&app=9&p_dir=&p_rloc=&p_tloc=&p_ploc=&pg=1&p_tac=&ti=1&pt=12&ch=251&rl=16">Rule 251.16 </a>adopted to implement Texas Kari’s Law went into effect. 
                            Passed on February 16, 2018, Kari's Law requires multiple telephone line systems to have direct access to 9-1-1 without 
                            having to press an additional digit such as a "9" or a "1" to make an outgoing call. 
                        </p></b>
                

                    </div>


                {#if mobileAppear}
                     <div class="mobile-flex">
                         <div class="bannerMsg"><h2><i><center>9-1-1 Addressing</center></i></h2>
                            The LRGVDC 9-1-1 Addressing Department work in partnership with the United States Postal Service (USPS), telephone companies and others agenices within the region to ensure 
                            the 9-1-1 physical address is established. <br><br>
                            Our responsibility consist of administration, maintenance, and assurance of all geographic information pertinent to Hidalgo
                            and Willacy County, and we're accountable for ensuring orderly assignment and maintenance of all addresses and address data. 

                         </div>
                
                        <div class="asset-video">
                            {#if lvVideo}
                                    <VideoPlayer on:click="{()=>{lvVideo = false;}}"  src="{lvLink}" />
                            {:else}
                                    <img on:click="{()=>{lvVideo = !lvVideo}}" loading="lazy" class="imgResponsive" src="/build/assets/pages/pubed/lv_banner.jpg" alt="Lv banner" />
                            {/if}
                        
                        </div>         
                  </div>
                {:else}
                        <div class="bannerMsg"><h2><i><center>9-1-1 Addressing</center></i></h2>
                            The LRGVDC 9-1-1 Addressing Department work in partnership with the United States Postal Service (USPS), telephone companies and others agenices within the region to ensure 
                            the 9-1-1 physical address is established. <br><br>
                            Our responsibility consist of administration, maintenance, and assurance of all geographic information pertinent to Hidalgo
                            and Willacy County, and we're accountable for ensuring orderly assignment and maintenance of all addresses and address data. 

                         </div>
                
                        <div class="asset-video">
                            {#if lvVideo}
                                    <VideoPlayer on:click="{()=>{lvVideo = false;}}"  src="{lvLink}" />
                            {:else}
                                    <img on:click="{()=>{lvVideo = !lvVideo}}" loading="lazy" class="imgResponsive" src="/build/assets/pages/pubed/lv_banner.jpg" alt="Lv banner" />
                            {/if}
                        </div> 
                {/if}
                 
                   
                
                <div class="asset-video video-top">
        
                                     
                    {#if txtVideo}
                        <VideoPlayer on:click="{()=>{txtVideo = false;}}"  src="{txtLink}" />
                    {:else}
                        <img loading="lazy" on:click="{()=>{txtVideo=!txtVideo}}" class="imgResponsive" src="/build/assets/pages/pubed/text_to_911_cover_photo.png" alt="text to 911 cover photo" />
                    {/if}                    
                </div>
            
                    <div class="bannerMsg"><h2><i><center>Text-to-911 is availble in the <br>Lower Rio Grande Valley</center></i></h2>
                         In 2014, the four largest wireless service providers (AT&T, Sprint, T-Mobile and Verizon), in conjunction with the Association of Public Safety 
                         Communication Officials (APCO) and the National Emergency Number Association (NENA), agreed to provide all 911 call centers with the ability to receive texts. 
                        
                    </div>        
        
        </div>



            

                
        </div>
           

</Wrapper>
<Footer />