<script>
    import {onMount, createEventDispatcher} from "svelte";
    import {Months} from './utils/Months';
   
    let appear = false;
    let display = createEventDispatcher()

    export function onShow() {
        appear = true;
    }
    export function onHide(){
        appear = false;
    }
    function onSelected(e){
        let target = e.target || e.srcElement;
        //console.log(target.dataset);
        onHide();
        display("selected", parseInt(target.dataset.index));
    }
</script>
<style>
   .appear{
        left: 160px;
        display: block;
   }
   .disappear{
        left: 0px;
        display: none;
   }
</style>
<div class:appear={appear} class:disappear={!appear} class="calendar-months">
        <ul class="months-list">
            {#each Months as month, i}
                <li on:click={onSelected} data-index={i} data-month={month}>{month}</li>
            {/each}
        </ul>
</div>