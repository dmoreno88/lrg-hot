<script>
    import Carousel from "../components/Carousel.svelte";
    import RoundCard from "../components/RoundCard.svelte";
    import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
    import Wrapper from "../components/Wrapper.svelte";
 
</script>
<style>
    .flex{
        margin-top: 42px;
        display: flex;
        flex-direction: row;
        justify-items: center;
        text-align: center;
        margin:0 auto;
        padding: 50px;
        
    }
    .flex-main{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        
    }
    .ecoms{
        
        background: rgba(20, 57, 117, 1);
        max-width: 100%;
        height: 290px;
        margin-bottom: 50px;
    }

    .ecoms2{
        
        background: #8a0303;
        max-width: 100%;
        height: 290px;
        margin-bottom: 50px;
    }

    

    #innerComms{
        height: 100%;
        margin-top: 65px;
        padding: 0;
        color: white;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    #innerComms2{
        height: 100%;
        margin-top: 15px;
        padding: 0;
        color: white;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: center;

    }

    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 27pt;
        text-align: center;
        line-height: 50px;
        padding: 75px;
        width: 350px;
        height: 250px;
                
    }

    .title2{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 27pt;
        text-align: center;
        line-height: 45px;
        padding: 75px;
        width: 350px;
        height: 250px;
                
    }

    #callVolumeTitle{
        margin-top: 60px;
        margin-bottom: 60px;
    }

    hr.type_1 {
        border: 0;
        height: 195px;
        background-image: url('/build/assets/logo/logo_line.break2.png');
        background-repeat: no-repeat;
        background-size: 1150px;
        background-position: center;
        
    }
    
        h1{
        font-size: 50px;
        color: #F62817;
        text-align: center
        }

        h2{
        font-size: 50px;
        color: rgba(20, 57, 117, 1);
        text-align: center
        }

    @media screen and (max-width: 880px) {
      .flex{
          display: flex;
          flex-direction: column;
          align-items: center;
          max-height: 100%;
          height: 100vh;
      }
      
    }
    
          
    

</style>

<Header   />
<Wrapper>
    <div>
    <div class="flex-main">
        <Carousel />
        
        <div class="ecoms">
            <!-- <div id="titleServe">We Serve</div> -->
            <div id="innerComms">
                
                
                <div class="title">
                    <span>2</span>
                    <span>COUNTIES</span>
                </div>
                <div class="title">
                    <span>25</span>
                    <span>MUNICIPALITIES</span>
                </div>
                <div class="title">
                    <span>17</span>
                    <span>PSAPs</span>
                </div>
            </div>
        </div>
        
            <div id="title">
                <h1>Address Requests</h1>
               
                <div class="flex">
                    <RoundCard incrementValue={933} option="1" p={["Above is the total address requests", "completed since 2010 "]} title="Completed Requests" />
                    <RoundCard  option="2"

                    p={["Above is our current address requests", "completed for this month. "]}
                    title="Current Requests this Month" />
                    <RoundCard  option="3"
                    
                    linkOn={true} 
                    p={["Have you called to register for your 9-1-1 address?","Click below to see if your address letter is ready!",]}
                    title="Open Requests" />
                </div>
            </div>
    </div>

<hr class="type_1" />

<div id="callVolumeTitle">
    <h2>9-1-1 Call & Text Volume</h2>
</div>

                
    <div class="ecoms2">
            <!-- <div id="titleServe">We Serve</div> -->
            <div id="innerComms2">
                
                    <div class="title2">
                        <span>882,416</span>
                        <span>RESIDENTS SERVE</span>
                    </div>
                <div class="title2">
                    <span>41,075</span>
                    <span>AVERAGE 9-1-1 CALLS PER MONTH</span>
                </div>
                <div class="title2">
                    <span>1,369</span>
                    <span>AVERAGE 9-1-1 CALLS PER DAY</span>
                </div>
                
            </div>
        </div>
                
    </div>
</Wrapper>
<Footer />
