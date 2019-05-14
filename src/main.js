import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式


Vue.config.productionTip = false
import {
    plusUtil,
} from '@/utils'
Vue.use(plusUtil); //全局挂在方法自定义（时间戳）
import './styles/app.scss' //全局自己的样式
import './../my-theme/index.less'

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //挂在echarts
Vue.use(iView) //使用iview组件 
Vue.use(Vuex)


// 路由进度条
NProgress.configure({
    easing: 'ease', // 动画方式    
    speed: 500, // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) => {
    //调用进度条
    NProgress.start();
    /* 路由发生变化修改页面title */
    if (window.document.title !== to.meta.title) {
        window.document.title = to.meta.title;
    }
    next();
    // 判断是否登录
    let token = localStorage.getItem('myToken')
    if (token) {
        next()
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    }

});
// 置顶
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
    NProgress.done()
})

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})