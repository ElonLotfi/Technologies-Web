export * from './user.service';

<template>
  <v-app>
    
    <div class="app">
      <nav>
        <ul class="menu">
          <li>
            <a href="#!"
              ><router-link tag="a" to="/"
                ><img
                  class="team"
                  src="https://img.icons8.com/color/48/000000/home.png" /></router-link
            ></a>
          </li>
          <li>
            <a href="#!">
              <router-link tag="a" to="/home"
                ><img
                  class="team"
                  src="https://img.icons8.com/dusk/64/000000/waiter.png" /></router-link
            ></a>
          </li>
          <li>
            <a href="#!"
              ><router-link tag="a" to="/Addrestaurant">
                <img
                  class="team"
                  src="https://img.icons8.com/flat_round/64/000000/plus.png" /></router-link
            ></a>
          </li>

          <li>
            <a href="#!">
              <router-link tag="a" to="/Team"
                ><img
                  class="team"
                  src="https://img.icons8.com/nolan/64/developer.png" /></router-link
            ></a>
          </li>
          <li>
            <a href="https://github.com/JugheadTn">
              <img
                class="team"
                src="https://img.icons8.com/bubbles/50/000000/github.png"
            /></a>
          </li>
        </ul>
      </nav>

      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "/", icon: "mdi-view-dashboard" },
        { title: "/Restaurant", icon: "mdi-forum" },
      ],
      links: ["home", "Restaurant", "Settings"],
      mini: true,
      drawer: true,
    };
  },
};
</script>

<style lang="scss" >
.app {
  background-color: #1c1d22;
}

.vcard {
  margin-top: 600 px;
  width: 700px;
  margin: 0 auto;
  background-color: white;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  height: 80px;
  list-style: none;
  background-color: #1c1d22;
}

.menu li {
  width: 125px;
  height: 50px;
  transition: background-position-x 0.9s linear;
  text-align: center;
  text-transform: uppercase;

  a {
    font-size: 22px;
    color: white;
    text-decoration: none;
    transition: all 0.45s;
  }

  &:hover {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
    animation: line 1s;
  }

  &:hover a {
    color: #d94f5c;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
}

@keyframes line {
  0% {
    background-position-x: 390px;
  }
}
.team {
  width: 40px;
  height: 40px;
}
</style>