<template>
  <div class="Welcome">
    <h1>{{ msg }}</h1>
    <p  id="TextToNextPage">{{next}}<span style="color: blue; cursor:pointer"  @click="toLogin" >点击此处</span>开始使用</p>
    <div class="logo" >
    <img src="../assets/imgs/logo.png" class="logoimg">
  </div>
  </div>
 
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: '智能信息查询系统',
      next: '欢迎使用小鹏汽车内部员工智能信息查询系统,'
    }
  },
  methods:{
    toLogin(e){
      this.$router.push("/login")
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: '微软雅黑';
  font-size: 300%;
  position: absolute;
  left: 60%;
  top:40%;
}
#TextToNextPage
{
    font-family: '微软雅黑';
    /* font-size: 300%; */
    position: absolute;
    left: 60%;
    top:48%;
}
.logoimg{
    width:450px;
    height:250px;
}
.logo{
    position: absolute;
    left:38%;
    top: 32%
}
</style>