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
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background-color: #2c3e50;
  padding: 5% 0 3% 0;
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    background-color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      font-size: 25px;
    }
  }
}
.container {
  padding-top: 5%;
  width: 80%;
  margin: auto;
  justify-self: center;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    flex-direction: row;
  }
}

.footer{
  position: fixed;
  top: 90%;
  right: 5%;
}
img {
  width: 100%;
  height: 100%;
  padding-bottom: 5%;

    @media only screen and (min-width: 600px) {
      /* For tablets: */
      max-width: 30%;
    }
}
p {
  font-family: 'Dancing Script', cursive;
    @media only screen and (min-width: 600px) {
    /* For tablets: */
    padding-left: 10%;
  }
}


@media only screen and (min-width: 768px) {
  /* For desktop: */

}
</style>
