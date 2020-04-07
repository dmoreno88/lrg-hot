
<script>
     import {onMount} from "svelte";
     import Swiper from "swiper";

     let controll;
     let format = "webp";
     onMount(() => {
         var swiper = new Swiper(controll, {
            slidesPerView: 1,
            spaceBetween: 4,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            });
     });
     
      //If the Browswer doesn't support webp..
      //I handle the error on failover to png...
      function onLoadError() {
         format = "png";
      }


</script>

<style>
    .swiper-container {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      border: 0px 5px solid #ddd;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
    
    }

    .clickable {
        cursor: pointer;
    }

    img {
    max-width: 98%;
    max-height: 100%;
    border: 1px solid #ccc!important;
    padding: 4px;
}


@media only screen and (max-width: 480px) {
  img{
    height: 220px;
  }

}

</style>
<div bind:this={controll}  class="swiper-container">
    <div class="swiper-wrapper">

     <div class="swiper-slide">
                
            
        <img on:error={onLoadError} on:click="{()=>{window.app.navigate('/EventRequest')}}" loading="lazy"  class="clickable" alt="PUB"
       
        src="./build/assets/carousel/event_banner.{format}" />
               
      </div>

      <div class="swiper-slide">
         <img loading="lazy" class="clickable" alt="LV" 
         
         src="./build/assets/carousel/location_validation.{format}" />
      </div>

       <div class="swiper-slide">
                <img loading="lazy" alt="Training"
        
        src="./build/assets/carousel/training_banner.{format}"
         />
      </div>

      <div class="swiper-slide">
                <img loading="lazy" alt="Training"
        
        src="./build/assets/carousel/911tips_banner.{format}"
         />
      </div>

      <div class="swiper-slide">
        <img loading="lazy" alt="Karis"
        src="./build/assets/carousel/karislaw_banner.{format}" />
      </div>

      <div class="swiper-slide">
          <img loading="lazy" alt="PUB"
          src="./build/assets/carousel/pubed_banner.{format}" />
      </div>
     
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
