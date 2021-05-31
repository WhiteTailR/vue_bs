import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
import Bar from "./components/Bar";
import Foo from "./components/Foo";
import Login from "./components/Login";
import NavLeft from "./components/NavLeft";
import Home from "./views/home/index"
import Hello from "./components/Hello";
import Navigation from "./components/Navigation/index";
import UserList from './views/userList/index';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

/*路由组*/
const routes=[
    {
        path:'/',component:Login
    },
    {
        path:'/Navigation',component:Navigation
    },
    {
        path:'/Home',
        component:Home,
        children:[
            {
                path:'UserList',
                component:UserList
            },
            {
                path:'Hello',
                component:Hello
            },
            {
                path:'Bar',
                component:Bar
            },
            {
                path:'Foo',
                component:Foo
            }
        ]
    },
    {path:'/NavLeft',component:NavLeft}
];
/*路由实例*/
const router=new VueRouter(
    {
      routes
    }
);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
