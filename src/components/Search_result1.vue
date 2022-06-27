<template>
  <div class="page">
    <div class="description_box">
      <a-button class="return_button" @click="toSearch_summary">
        返回
      </a-button>
      <img src="@/assets/imgs/car_sample.jpg" alt="" class="search_sample_img">
      <a-descriptions class="searchInfo" title="小鹏P7">
        <!-- <a-descriptions-item label="UserName">
          Zhou Maomao
        </a-descriptions-item> -->
        <!-- <a-descriptions-item label="Telephone">
          1810000000
        </a-descriptions-item>
        <a-descriptions-item label="Live">
          Hangzhou, Zhejiang
        </a-descriptions-item>
        <a-descriptions-item label="Remark">
          empty
        </a-descriptions-item>
        <a-descriptions-item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item> -->
      </a-descriptions>
    </div>
    <a-table :columns="columns" :data-source="data" class="results">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> 名字
    </span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title:"名字",
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '年收入',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '职业',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '性别',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default {
  name: 'SearchResult',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: 'input search content',
      searchLoading: false,
      data,
      columns,
      data_listq: {},
    }
  },
  methods:{
    toSearch_summary(e){
      // this.data_list = this.$route.query.data
      this.$router.push("/Search_summary")
    }
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
  right: 5%;
}
</style>
