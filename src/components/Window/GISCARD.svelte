<script>
   
    export let cardHeight = 400;
    export let cardWidth = 400;
    export let cardRadius = 0;
    export let name;
    export let email;
 
    export let office;
    export let title = "Insert Title";
    export let photoHeight = "300px";
    export let photo = "https://images.pexels.com/photos/3526416/pexels-photo-3526416.jpeg";

   

</script>
<style>

    h2{
        text-align: center;
       
    }
    .small-line{

        line-height: 2px;
    }
    a{
        color: white;
    }
    #title{
        position: relative;
        bottom: 23px;
        color: black;
        height: 70px;
        width: 260px;
        background: #ddd;
    }



    img{
        border: 5px solid #ddd!important;
    }
</style>

<div id="card" style="border-raidus:{cardRadius};height: {cardHeight}px; width: {cardWidth}px;">
    <div id="photo"  >
        <img src="{photo}" loading="lazy" alt="Stock" style="width: 250px; height:250px;object-fit:cover;">
        <div id="title">
        <br>
             <h2 class="small-line">{title}</h2>
        </div>
       
    </div>
</div>