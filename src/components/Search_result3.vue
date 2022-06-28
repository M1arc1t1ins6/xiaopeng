<template>
  <div class="page">
     
    <div class="description_box">
      <a-button class="return_button" @click="toSearch_summary">
        返回
      </a-button>
      <img src="@/assets/imgs/car_sample.jpg" alt="" class="search_sample_img">
       <div id="chartLine" class="line-wrap"></div>
      <a-descriptions class="searchInfo" title="小鹏P7过去一年的售价变化如下">
      <p>当前报价:200000</p>
      </a-descriptions>
    
     
    </div>
 
  </div>
 
</template>

<script>
import * as echarts from 'echarts';
require('echarts/theme/shine');//引入主题
export default {
  name: 'SearchResult',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: 'input search content',
      searchLoading: false,
      data_listq: {},
      chartLine: null
    }
  },
  methods:{
    toSearch_summary(e){
      // this.data_list = this.$route.query.data
      this.$router.push("/Search_summary")
    },
     drawLineChart() {
        var myChart = echarts.init(document.getElementById('chartLine'));// 基于准备好的dom，初始化echarts实例
        let option = {

            calculable : true,
            xAxis: { type: 'category', data: ['jun', 'jul', 'apr', 'sep', 'oct', 'nov', 'dec','jan','feb','mar','apr','may'] },
            yAxis: { type: 'value'},
            series: [
              { data: [this.data_list['jun'], this.data_list['jul'], this.data_list['apr'], this.data_list['sep'], this.data_list['oct'], this.data_list['nov'], this.data_list['dec'], 
              this.data_list['jan'], this.data_list['feb'], this.data_list['mar'], this.data_list['apr'], this.data_list['may']], type: 'line'
              }
            ]
        };
    //     // 使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
      }
  },
  mounted(){
      this.data_list = this.$route.query.data
      this.$nextTick(() => {
        this.drawLineChart();
      })         
  }
    
 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#inputsearch{
  width:600px
}
.logo{
  width: 15%;
}
.page{
  margin: 0 auto;
  position: relative;
}
.input{
  width: 24%;
  left: 38%;
}
.results{
  width: 60%;
  left: 20%;
  margin-top: 10px;
  position: relative;
}
.searchInfo{
  width: 50%;
  left: 30%;
  top: 10%;
  position: absolute;
  text-align: left;
}
.search_sample_img{
  width: 25%;
  left: 0;
  position: absolute;
}
.description_box{
  position: relative;
  height:260px;
  width:60%;
  margin: 0 auto;
}
.return_button{
  position: absolute;
  right: 10%;
  color:red
}

.line-wrap{
    width:800px;
    height:400px;
    position: relative;
    top:70%
}
</style>
