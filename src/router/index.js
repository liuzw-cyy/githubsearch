// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router =  new VueRouter({
    routes: [
        {
            name:'guanyu',
            path: '/about',
            component: About,
            meta:{isAuth: true, title:'关于'}
        },
        {
            path: '/Home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name:'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // 独享路由守卫
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫');
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('person') === 'liuzw') {
                                next()
                            } else {
                                alert('人员不符合')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true, title:'消息'},
                    children: [
                        {
                            name:'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta:{isAuth:true, title:'详情'},
                            // props函数式写法
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title:$route.params.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('person') === 'liuzw') {
//             next()
//         } else {
//             alert('人员不符合')
//         }
//     } else {
//         next()
//     }
// })

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    // to and from are both route objects.
    document.title = to.meta.title || 'Vue Router Demo'
})

export default router