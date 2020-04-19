<script>
  let mobileNav;
  let format = "webp";

  function onShowMenu() {
   // document.getElementById("mySidenav").style.width = "250px";

    mobileNav.style.width = "80%";
  }

  function closeNav() {
    mobileNav.style.width = "0";
  }

  function handleMOptions(e) {
    e.preventDefault();
    e.stopPropagation();
     var children = this.childNodes;
     var lng = children.length;
     for(let i = 0; i < lng; i++){
        let element = children[i]
        if(element instanceof HTMLSpanElement) {
           element.classList.toggle("mif-minus")
           element.classList.toggle("mif-plus");
        }
        else if(element instanceof HTMLUListElement){
          if(!element.style.display) element.style.display = "none";
          else{
             element.style.display = (element.style.display == "none") ? "block" : "none";
          }
        }
     }

  }

  function onLoadError()
  {

    format = "png";
  }
</script>

<style> 

.wrapper{
  
  height: auto;
  background-color: #fff;
  border-bottom: 11px solid #ddd;
  border-top: 11px solid #D9B13B;

}
.navbar {
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  font-weight: 520;
}



.btnnav{
  display: none;
}
.btnnav button{
  background: transparent;
  width: 60px;
  height: 60px;
  font-size: 24px;
  
}

.mif-menu{
  font-weight: 800;
}

img{
  max-width: 100%;
  width: 110px;
  margin-top:8px;
  z-index: 99999;
  
}

.logo{
  position: absolute;
  left: 34px;
  z-index: 4;
}
.logo-title{
  display: none;
  text-align: center;
}

.navbar a {
  float: left;
  font-size: 25px;
  text-align: center;
  padding: 15px 18px;
  text-decoration: none;
  color: rgba(20, 57, 117, 1) !important;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 25px; 
  font-weight: 520;
  border: none;
  outline: none;
  color: rgba(20, 57, 117, 1) !important;
  padding: 15px 18px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  cursor: pointer;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color:#ddd;
  color: #fff;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ddd;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 2;
  cursor: pointer;

}

.dropdown-content a {
  float: none;
  padding: 15px 18px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: white;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
  cursor: pointer;
}

.mobileNav {
  position: absolute;
  z-index: 4;
  width: 0;
  top: 0;
  right: 0;
  background:rgba(15, 82, 186, .82);
  height: 100%;
  min-height: 968px;
  transition: 0.7s;
  overflow-x: hidden;
  color: #fff;
  
}

.mobileNav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
}

.mobileNav .closebtn {
  font-size: 48px;
  margin-bottom: 40px;
}

.td-mobile-wrap{
   display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
}

.td-mobile-content{
  padding: 20px 20px 0;
}

.td-mobile-content ul{
  list-style: none;
  margin:0;
  font-size: 28px;
   padding:0;
}

