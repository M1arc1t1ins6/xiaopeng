<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>
<script>
import Search from './components/search.vue'
import Search_result1 from './components/Search_result1.vue'
import Search_result2 from './components/Search_result2.vue'
import Search_result3 from './components/Search_result3.vue'
import Login from './components/login.vue'
import Search_summary from './components/Search_summary.vue'
import temp from './components/temp.vue'
export default {
  name: 'App',
  components: {
    Search_summary,
    Search_result1,
    Search_result2,
    Search_result3,
    Search,
    Login,
    temp
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
