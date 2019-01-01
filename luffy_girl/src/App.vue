<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/course">课程</router-link>|
      <router-link to="/about">专题课程</router-link>
      <span class="pull-right">
        <span v-if="!this.$store.state.name">
            <router-link to="/login">登录</router-link>|
            <router-link to="/about">注册</router-link>
        </span>
        <span v-else>
            <span>{{this.$store.state.name}}</span>|
          <a @click="logout">注销</a>

        </span>

      </span>
    </div>
    <router-view/>
  </div>
</template>
<script>


      export default {

        methods: {
            logout: function () {
                // this.$store.state.name=''
                // this.$store.state.token=''
                this.$store.commit('logout')

            },

        },
    }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
