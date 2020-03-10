<script>
     import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
    import EventRequest from "../components/PubEdForm/EventRequest.svelte";
    import NoteEventRequest from "../components/PubEdForm/NoteEventRequest.svelte";
    let notes = [
        "All event requests must be submitted by 14 business days prior to your event to be considered.",
        "Requests not meeting the 14 days requirement will be reviewed by LRGVDC E-Comms.",
        "If you are experiencing problems, please call us directly at (956) 682-3481 ext. 124"

    ]
</script>
<style>
    .grid-container {
        display: grid;
        height: auto;
        grid-template-columns: auto auto auto;
       
    }
h1{
    color: #263E70;
    text-align: center;
    margin-bottom: 8px;
}
h3{
  text-decoration: underline;
  color: #BB2026;
  
  
}
.img {
    width: 350;
    height: 90vh; 
}
</style>
<Header />
<div class="grid-container">
    <div class="grid-item">
       
    </div>
    <div class="grid-item">
        <h1>Event Request</h1>
        <NoteEventRequest title="Note" {notes} />
        <h3 style="text-align: center; color: #263E70;cursor: pointer;"><img width="18" height="18" src="/assets/png/calendar.png" alt="Calendar" />Click to view scheduled events</h3>
        <EventRequest />     
    </div>
    <div class="grid-item">
        
    </div>
</div>
<Footer />
