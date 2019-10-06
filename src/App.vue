<template>
  <div id="app">

  <div>
    <b-navbar toggleable="lg" type="light" id="nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="nav" class="flex-nav">
          <router-link id="sunday-nav" to="/">Sunday  </router-link>
          <router-link id="monday-nav" to="/monday">Monday  </router-link>
          <router-link id="tuesday-nav" to="/tuesday">Tuesday  </router-link>
          <router-link id="wednesday-nav" to="/wednesday">Wednesday  </router-link>
          <router-link id="thursday-nav" to="/thursday">Thursday  </router-link>
          <router-link id="friday-nav" to="/friday">Friday  </router-link>
          <router-link id="saturday-nav" to="/saturday">Saturday  </router-link>
        </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

* {
  background-color: rgb(221, 221, 221);
  margin: 0;
}
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .bg-info {
    background-color: #78c8c7 !important
  }
}
#nav {
  background-color: #78c8c7;
  padding: 2% 2% 1% 2%;
  width: 100%;

button {
  width:100%;
}
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    background-color: #78c8c7;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    font-size: 25px;
  }
  @media only screen and (min-width: 2000px) {
    /* For desktop: */
    font-size: 50px;
  }
    &.router-link-exact-active {
      &#sunday-nav {
        color:#00767a;
      }
      &#monday-nav {
        color: #494383;
      }
      &#tuesday-nav {
        color: #7971d0;
      }
      &#wednesday-nav {
        color: #8557a7;
      }
      &#thursday-nav {
        color: #b1337d;
      }
      &#friday-nav {
        color: #dd437b;
      }
      &#saturday-nav {
        color: #e5729c;
      }
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
  margin-bottom: 70px;

  p {

    @media only screen and (min-width: 600px) {
    /* For tablets: */
    column-count: 2;
    -webkit-column-rule: 1px solid #78c8c7;
    -moz-column-rule: 1px solid #78c8c7;
    column-rule: 1px solid #78c8c7;
    column-gap: 10%;
    }

  }

  h1 {
    font-size: 3em;
  }
}

.footer{
  position: static;
  bottom: 0;
  right: 5%;
  width: 100%;
  padding-top: 5%;

  select {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    width: 25%;
    min-width: 252px;
  }
}

img {
  width: 100%;
  height: 100%;
  padding-bottom: 5%;
}

.sunday-color {
  color:#00767a;
}

.monday-color {
  color: #494383;
}

.tuesday-color {
  color: #7971d0;
}

.wednesday-color {
  color: #8557a7;
}

.thursday-color {
  color: #b1337d;
}

.friday-color {
  color: #dd437b;
}

.saturday-color {
  color: #e5729c;
}

.flex-nav {
  display: flex;
  justify-content: space-around;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */

}
</style>
