<script>
    import {onMount} from "svelte";
    import RoundCard from "../components/RoundCard.svelte";
    import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
    import Wrapper from "../components/Wrapper.svelte";
    
    onMount(() => {

        //Lazy LOADING CSS IMPORTANT FOR TABLE..
        lazyLoadingCSS();
    });

    function lazyLoadingCSS() {
        const links = document.getElementsByTagName("link");
        const size = links.length;
        let found = false;
        for(var i = 0; i < size; i++){
            
            if(links[i].rel == "stylesheet" && links[i].href.indexOf("metro-table.css") > 0){
               
                found = true;
                break;
            }
        }

        if(!found) {
            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = '/metro-table.css';

            head.appendChild(style);
        }
    }

</script>
<style>
    .flex-main{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    }
    #table{
        height: 390px;
        padding: 20px;
        border: 1px solid #ccc!important
    }


     img {
    max-width: 98%;
    max-height: 100%;
    border: 1px solid #ccc!important;
    padding: 4px;
}

    .center {
        text-align: center;
    }
</style>
<Header />
<Wrapper>
    <div class="flex-main">
        <div class="center">
            <img loading="lazy" class="clickable" alt="LV" src="./build/assets/carousel/location_validation.png" />
        </div>
        
        <div id="table">
            <table class="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bill</td>
                        <td>Gates</td>
                        <td>@billy</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Steve</td>
                        <td>Jobs</td>
                        <td>@stevy</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>Page</td>
                        <td>@larry</td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
</Wrapper>
<Footer />