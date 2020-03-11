<script>
  import CalendarPicker from "./CalendarPicker.svelte";
  export let clazz;
  export let title;
  export let section;
  export let id;
  export let type = "text";
  export let btnGroup = false;

  let display;
  let choosen;
  let input;  //HOLDS THE INPUT HTML ELEMENT...
  let calendar; //HOLDS THE CALENDAR CMP

  let show = false;


  export function setDate(picker){
    display = picker;
  };

  //Once the input has been performed from Spartan Ticket
  //Controller it will Emit Custom handler..
  function handlePicker(e) {
     if(e.detail.parse) {
      
       display = e.detail.date;
       choosen = e.detail.date;
     }
     
  }

  //Click input show or hide Calendar Picker..
  function handleClick(e) {
    show = !show;
  
  }

  
  function handleChoosen(e){

      input.value = e.detail.parse;
      choosen = e.detail.date;
      display = e.detail.date;

      //Force the blur event with the new value..
      var event = new Event('blur');
      input.dispatchEvent(event);
  }

  function onReady(e){
    //Once the components has render...
    //Make sure the html element fits the window is been render...
    calendar.scrollView();

    //Make sure the window doesn't become jaggy.
    window.scroll(0,0)
  }

</script>

  {#if btnGroup}
     <div class="input">
        <input readonly bind:this={input} on:picker={handlePicker} on:click|preventDefault={handleClick} class="{clazz}" data-title="{title}" data-section="{section}"  id="{id}" type="{type}" />
        <div class="button-group">
          <button on:click={handleClick} class="button input-search-button">
              <span style="color: #05173F !important" class="mif-calendar"></span>
          </button>
        </div>
      </div>
  {:else}
     <input readonly bind:this={input} on:picker={handlePicker} on:click|preventDefault={handleClick} class="{clazz}" data-title="{title}" data-section="{section}"  id="{id}" type="{type}" />
  {/if}
 
{#if show}
    <CalendarPicker bind:this={calendar} on:ready={onReady}  on:close="{(e)=>{show = e.detail}}" on:choosen={handleChoosen} footer={true} popup={true} {choosen} {display}  />
{/if}
