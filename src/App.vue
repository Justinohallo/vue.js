<template>
  <div id="app">
 
     <header>
  <nav> 
    <ul>
      <li class="nav-item">
        <router-link class='nav-link' active-class="foo" :to="{name: 'Home'}" exact>
        <img class='logo' src="./assets/build-a-bot-logo.png"/> 
        Build-a-bot
        </router-link>
        </li>
    <li class="nav-item">
        <router-link class='nav-link' active-class="foo" :to="{name: 'Build'}" exact>
        Build
        </router-link>
        </li>
    </ul>
  </nav>
</header>
<main>
        <router-view/>
   </main>
  </div>
</template>

<script>
export default {
  name: 'app',

};
</script>

<style>
body{
  background:linear-gradient(to bottom, #555, #999);
  background-attachment: fixed
}

</style>


<style scoped>

#app {
margin: 0 auto;
padding: 30px;
background-color:white;
width:1024px;
min-height:300px;
}

header {
  background-color: #999;
  width: 100%;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color:inherit;

}

.foo{
  color:white
}
</style>