.td-mobile-content li {
   float: none;
  margin-left: 0;
  padding: 14px 2px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.subMenu{
  color: white !important;
}

  .link:hover{
  cursor: pointer !important;
  color: #F62817;
}

li span {
  float: right;
}

.td-mobile-content li ul{
  padding: 20px 12px;
}



@media only screen and (max-width: 1200px) {
  .logo{
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .logo-title{
    display: block;
    font-size: 1.5em;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 20% 80%;
  }

  .navbar {
      align-items: inherit;
      justify-content: space-around;
      font-weight: 200;
  }
}

@media only screen and (max-width: 1196px) {
     .wrapper {
      display: grid;
      grid-template-columns: 80% 20%;
    }

    .navbar{
      display: none;
    }

    .btnnav{
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
     
    }


    .btnnav > button:hover{
       cursor: pointer;
       color:rgba(20, 57, 117, 1);
       border: 1px solid rgba(20, 57, 117, 1);
    }
}
@media only screen and (max-width: 480px) {
  .logo-title{
    font-size: 14px;
  }
  .logo{
    left: 0;
  }
}

@media only screen and (max-width: 380px) {
  .logo-title{
    font-size: 12px;
  }

}
@media only screen and (max-width: 350px) {
  .logo-title{
    font-size: 9px;
  }

}

</style>



<div class="wrapper">
    <div class="logo">
        <img on:error={onLoadError}
         on:click|preventDefault="{()=>{window.app.navigate('/')}}" 
         alt="logo"  src="/build/assets/logo/public_safety_logo.{format}" />
        <div class="logo-title">
          <h1>Emergency Communications</h1>
        </div>
    </div>
    
    <div on:click={onShowMenu} class="btnnav">
      <button on:tap={onShowMenu} on:click={onShowMenu}>
        <span class="mif-menu"></span>
      </button>
    </div>

    <div class="navbar">
  
          <a on:click|preventDefault="{()=>{window.app.navigate('/')}}" href="#Home">HOME</a>
          <a on:click|preventDefault="{()=>{window.app.navigate('/PublicEducation')}}" href="#PubEd">PUBLIC EDUCATION</a>


          <div class="dropdown"><button class="dropbtn">SERVICES </button>
          <div class="dropdown-content">
              <a href="AddressLetter" 
              on:click|preventDefault="{()=>{window.app.navigate('/SignLetter');}}">
               ADDRESS LETTER</a>
              <a href="AddressRequest">ADDRESS REQUEST</a>
              <a on:click|preventDefault="{()=>{window.app.navigate('/UnderConstruction')}}"  href="UnderConstruction">RECORDING REQUEST</a>
              <a href="EventRequest">PUBLIC EDUCATION REQUEST</a>
            </div>
          </div> 
          
          <div class="dropdown"><button class="dropbtn">TRAININGS </button>
          <div class="dropdown-content">
              <a on:click|preventDefault="{()=>{window.app.navigate('/UnderConstruction')}}" href="Train1">Link 1</a>
              <a on:click|preventDefault="{()=>{window.app.navigate('/UnderConstruction')}}" href="Train2">Link 2</a>
          </div>
          </div> 

          <div class="dropdown"><button class="dropbtn">ABOUT </button>
          <div class="dropdown-content">
              <a on:click|preventDefault="{()=>{window.app.navigate('/WhoWeAre')}}" href="WhoWeAre">WHO WE ARE</a>
              <a on:click|preventDefault="{()=>{window.app.navigate('/ContactList')}}" href="ContactList">E-COMMS TEAM</a>
          </div>
          </div> 

           <a on:click|preventDefault="{()=>{window.app.navigate('/UnderConstruction')}}" href="#UnderConstruction">CONTACT</a>

    </div>

    <div bind:this={mobileNav} class="mobileNav">
        <div class="td-mobile-wrap">
           <a href="javascript:void(0)" class="closebtn" on:click|preventDefault={closeNav} >&times;</a>
        </div>
        
        <div class="td-mobile-content">
          <ul>
            <li class="link" on:click|preventDefault="{()=>{window.app.navigate('/')}}" >HOME</li>
            <li class="link" on:click|preventDefault="{()=>{window.app.navigate('/PublicEducation')}}">PUBLIC EDUCATION</li>
            <li class="link" on:click|stopPropagation={handleMOptions}>
              SERVICES
              <span class="mif-minus"></span>
              <ul class="subMenu">
                <li on:click|preventDefault="{()=>{window.app.navigate('/SignLetter'); closeNav()}}" class="link">ADDRESS LETTER</li>
                <li 
                on:click|preventDefault="{()=>{window.app.navigate('/UnderConstruction'); closeNav()}}" class="link">ADDRESS REQUEST</li>
                <li on:click|preventDefault="{()=>{window.app.navigate('/UnderConstruction'); closeNav()}}" class="link">PUBLIC EDUCATION REQUEST</li>
                <li on:click|preventDefault="{()=>{window.app.navigate('/UnderConstruction'); closeNav()}}" class="link">RECORDING REQUEST</li>
                
              </ul>
            </li>
            <li class="link">TRAININGS</li>
            <li on:click|preventDefault={handleMOptions} class="link">ABOUT
              <span class="mif-minus"></span>
              <ul class="subMenu">
                <li  on:click|preventDefault="{()=>{window.app.navigate('/WhoWeAre')}}" class="link">WHO WE ARE</li>
                <li on:click|preventDefault="{()=>{window.app.navigate('/ContactList')}}" class="link">E-COMMS TEAM</li>
              </ul>
            </li>
            <li class="link">CONTACT</li>
          </ul>
        </div>
    </div>

</div>






