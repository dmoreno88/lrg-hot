<script>
     import {onMount} from "svelte";
     import VideoPlayer from '../components/VideoPlayer.svelte';
     import Header from "../components/Header.svelte";
	 import Footer from "../components/Footer.svelte";
     import Wrapper from "../components/Wrapper.svelte";



 
     
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




    .grid-container-2{
        display: grid;
      
        grid-template-columns: 50% 50%;
    }
    .imgResponsive {
        width: 590px;
        height: 375px;
        align-self: center;
    }
 
  

   



    

    @media only screen and (max-width: 1600px) {
     

      .center-image{
          display: flex;
          text-align: center;
          align-content: center;
          justify-content: center;
      }

       .flex-container {
            max-width: 100%;
            margin: 0;
            padding: 30px;
           
        }

    }

     @media only screen and (max-width: 1290px) {

         .grid-container-2{
             display: flex;
             flex-direction: column;
             justify-content: space-around;
         }


       
     }

   
</style>
<Header   />   
    <Wrapper>
<div class="flex-container">
            

            <h1><center>Sorry, we're doing some work on this page</center></h1>
                    <div class="grid-container-2">
</div>             
                   <div class="center-image">
                       <center><img class="imgResponsive" src="/build/assets/pages/pubed/UnderConstruction.jpg" alt="Under Construction" /> 
                              <center> <h1> Thank you for being patient.</h1></center> 
                                
                   </div>
</Wrapper>
<Footer />