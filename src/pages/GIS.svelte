<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Wrapper from "../components/Wrapper.svelte";
    import GISCARD from "../components/Window/GISCARD.svelte";
</script>
<style>
    h2{
        color: rgba(6, 22, 168, 0.815);
        font-size: 50px;
        font-weight: bold;
        margin: 3px 0 10px;
    }

    .titleCenter{
        text-align: center;
        padding-top: 2%;
    }

      .center-image{
          display: center;
          text-align: center;
          align-content: center;
          justify-content: center;
          max-width: 1280px;
          padding-left: 8px;
      }


    .pics-manage{
        height: auto !important;
        padding-top: 5%;
        padding-bottom: 0%;
    }
    .grid-staff{
        display:flex;
        flex-direction:row;
        justify-content: space-evenly;
        align-items:center;
        padding-left: 9%;
        padding-right: 5%;
        
    }



    

</style>
<Header />
<Wrapper>

  <div class="pics-manage">



        <div class="center-image">
            <img class="imgResponsive" width=1380px src="./build/assets/pages/gis/GIS_WEBSITE.gif" alt="GIS Photo" />
        </div>


    <h2 class="titleCenter">OUR MAP GALLERY</h2>

        <div class="grid-staff">

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />
        </div>

        <div class="grid-staff">

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />
        </div>

        <div class="grid-staff">

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />

             <GISCARD photo="./build/assets/pages/gis/911WebMap.png" title="Program Specialist I" />
        </div>
  </div>


</Wrapper>
<Footer />