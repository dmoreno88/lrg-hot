  <script>
     import {onMount, createEventDispatcher} from "svelte";
     
     import {Months,MonthsAbbre,FullWeekDays, CalendarPage} from './utils/Months';
     import MonthsList from "./MonthsList.svelte";
     import YearsList from "./YearsList.svelte";
     import WeekDays from "./WeekDays.svelte";
     import Week from "./Week.svelte";
     
    export let footer = false;
    export let display;
    export let choosen = null;
    export let popup = false;

    let dispatch = createEventDispatcher();
    let tracking = {"row" : 0, "col" : 0};
    let today = new Date(); //This variable handles the calendar changes..
    let alwaysToday = new Date();
    let redrawing = false;
    let calendars = [];
    let current_month = 0;
    let calELE; //GETS HTML CONTAINER...
    let footerELE; //gets the footer html container...
    
    
    let cmpYears;
    let cmpMonths;


    $: MonthTitle = Months[current_month];
    $: Todaylbl  = `${FullWeekDays[alwaysToday.getDay()]}, ${MonthsAbbre[alwaysToday.getMonth()]} ${alwaysToday.getDate()}`;

    onMount(() => {

        if(display && display instanceof Date) {
            today = new Date(display.getFullYear(), display.getMonth(), 1);
            current_month = today.getMonth();
            calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
            redrawing = true;
        }else{
             today = new Date(today.getFullYear(), today.getMonth(), 1);
             current_month = today.getMonth();
             calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
             redrawing = true;
        }

        //Tell parent he is ready to go...

          dispatch("ready", true);
    });

    

    export function reset() {

        if(choosen) {
             today = new Date(choosen.getFullYear(), choosen.getMonth(), 1);
        }else{
             today = new Date(alwaysToday.getFullYear(), alwaysToday.getMonth(), 1);
        }
         current_month = today.getMonth();
         calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
    }

    export function removeChoosen() {
        choosen = null;
    }

    function onPrevMonth(){
        if(current_month == 0) {
            current_month = 11;
            today = new Date(today.getFullYear() - 1, current_month, 1);
            calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
        }else{
            current_month -= 1;
            today = new Date(today.getFullYear(), current_month, 1);
            calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
        }
    }

    function onNextMonth(){
       if(current_month == 11) {
            current_month = 0;
            today = new Date(today.getFullYear() + 1, current_month, 1);
            calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
        }else{
            current_month += 1;
            today = new Date(today.getFullYear(), current_month, 1);
            calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
        }

       
    }

    function onNextYear(){
        let year = today.getFullYear() + 1;
        today = new Date(year, current_month, 1);
        calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
    }

    function onPrevYear() {
        let year = today.getFullYear() - 1;
        today = new Date(year, current_month, 1);
        calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
    }

    function getDaysInMonth(today, lastDay) {
        var date = new Date(today);
        var month = date.getMonth();
        var lastDay = new Date(lastDay); 
        var calendars = [[], [], [], [], [], []];
        var row = 0;
        if(date.getDay() > 0) {
            calendars[0] = getDaysBackwards(date, month);
            
        }
        while (row < 6) {

            if(calendars[row].length < 7) {
                
                calendars[row].push(new CalendarPage(new Date(date), month));
                var col = calendars[row].length - 1;
                if(col > -1)
                {
                    if(calendars[row][col].checkChoosen(choosen)) {
                       
                        tracking.col = row;
                        tracking.row  = col;
                       

                    }
                }
                date.setDate(date.getDate() + 1);
             }

             if(calendars[row].length == 7) {
                 row++;
             }  
        }
        return calendars;
   }


    function getDaysBackwards(date, month) {
        var today   = new Date(date);
        var number = date.getDay();
        var days = [];
        for(var x = 0; x < number; x++) {
            var cutDays = number - x;
            today.setDate(today.getDate() - cutDays);
            days.push(new CalendarPage(new Date(today), month));
            if(days[x].checkChoosen(choosen)){
               
                tracking.col = 0; tracking.row = x;
            }  
            today = new Date(date);            
        }
        
        return days;
    }


     function daysInMonth(iMonth, iYear) 
    { 
      return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    //When The User Selects A Date..
    //This Function is going to Emit Back to The Parent
    //Of Notifying the change..
    function onSelect(e) {
       
        var element = e.target || e.srcElement;
        if(choosen) { //IF we have something selected..
            
            calendars[tracking.col][tracking.row].choosen = false;
            
            //Reset with new information...
            tracking.col = element.dataset.mindex;
            tracking.row = element.dataset.index;


            calendars[tracking.col][tracking.row].choosen = true;
            choosen = calendars[tracking.col][tracking.row].date;
        }else{ //First time ever click..
            tracking.col = element.dataset.mindex;
            tracking.row = element.dataset.index;
            calendars[tracking.col][tracking.row].choosen = true;
            choosen = calendars[tracking.col][tracking.row].date;
        }
        
        //Emit what was choosen by user..
        dispatch("choosen", {"parse": convertDate(choosen),
            "date": choosen
        });
        
    }

    function convertDate(val) {
        if(val instanceof Date){
            var yyyy = val.getFullYear();
            var mm   = (val.getMonth() + 1 < 10) ? `0${val.getMonth()+ 1}` : val.getMonth() + 1;
            var dd   = (val.getDate() < 10) ? `0${val.getDate()}` : val.getDate();
            return `${yyyy}-${mm}-${dd}`;
        }

        return val;
    }

    //Close the calendar..
    function onClose(){
        dispatch("close", false);
    }


    function onTodaySelect(){
         calendars[tracking.col][tracking.row].choosen = false;
         choosen = alwaysToday;
        
          //Emit what was choosen by user..
        dispatch("choosen", {"parse": convertDate(choosen),
            "date": choosen
        });

        //Close the calendar..
        onClose();
    }

    function onYearsList() {
        cmpYears.onShow();
       
    }

    function onMonthsList() {
        cmpMonths.onShow();
    }

    function changeCalYear(e){
         today = new Date(e.detail, today.getMonth(), 1);
         current_month = today.getMonth();
         calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
         redrawing = true;
    }

    function changeCalMonth(e){
        today = new Date(today.getFullYear(), e.detail, 1);
        current_month = today.getMonth();
        calendars =  getDaysInMonth(today, new Date(today.getFullYear(), today.getMonth(), daysInMonth(today.getMonth(), today.getFullYear())));
        redrawing = true;
    }


    export function scrollView() {
        if(footer){
            footerELE.scrollIntoView();
        }else{
            calELE.scrollIntoView();
        }
       
    }

    export function getSelected() {
        return choosen;
    }

    export function isSelected() {

        return (choosen == null) ? true : false;
    }

    export function getFormatDate() {
        return `${choosen.getFullYear()}-${(choosen.getMonth() + 1)}-${choosen.getDate()}`
    }

  </script>
  <style>
    .pop {
        position: absolute;
        z-index: 3;
        height: 436px;
    }
  </style>
  
  <div  bind:this={calELE} class="calendar" class:pop={popup}>
    <div class="calendar-header">
        <div class="header-year">{alwaysToday.getFullYear()}</div>
        <div class="header-day">{Todaylbl}</div>
        </div>
        <div class="calendar-content">
            <div class="calendar-toolbar">
                <span on:click={onPrevMonth} class="prev-month">
                    <span class="default-icon-chevron-left"></span>
                </span>
                <span on:click|preventDefault={onMonthsList} class="curr-month">{MonthTitle}</span>
                <span on:click={onNextMonth} class="next-month">
                    <span class="default-icon-chevron-right"></span>
                </span>
                <span on:click|preventDefault={onPrevYear} class="prev-year"><span class="default-icon-chevron-left"></span></span>
                <span on:click|preventDefault={onYearsList} class="curr-year">{today.getFullYear()}</span>
                <span on:click|preventDefault={onNextYear} class="next-year">
                    <span class="default-icon-chevron-right"></span>
                </span>
            </div>
           <WeekDays />
            <div class="days">
                {#each calendars as days, i}
                     <Week on:click={onSelect} days={days} index={i} />
                {/each}
 
            </div>
         </div>

                 {#if footer}
                     <div bind:this={footerELE} class="calendar-footer">
                        <!-- <button type="button" class="button cancel js-dialog-close">Cancel</button> -->
                        <button type="button" on:click|preventDefault={onTodaySelect} class="button today">Today</button>
                        <!-- <button type="button" class="button clear">Clear</button> -->
                        <button type="button" on:click|preventDefault={onClose} class="button done js-dialog-close">Done</button>
                    </div>
                 {/if}   
                    
            <MonthsList on:selected={changeCalMonth} bind:this={cmpMonths} />
            <YearsList bind:this={cmpYears} currentYear={today.getFullYear()} on:selected={changeCalYear}  />       
</div>

