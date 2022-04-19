// 求和相关配置
export default {
    namespaced: true,
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 500)
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        SUB(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        school: 'zstu',
        subject: '前端'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}