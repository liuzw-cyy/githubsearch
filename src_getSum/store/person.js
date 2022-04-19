//人员管理相关的配置

import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced: true,
    actions: {
        addPersonLiu(context, value) {
            if (value.name.indexOf('刘') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓刘')
            }
        },
        addPersonServer(context, value) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                Response => {
                    context.commit('ADD_PERSON', {id:nanoid(), name:Response.data})
                },
                Error => {
                    alert(Error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [{
            id:'001', name:'liuzw'
        }]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}