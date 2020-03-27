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
        color: #36454f ;
        
    }
    h3{
        color: #36454f ;
    }
    h1 i {
        color: #36454f ;
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
        color: #36454f ;
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
        color: #36454f;
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

        

<div class="flex-container">
            

            <h1><center>History of the LRGVDC Emergency Communication Division</center></h1>
            <p><b>1967 </b>- the President's Commission on Law Enforcement and Administration of Justice recommended that a "single number should be established" nationwide for reporting emergency situations. 
               <p><b> 1987 </b>- HB911 was signed into law on May 28, 1987, which established a statewide 9-1-1 emergency communication system. (now called Texas Health and Safety Code, Chapter 771, Subtitle B. Emergencies) HB911 required the Texas Regional Planning Commissions to develop regional implementation plans.
               <p><b> 1989 </b>- LRGVDC Board of Directors recognizes HB 9-1-1 on May 25, 1989, and began the process of developing a Strategic Plan; consequently, establishing the Emergency Communication Division within the LRGVDC.
               <p><b> 1990 </b>- The first 9-1-1 service agreement is established with CSEC for Hidalgo and Willacy County. 
               <p><b> 1994 </b>- The LRGVDC Emergency Communication Division is given the responsibility and authority to be the addressing entity for Hidalgo and Willacy County. 
               <p><b> 1996-2005 </b>- LRGVDC Emergency Communication Division strengthen the 9-1-1 infrastructure. 
               <p><b> 2006 </b>- Geographic Information Systems (GIS) was implemented to enhance and govern the 9-1-1 systems.
               <p><b> 2016 </b>- Text-to-9-1-1 is completely implemented and deployed in Hidalgo and Willacy Counties.
               <p><b> Presently </b>- 
</div>             
            <h1><center>Emergency Communication Programs</center></h1>

                    <div class="grid-container-2">
                   <div class="center-image">
                        <img class="imgResponsive" src="/build/assets/pages/pubed/PUB-ED.gif" alt="GIS Photo" />
                   </div>

                   <div>
                        <h1><i><center>Public Education</center></i></h1>
                        <b><p>  The primary function of our Mapping Program is to process spatial data through Geographic Information Systems (GIS) technology. 
                                The Mapping Program works on correcting the discrepancies between the Master Street Address Guide and our GIS maps.
                                Mapping updates our road centerlines, address points and jurisdictional boundaries as needed to update our 9-1-1 system at the Public Safety Answering Points (PSAP).
                        </p></b>
                    </div>
                </div>
                    
            <div class="grid-container-2">
                   <div>
                        <h1><i><center>Database</center></i></h1>
                         <b><p>  The primary function of our Mapping Program is to process spatial data through Geographic Information Systems (GIS) technology. 
                                The Mapping Program works on correcting the discrepancies between the Master Street Address Guide and our GIS maps.
                                Mapping updates our road centerlines, address points and jurisdictional boundaries as needed to update our 9-1-1 system at the Public Safety Answering Points (PSAP).
                        </p></b>
                   </div>
                   <div class="center-image">
                        <img class="imgResponsive" src="/build/assets/pages/pubed/Database.gif" alt="GIS Photo" />
                   </div>
            </div>

            <div class="grid-container-2">
                   <div class="center-image">
                        <img class="imgResponsive" src="/build/assets/pages/pubed/SYSTEMS.gif" alt="GIS Photo" />
                   </div>

                   <div>
                        <h1><i><center>Systems & PSAP Operations Program</center></i></h1>
                        <b><p>  Staying ahead of threats are ever more sophisticated and has its ongoing challenges. With the pervasive integration and sharing of data between multiple agencies, sites and/or systems; the threats and vulnerabilities have drastically increased. </p></b>
                        <b><p>  SystemS & PSAP Operations Program first step in staying ahead of threats is assessing data and setting priorities. New product paradigms are being designed and implemented by the PSAP community at a rapid pace. </p></b>
                        <b><p>  Today's call-centers are challenged to keep pace with the rapid shifts in technology. These challenges require innovative solutions and emphasize the necessity for truly secure computing environments in today’s PSAP.  </p></b>                 

                    </div>
            </div>

             <div class="grid-container-2">
                   <div>
                        <h1><i><center>Location Validation</center></i></h1>
                        <b><p>  
                            The LRGVDC 9-1-1 Addressing Department work in partnership with the United States Postal Service (USPS), telephone companies and others agenices within the region to ensure 
                            the 9-1-1 physical address is established. <br><br>
                            Our responsibility consist of administration, maintenance, and assurance of all geographic information pertinent to Hidalgo
                            and Willacy County, and we're accountable for ensuring orderly assignment and maintenance of all addresses and address data. 
                        </p></b>
                   </div>
                   <div class="center-image">
                        <img class="imgResponsive" src="/build/assets/pages/pubed/LOCATION_VALIDATION.gif" alt="GIS Photo" />
                   </div>
            </div>

            <div class="grid-container-2">
                   <div class="center-image">
                        <img class="imgResponsive" src="/build/assets/pages/pubed/GIS.gif" alt="GIS Photo" />
                   </div>

                   <div>
                        <h1><i><center>Geographic Information Systems (GIS)</center></i></h1>
                        <b><p>  The Emergency Communication Division utilize GIS to support emergency response, economic development, and project planning throughout our region. </p></b>
                        <b><p>  The GIS program is also tasked with development of solutions for member entities involving GIS and various forms of technology. </p></b>
                   </div>
            </div>
           

</Wrapper>
<Footer />