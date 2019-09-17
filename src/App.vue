<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Sunday</router-link> |
      <router-link to="/monday">Monday</router-link> |
      <router-link to="/tuesday">Tuesday</router-link> |
      <router-link to="/wednesday">Wednesday</router-link> |
      <router-link to="/thursday">Thursday</router-link> |
      <router-link to="/friday">Friday</router-link> |
      <router-link to="/saturday">Saturday</router-link>
    </div>

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');

* {
  background-color: rgb(221, 221, 221);

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 20px;
    &.router-link-exact-active {
      color: #42b983;
      font-size: 25px;
    }
  }
}
.container {
  width: 80%;
  margin: auto;
  justify-self: center;
}
.content {
  display: flex;
  justify-content: center;
}
img {
  width: 30%;
}
p {
  padding-left: 10%;
  font-family: 'Dancing Script', cursive;
}
</style>
