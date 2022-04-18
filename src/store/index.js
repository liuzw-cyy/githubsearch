//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
import countOPtions from './count'
import personOptions from './person'
//应用Vuex插件
Vue.use(Vuex)


//创建并暴露
export default new Vuex.Store({
    modules: {
        countAbout: countOPtions,
        personAbout: personOptions
    }
})