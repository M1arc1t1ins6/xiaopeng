import Search from './components/search.vue'
import Search_result1 from './components/Search_result1.vue'
import Search_result2 from './components/Search_result2.vue'
import Search_result3 from './components/Search_result3.vue'
import Login from './components/login.vue'
import Search_summary from './components/Search_summary.vue'
import Welcome from './components/Welcome.vue'
const routers=[
    {
        path: '/login',name:"login",component:Login
    },
    {
        path: '/Search',name:"Search",component:Search
    },
    {
        path:'/Search_summary',name:"Search_summary",component:Search_summary
    },
    {
        path:'/Search_result1',name:"Search_result1",component:Search_result1
    },
    {
        path:'/Search_result2',name:"Search_result2",component:Search_result2
    },
    {
        path:'/Search_result3',name:"Search_result3",component:Search_result3
    },
    {
        path:'/Welcome',name:"Welcome",component:Welcome
    },
    {
        path:'/temp',name:"temp",component:Welcome
    },
    {path: '',name:"Welcome",component:Welcome}
]
export default routers