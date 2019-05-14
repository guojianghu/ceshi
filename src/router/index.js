import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: resolve => require(['./../iview/index.vue'], resolve),
            meta: {
                title: '首页',
            },
            redirect: '/management',
            children: [{
                    path: 'management',
                    name: 'management',
                    component: resolve => require(['./../iview/content/management/management.vue'], resolve),
                    meta: {
                        title: '任务管理',
                    },
                },
                {
                    path: 'configure',
                    name: 'configure',
                    component: resolve => require(['./../iview/content/configure/Configure.vue'], resolve),
                    meta: {
                        title: '配置',
                    },
                },
                {
                    path: 'administration',
                    name: 'administration',
                    component: resolve => require(['./../iview/content/node/Administration.vue'], resolve),
                    meta: {
                        title: '节点管理',
                    },
                },
                {
                    path: 'deduction',
                    name: 'deduction',
                    component: resolve => require(['./../iview/content/deduction/Deduction.vue'], resolve),
                    meta: {
                        title: '扣费流水',
                    },
                },
                {
                    path: 'task',
                    name: 'task',
                    component: resolve => require(['./../iview/content/dataStatistics/Task.vue'], resolve),
                    meta: {
                        title: '数据统计-任务数',
                    },
                },
                {
                    path: 'recharge',
                    name: 'recharge',
                    component: resolve => require(['./../iview/content/dataStatistics/Recharge.vue'], resolve),
                    meta: {
                        title: '数据统计-充值',
                    },
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['./../iview/login/Login.vue'], resolve),
            meta: {
                title: '登录',
            },
        },


        {
            path: '*',
            redirect: '/',
        }
    ]
})