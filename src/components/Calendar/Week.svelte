<script>
    export let days;
    export let index;
</script>


<div class="days-row">
    {#each days as day, i}
         <div on:click data-mindex={index} data-index={i} class:selected={day.choosen} class:today={day.today} class:outside={day.outside} class="day">{day.getDay()}</div>
    {/each}
</div>