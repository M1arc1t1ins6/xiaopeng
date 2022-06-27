<template>
  <div class="page">
    <img src="@/assets/imgs/logo.png" alt="" class="logo">
    <div id="searchinput">
    <input type="text" style="width:500px;" placeholder="请输入您要查找的内容" v-model="search_text"  @keyup.enter="onSearch">
    <button @click="onSearch">搜索</button>
    </div>

    <div>
      <img src="@/assets/imgs/voice.png" class="voice" @click="click">
      <img src="@/assets/imgs/bo.png" class="bo" v-show="showtime" />
      <p v-if="!showtime">点击上方按钮进行语音输入</p>
      <p v-else>您说，我正在听（再次点击按钮结束语音输入）</p>
      <button @click="translationStart">开始</button>
       <button @click="translationEnd">停止</button>
    </div>
  </div>
</template>

<script>
import IatRecorder from '../assets/js/IatRecorder';
// const iatRecorder = new IatRecorder('zh_cn','mandarin','efe725d4')//小语种-中文方言-appId
const iatRecorder = new IatRecorder()
export default {
  name: 'Search',
  data () {
    return {
      msg: '',
      content: '',
      searchLoading: false,
      showtime:false,
      search_text:'',
      search_data:''
      // ok:false
    }
  },
  methods:{
    onSearch(e){
      window.console.log(this.search_text)
      // this.$router.push("/Search_summary")
      this.$router.push("/temp.vue")
    },
    click(){
      this.showtime = !this.showtime;
    },
    translationStart() {
      iatRecorder.start();
    },
    translationEnd() {
      iatRecorder.onTextChange = (text) => {
        let inputText = text;
        this.searchData = inputText.substring(0, inputText.length - 1); //文字处理，因为不知道为什么识别输出的后面都带‘。’，这个方法是去除字符串最后一位
        console.log(this.searchData);
      };
      iatRecorder.stop();
    },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
   width:320px;
    height:200px;
}
.page{
    position: absolute;
    left:35%;
    top: 15%
}
.input{
  width: 600px;
}
.results{
  width: 60%;
  left: 20%;
  margin-top: 10px;
  position: relative;
}
.button{
  position: relative;
  top:20px

}
.voice{
  width: 80px;
  height: 80px;
  position: relative;
  /* top:400px;
  left:980px */
}
.bo{
  width: 80px;
  height: 80px;
  position: fixed;
  /* top:400px;
  left:1100px */
}
</style>
