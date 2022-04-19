<template>
    <div>
        <h1>人员列表</h1>
        <h2 style="color:red">Count组件求和为：{{sum}}</h2>
        <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPerson">添加</button>
        <button @click="addLiu">添加一个姓刘的人</button>
        <button @click="addPersonServer">添加一句话，由服务器生成</button>
        <ul>
            <li v-for=" p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import { mapGetters, mapState } from 'vuex'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            // 第一种写法
            ...mapState('personAbout',['personList', 'sum']),
            ...mapState('countAbout',['sum']),
            // 第二种写法
            firstPersonName(){
				return this.$store.getters['personAbout/firstPersonName']
			}
        },
        methods: {
            addPerson(){
                const personObj = {id:nanoid(), name:this.name}
                this.$store.commit('personAbout/ADD_PERSON', personObj)
                this.name = ''
            },
            addLiu(){
                const personObj = {id:nanoid(), name:this.name}
                this.$store.dispatch('personAbout/addPersonLiu', personObj)
                this.name = ''
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },

    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>