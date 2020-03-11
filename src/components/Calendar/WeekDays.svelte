 <script>
    import {WeekDays} from "./utils/Months";
 
 </script>
 <div class="week-days">
        {#each WeekDays as weekday}
              <span class="day">{weekday}</span>
        {/each}
</div>