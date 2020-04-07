
<script>
     import {onMount} from "svelte";
     import Swiper from "swiper";

     let controll;
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
          this.src = this.dataset.failover;
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
        data-failover="./build/assets/carousel/event_banner.png"
        src="./build/assets/carousel/event_banner.webp" />
               
      </div>

      <div class="swiper-slide">
         <img loading="lazy" class="clickable" alt="LV" 
         data-failover="./build/assets/carousel/location_validation.png"
         src="./build/assets/carousel/location_validation.webp" />
      </div>

       <div class="swiper-slide">
                <img loading="lazy" alt="Training"
        data-failover="./build/assets/carousel/training_banner.png"
        src="./build/assets/carousel/training_banner.webp"
         />
      </div>

      <div class="swiper-slide">
                <img loading="lazy" alt="Training"
        data-failover="./build/assets/carousel/911tips_banner.png"
        src="./build/assets/carousel/911tips_banner.webp"
         />
      </div>

      <div class="swiper-slide">
        <img loading="lazy" alt="Karis"
        data-failover="./build/assets/carousel/karislaw_banner.png"
        src="./build/assets/carousel/karislaw_banner.webp" />
      </div>

      <div class="swiper-slide">
          <img loading="lazy" alt="PUB"
        data-failover="./build/assets/carousel/pubed_banner.png"
        src="./build/assets/carousel/pubed_banner.webp" />
      </div>
     
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
