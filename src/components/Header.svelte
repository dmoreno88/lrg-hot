<script>

  console.log(window.app);
  let mobileNav;

  function onShowMenu() {
   // document.getElementById("mySidenav").style.width = "250px";

    mobileNav.style.width = "80%";
  }

  function closeNav() {
    mobileNav.style.width = "0";
  }
</script>

<style> 

.wrapper{
  
  height: 60px;
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
  width: 40px;
  
}
img{
  max-width: 100%;
  width: 121px;
  z-index: 99999;
  
}

.logo{
  position: absolute;
  left: 34px;
  z-index: 4;
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
  background:rgba(15, 82, 186, .72);
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
  font-size: 21px;
   padding:0;
}

.td-mobile-content li {
   float: none;
  margin-left: 0;
  padding: 12px 30px 12px 12px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.td-mobile-content li:hover{
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  .logo{
    position: relative;
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
      grid-template-columns: 88% 12%;
    }

    .navbar{
      display: none;
    }

    .btnnav{
      display: flex;
      height: 64px;
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

</style>



<div class="wrapper">
    <div class="logo">
        <img alt="logo"  src="/build/assets/logo/public_safety_logo.webp" />
    </div>
    
    <div on:click={onShowMenu} class="btnnav">
      <button on:tap={onShowMenu} on:click={onShowMenu}>
        <span class="mif-menu"></span>
      </button>
    </div>

    <div class="navbar">
  
          <a on:click|preventDefault="{()=>{window.app.navigate('/')}}" href="#Home">HOME</a>
          <a on:click|preventDefault="{()=>{window.app.navigate('/PubEd')}}" href="#PubEd">PUBLIC EDUCATION</a>


          <div class="dropdown"><button class="dropbtn">SERVICES </button>
          <div class="dropdown-content">
              <a href="AddressRequest">Address Request</a>
              <a on:click|preventDefault="{()=>{window.app.navigate('/EventRequest')}}"  href="EventRequest">Public Education Request</a>
              <a href="RecorderRequest">Recorder Request</a>
            </div>
          </div> 
          
          <div class="dropdown"><button class="dropbtn">TRAININGS </button>
          <div class="dropdown-content">
              <a href="Train1">Link 1</a>
              <a href="Train2">Link 2</a>
          </div>
          </div> 

          <div class="dropdown"><button class="dropbtn">ABOUT </button>
          <div class="dropdown-content">
              <a on:click|preventDefault="{()=>{window.app.navigate('/WhoWeAre')}}" href="WhoWeAre">WHO WE ARE</a>
              <a on:click|preventDefault="{()=>{window.app.navigate('/ContactList')}}" href="ContactList">CONTACT LIST</a>
          </div>
          </div> 

          <a href="Contact">CONTACT</a>

    </div>

    <div bind:this={mobileNav} class="mobileNav">
        <div class="td-mobile-wrap">
           <a href="javascript:void(0)" class="closebtn" on:click|preventDefault={closeNav} >&times;</a>
        </div>
        
        <div class="td-mobile-content">
          <ul>
            <li>HOME</li>
            <li>PUBLIC EDUCATION</li>
            <li>SERVICES</li>
            <li>TRAININGS</li>

            <li>CONTACT</li>
          </ul>
        </div>
    </div>

</div>






