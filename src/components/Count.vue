<template>
    <div>
        <h1>当前的和为：{{sum}}</h1>
        <h2>当前求和放大10倍为：{{bigSum}}</h2>
        <h2>我在{{school}}学习{{subject}}</h2>
        <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:1
            }
        },
        computed: {
            ...mapState('countAbout',['sum', 'school', 'subject']),
            ...mapState('personAbout', ['personList']),
            ...mapGetters('countAbout',['bigSum'])
        },
        methods: {
            ...mapMutations('countAbout',{increment:'ADD', decrement:'SUB'}),
            ...mapActions('countAbout',{incrementOdd:'addOdd', incrementWait:'addWait'})
        }
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>