<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" id="nav">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="nav" class="flex-nav">
            <b-nav-item> <router-link id="sunday-nav" to="/">Sunday</router-link></b-nav-item>
            <b-nav-item> <router-link id="monday-nav" to="/monday">Monday</router-link></b-nav-item>
            <b-nav-item> <router-link id="tuesday-nav" to="/tuesday">Tuesday</router-link></b-nav-item>
            <b-nav-item> <router-link id="wednesday-nav" to="/wednesday">Wednesday</router-link></b-nav-item>
            <b-nav-item> <router-link id="thursday-nav" to="/thursday">Thursday</router-link></b-nav-item>
            <b-nav-item> <router-link id="friday-nav" to="/friday">Friday</router-link></b-nav-item>
            <b-nav-item> <router-link id="saturday-nav" to="/saturday">Saturday</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
var options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

* {
  background-color: rgb(221, 221, 221);
  margin: 0;
}
body {
  min-width: 360px;
}
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .bg-info {
    background-color: #78c8c7 !important;
  }
}

#nav {
  background-color: #78c8c7;
  padding: 2% 2% 1% 2%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-align: right;

  @media only screen and (min-width: 992px) {
    justify-content: space-evenly;
    border-bottom-left-radius: 0;
    padding-right: 0;
  }

  .nav-item {
    background: transparent;
  }

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    background: transparent;

    @media only screen and (min-width: 600px) {
      /* For tablets: */
      font-size: 18px;
    }
    @media only screen and (min-width: 768px) {
      /* For desktop: */
      font-size: 25px;
    }
    @media only screen and (min-width: 2000px) {
      /* For tv: */
      font-size: 50px;
    }
    &.router-link-exact-active {
      padding-right: 15px;

      @media only screen and (min-width: 600px) {
        /* For tablets: */
        font-size: 22px;
      }
      @media only screen and (min-width: 768px) {
        /* For desktop: */
        font-size: 30px;
      }
      @media only screen and (min-width: 2000px) {
        /* For tv: */
        font-size: 55px;
      }

      &#sunday-nav {
        color: #00767a;
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
  padding-bottom: 70px;

  .special-text {
    font-size: 1.5em;
    font-weight: 900;
  }

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

.footer {
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
  background: transparent;
}

.sunday-color {
  color: #00767a;
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
</style>
