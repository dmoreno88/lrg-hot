<script>
    
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
        height: 350px;
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
        padding: 18px;
        font-weight: bold;
        font-size: 1.4rem;
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
        height: 200px; 
        border: 0px solid #ccc!important;
        padding-right: 4px;   

    }
   
   .title2 {

       color: red !important;
   }


    @media only screen and (max-width: 1600px) {
     
      #imgCon {
        width: 100%;
        height: auto;
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
    }

   
</style>
<Header   />   
    <Wrapper>
        <div class="flex-container">
        <h1><b>Public Education </b><i > Program</i></h1>
        <div class="grid-container-3">
            <div><b>
                    <p>
                        We promote and educate the public on how to correctly use the 9-1-1 system.
                    </p>
                    <p>We provide presentations to our local cities, school, daycares, Emergency Medical Services (EMS), Fire and Police Departments within Hidalgo and Willacy County. 

                    </p>
                    <p>Promotional item distribution is a major part of our educational program. During our promotional events, our mascots (Cell Phone Sally, Kid Friendly Keith, and Josh) have become a BIG part of our interaction with the early youth.
                    </p>
                    <p>
                        Using multi-media, we demonstrate the proper way to call 9-1-1 and what is considered a 9-1-1 emergency call. 
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
                    <button on:click="{()=>{console.log("EVENT")}}">EVENT REQUEST</button>
                    </div>
            </div>
            <div></div>
            <div>
                <img id="imgCon"  src="/build/assets/pages/pubed/main-photo.jpg"  alt="Kids with mascot" />
                <div class="flex-container"><b>
            <h1><i>Know WHEN to call 9-1-1.</i></h1>
            <b><p>9-1-1 is for emergencies only. You
                 should only be dialing 9-1-1 if someone is hurt or in danger, or
                  if you are in immediate need of police, fire, or medical assistance.
                   If you aren’t sure if your situation is an emergency, you should 
                   err on the side of safety and call 9-1-1 and let the expert who 
                   answers your call make the decision whether to send help or not.</p>
            </b>
            </div>
        </div>
        

<div class="flex-container">
            <h1><i>Know the capabilities of the device you are using.</i></h1>
            <b><p>9-1-1 can be contacted from pretty much every device that can 
            make phone calls (traditional landline, cell, VoIP), but the callback 
            and location information that accompanies your call to the 9-1-1 center 
            can vary drastically amongst technologies and between geographic regions. 
            9-1-1 and telecommunications professionals are hard at work to make sure 
            9-1-1 works the same on all devices in the future, but until then it is your 
            job to be knowledgeable about benefits and limitations associated with various 
            technologies. Contact your service provider(s) for more information.</p>

            <p>
            Know where you are. This is probably the most important information you can provide 
            as a 9-1-1 caller, so try to be aware of your surroundings. Make a real effort to be 
            as detailed as possible. If you are outside and don’t know the street address, take a 
            look around and try to find landmarks or cross streets. If you are inside a large building 
            or one with multiple levels, you can help emergency services by letting them know which floor 
            you are on, which apartment you are in, etc.
            </p>
            </b>
             
            
            <div class="grid-container-2">
                   <div>
 
                        {#if karisVideo}
                            <VideoPlayer on:click="{()=>{karisVideo = false;}}"  src="{karisLink}" />
                        {:else}
                            <img  on:click="{()=>{karisVideo=!karisVideo}}" loading="lazy" class="imgResponsive" src="/build/assets/pages/pubed/Karis_law_cover_photo.png" alt="Kari Photo" />
                        {/if}
                    </div>

                 <div>
                 
            <h1><i><center>Kari's Law</center></i></h1>
                    <b><p> 
                        Passed on February 16, 2018, Kari's Law requires multiple telephone line systems to have direct access to 9-1-1 without 
                        having to press an additional digit such as a "9" or a "1" to make an outgoing call. 
                        <p>The law specifically states, "An act to amend the Communications Act of 1934 to require multi-line telephone systems to have a configuration that permits 
                        users to directly initiate a call to 9-1-1 without dialing any additional digit, code, prefix, or post-fix, and for other purposes."
                    </p></b>
                

                </div>


                  <div class="bannerMsg"><h2><i><center>9-1-1 Addressing</center></i></h2>
                        The LRGVDC 9-1-1 Addressing Department is responsible for the assurance, maintenance, and administration of all geographic information pertinent to Hidalgo
                         and Willacy County, and we're accountable for ensuring orderly assignment and maintenance of all addresses and address data. We work in partnership with the United States Postal Service (USPS),
                          telephone companies and others agenices within the region to ensure the 9-1-1 physical address is established.

                  </div>
                
                <div>
                     {#if lvVideo}
                            <VideoPlayer on:click="{()=>{lvVideo = false;}}"  src="{lvLink}" />
                    {:else}
                            <img on:click="{()=>{lvVideo = !lvVideo}}" loading="lazy" class="imgResponsive" src="/build/assets/pages/pubed/lv_banner.jpg" alt="Lv banner" />
                    {/if}
                
                </div>             
                
        <div class="grid-container-2">
        
                                                      
                    {#if txtVideo}
                        <VideoPlayer on:click="{()=>{txtVideo = false;}}"  src="{txtLink}" />
                    {:else}
                        <img loading="lazy" on:click="{()=>{txtVideo=!txtVideo}}" class="imgResponsive" src="/build/assets/pages/pubed/text_to_911_cover_photo.png" alt="text to 911 cover photo" />
                    {/if}                    
                </div>
            
                    <div class="bannerMsg"><b>
                        Text-to-911 is the ability to send a text message to reach 911 emergency call takers from your mobile phone or device. However, because text-to-911 is currently only available in certain locations, you should always make a voice call to contact 911 during an emergency whenever possible.
                        <br>Visit: <a target="_blank" href="https://www.congress.gov/bill/115th-congress/house-bill/582/text">https://www.congress.gov/bill/115th-congress/house-bill/582/text</a>
                    </div>        
        
        </div>



            

                
        </div>
           

</Wrapper>
<Footer />