<script>
    import {onMount, createEventDispatcher} from "svelte";
    export let starting = 1900;
    export let ending = 200;
    export let currentYear = 0;
    let appear = false;
    let years = [];
    const dispatch = createEventDispatcher();
    onMount(() => {
      
        for(var i = 0; i < ending; i++){
            if(i == 0){years.push(starting);continue }
            years.push(years[i-1] + 1);

        }
        //Notify The change...
        years = years;
    
    });

    function handleClick(event) {
        let e = event.target || event.srcElement
        appear = false; //Hide 

        dispatch('selected',parseInt(e.dataset.year));
    }

    export function onShow() {
        appear = true;
        let selY = document.getElementById(`ys-${currentYear}`)

        setTimeout(() => {
            selY.scrollIntoView()
            window.scroll(0,0)
        }, 300);
       
    } 
    export function onHide() {
        appear = false;
    }


</script>
<style>
    .appear{
        left: 64%;
        display: block;
    }

    .disappear{
        display: none;
    }

    .liSelect {
        background: #004d6f;
        color:white;
    }
</style>

<div class:appear={appear} class:disappear={!appear} class="calendar-years">
    <ul class="years-list">
        {#each years as year}
            <li class:liSelect={year == currentYear} on:click|preventDefault={handleClick} id="ys-{year}" data-year={year}>{year}</li>
        {/each}
    </ul>
</div>