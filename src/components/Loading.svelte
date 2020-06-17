<script>
  import {onMount, onDestroy} from "svelte";
  import {count} from "./store/stores.js";
  export let progressOn = false;

  let percentage = 0;
  let unsubscribe;
  onMount(() => {
    percentage = 0;
     unsubscribe = count.subscribe(percent => {
      if(percent){
          percentage = percent;
      }
    
    });
  });

  onDestroy(() =>{
    unsubscribe();
    percentage = 0;
  })
</script>
<style>
  #grid {
    display: grid;
    width: 100%;
    height: 100%;
    grid-row-gap: 30px;
    justify-items: center;
  }

  #progress{
    background-color: #f5f5f5;
    width: 80%;
    margin-top: 20px;
    height: 20px;
    
    
  }
.activity-cycle {
 
  width: 140px;
  height: 140px;
  position: absolute;
  left: 50%;
  margin-left: -70px !important;
  overflow: hidden;
  background: white;
  z-index: 2;
   border: 4px solid #ddd!important;
}
.activity-cycle .cycle {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 64px;
  margin: -28px 0 0 -140px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ffffff;
  -webkit-animation: ani-pre-spin 1s linear infinite;
          animation: ani-pre-spin 1s linear infinite;
  z-index: 1001;
}
.activity-cycle .cycle::before,
.activity-cycle .cycle::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ffffff;
}
.activity-cycle .cycle:before {
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  -webkit-animation: ani-pre-spin 2s linear infinite;
          animation: ani-pre-spin 2s linear infinite;
}
.activity-cycle .cycle:after {
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  -webkit-animation: spin 1.5s linear infinite;
          animation: spin 1.5s linear infinite;
}

.activity-cycle.color-style .cycle {
  border-top-color: #1ba1e2;
}
.activity-cycle.color-style .cycle:before {
  border-top-color: #CE352C;
}
.activity-cycle.color-style .cycle:after {
  border-top-color: #fff000;
}



@-webkit-keyframes ani-pre-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes ani-pre-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

</style>
<div id="center" class="color-style activity-cycle">
    <div id="grid">
      <div class="cycle"></div>
     {#if progressOn}
        <div id="progress">
         <div id="progress-bar" style="width: {percentage}%; background-color: #5cb85c; text-align: center;">
              {percentage}%
         </div>
        </div>
     {/if}
     
    </div>
    
</div>
