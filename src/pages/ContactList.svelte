<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Wrapper from "../components/Wrapper.svelte";
    import PhotoCard from "../components/Cards/PhotoCard.svelte";
    let format = "webp";

    function onLoadError() {
      format = "jpg";

    }

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

    .grid-boss{
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 600px;
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
        flex-wrap: wrap;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 3%;
        
    }


     @media screen and (max-width: 1024px) {

       .grid-staff{
               display: grid;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            
       }
    }

</style>
<Header />
<Wrapper>

  <div class="pics-manage">
    <h2 class="titleCenter">LRGVDC – Emergency Communications Division Contact List</h2>
        <div class="grid-boss">
        <PhotoCard
        on:error={onLoadError}
         office="(956) 682-3481 Ext. 176" name="Manuel Cruz" email="mcruz@lrgvdc911.org" cardHeight="500" cardWidth="350"
         photo="./build/assets/staff/mcruz.{format}" title="Director of Public Safety" />
  </div>
        





    </div>

    <h2 class="titleCenter">Location Validation</h2>
        <div class="grid-staff">
        
             <PhotoCard 
             
             office="(956) 682-3481 Ext. 154" name="Raul Madero" email="rmadero@lrgvdc911.org"  cardHeight="500" cardWidth="350" 
             photo="./build/assets/staff/rmadero.{format}" title="Program Supervisor II" />

        </div>

        <div class="grid-staff">
            
            <PhotoCard 
            
            office="(956) 682-3481 Ext. 187" name="Jose L. Hernandez" email="jhernandez@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/lhernandez.{format}" title="Program Specialist I" />

            <PhotoCard
             
             office="(956) 682-3481 Ext. 169" name="Juan Torres" email="jtorres@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/jtorres.{format}" title="Program Specialist I" />

            <PhotoCard

             office="(956) 682-3481 Ext. 139" name="Rosemary Contreras" email="rcontreras@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/rcontreras.{format}" title="Customer Service IV" />

            <PhotoCard office="(956) 682-3481 Ext. 174" name="Maribel Alonzo" email="malonzo@lrgvdc911.org"  cardHeight="500" 
            cardWidth="350" photo="./build/assets/staff/malonzo.{format}" title="Customer Service II" />

        </div>

    <h2 class="titleCenter">Geographic Information System (GIS)</h2>

        <div class="grid-staff">
            
            <PhotoCard office="(956) 682-3481 Ext. 144" name="Jose A. Garcia" email="jgarcia@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/jgarcia.{format}" title="Program Supervisor II" />

        </div>

        <div class="grid-staff">

            <PhotoCard office="(956) 682-3481 Ext. 136" name="Selenne I Vallejo" email="svallejo@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/svallejo.{format}" title="Program Specialist I" />

            <PhotoCard office="(956) 682-3481 Ext. 175" name="Savannah Arredondo" email="sarredondo@lrgvdc911.org" cardHeight="500" cardWidth="350" 
            photo="./build/assets/staff/sarredondo.{format}" title="Customer Service II" />    

            <PhotoCard office="(956) 682-3481 Ext. 135" name="Monica Estrada" email="mestrada@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/mestrada.{format}" title="Customer Service II" />

        </div>

    <h2 class="titleCenter">Systems and PSAP Operations</h2>

        <div class="grid-staff">
             <PhotoCard office="(956) 682-3481 Ext. 143" name="Hector Chapa" email="hchapa@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/hchapa.{format}" title="Program Supervisor II" />
        </div>

        <div class="grid-staff">
             
             <PhotoCard office="(956) 682-3481 Ext. 124" name="Dennis Moreno" email="dmoreno@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/dmoreno.{format}" title="Program Specialist I" />

             <PhotoCard office="(956) 682-3481 Ext. 137" name="Daniel Gutierrez" email="dgutierrez@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/jgutierrez.{format}" title="Customer Service II" />

             <PhotoCard office="(956) 682-3481 Ext. 155" name="Leonel Valdez" email="lvaldez@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/lvaldez.{format}" title="Customer Service II" />
        
        </div>

    <h2 class="titleCenter">Database</h2>

        <div class="grid-staff">
            
            <PhotoCard office="(956) 682-3481 Ext. 162" name="Maggie Garza" email="mgarza@lrgvdc911.org" cardHeight="500" cardWidth="350" 
            photo="./build/assets/staff/mgarza.{format}" title="Program Supervisor II" />
                        
            <PhotoCard office="(956) 682-3481 Ext. 135" name="Alfredo Garcia" email="agarcia@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             photo="./build/assets/staff/agarcia.{format}" title="Customer Service II" />

        </div>    

        <h2 class="titleCenter">Public Education</h2>

        <div class="grid-staff">

            <PhotoCard office="(956) 682-3481 Ext. 150" name="Ariana Morales" email="amorales@lrgvdc911.org"  cardHeight="500" cardWidth="350"
            photo="./build/assets/staff/amorales.{format}" title="Program Specialist I" />


        
        </div>
 

</Wrapper>
<Footer />