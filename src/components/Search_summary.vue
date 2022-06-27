<template>
  <div>
    
    <a-row class="all_holder">
    <a-button type="danger" class="return" @click="toSearch">
      返回
    </a-button>
    </a-row> 
    <div>
   <a-row class="holder">
    <h1>
      搜索结果
    </h1>
   </a-row>
    <a-row class="result1">
     <h2>
      p7订单记录
     </h2>
     <img src="@/assets/imgs/p7.png" class="result_img" >
      <a-button type="primary" class="result_button" @click="search_check(1)">
      查看详细
    </a-button>
    </a-row>
    <a-row class="result2">
     <h2>
      p7月销售情况
     </h2>
     <img src="@/assets/imgs/column.png" class="result_img" >
     <a-button type="primary" class="result_button"  @click="search_check(2)">
      查看详细
    </a-button>
    </a-row>
    
    <a-row class="result3">
     <h2>
      p7历史售价
     </h2>
     <img src="@/assets/imgs/line.png" class="result_img">
     <a-button type="primary" class="result_button" @click="search_check(3)">
      查看详细
    </a-button>
    </a-row>
    <a-row class="recommendation">
      <h1>
      相关推荐
    </h1>
   
    <img src="@/assets/imgs/p7.png" class="recommendation_img">
    <h3>
      小鹏p7配置信息
    </h3>
   <a-button type="primary" class="recommendation_button">
      查看详细
    </a-button>
   
   
    </a-row>
    
  </div>
  </div>
  
</template>


<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      msg: '',
      content: '',
      searchLoading: false,
      para:'',
      ok:true,
      search_data:{name:"陈小春",age:"48"}
    }
  },
  methods:{
    toSearch(e){
      this.$router.push("/Search")
    },
    toSearch_result(e){
      this.$router.push("/Search_result1")
    },
    getData(index) {
        var temp = this
        var str = "" 
        if(index==1)
        {
          str = 'http://8.134.217.84:11111/order/detail'
        }
        else if(index==2)
        {
          str = 'http://8.134.217.84:11111/sale/detail'
        }
        else
        {
          str = 'http://8.134.217.84:11111/history/detail'
        }
        axios.get(str,
        {
          type:"P7"
        }).then((response)=>{
          // temp.search_data = response.data
        }).catch((response)=>{
          console.log(response);
        })
    },
    search_check(index){
              var temp = this

              this.$options.methods.getData(index)
              if (index==1)
              {
               this.$router.push({
                        path: '/Search_result1',
                        query: {
                          // name: "ming",
                          // age: 18
                          data: this.search_data
                        }
                      })
                console.log("成功跳转")
              }
              else if(index==2)
              {
                this.$router.push("/Search_result2")
              }
              else if(index==3)
              {
                this.$router.push("/Search_result3")
              }
              else
              {
                this.$alert('很遗憾！找不到相关信息！')
              }
        },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

.result1 {
  background-color: rgb(214,229,255);
  height: 120px;
  width: 550px;
  border: 2px solid rgb(11, 23, 158);
  position: relative;
  left: 325px;
  margin-top: -400px;
}
.result3 {
  background-color: rgb(214,229,255);
  height: 120px;
  width: 550px;
  border: 2px solid rgb(11, 23, 158);
  position: relative;
  left: 325px;
  margin-top: 50px;
}
.result2 {
  background-color: rgb(214,229,255);
  height: 120px;
  width: 550px;
  border: 2px solid rgb(11, 23, 158);
  position: relative;
  left: 325px;
  margin-top: 50px;
}
.holder{
  border: 2px solid #000;
  height: 600px;
  width:600px;
  position: relative;
  left:300px;
  top:100px
}
.all_holder{
  border: 3px solid #000;
  height: 800px;
  width:1500px;
  position: absolute;
  left: 120px;
  top:70px
}

.recommendation {
  
  height: 600px;
  width: 450px;
  border: 2px solid #000;
  position: relative;
  left: 1000px;
  margin-top: -560px;
}
.result_button{
  position: relative;
  left:100px;
  top:-20px
}
img{
  width: 50px;
}
h2{
  position: relative;
  left: -200px;
  font-family:'微软雅黑';
  font-weight: 1000;
}
h3{
  position: relative;
  font-size:large;
  font-family:'微软雅黑';
  font-weight: 1000;
  margin-top: 30px;
}

.result_img{
  height: 115px;
  width: 200px;
  position: relative;
  margin-top: -41px;
  left: 50px;
}
.recommendation_img{
  height: 250px;
  width: 400px;
  position: relative;
  margin-top: 42px;
}
.recommendation_button{
  position: relative;
  margin-top: 20px;
}
.return{
  position: relative;
  margin-left: -1425px;
  margin-top: 5px;
}
</style>
