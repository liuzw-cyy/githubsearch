<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="keywords"/>&nbsp;
          <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data() {
            return {
                keywords:''
            }
        },
        methods: {
            searchUsers(){
                //请求前更新List的数据
                this.$bus.$emit('updateListData',{isLoading:true, errMsg:'',users:[], isFirst:false})
                axios.get('https://api.github.com/search/users?q=' + this.keywords).then(
                    response => {
                        this.$bus.$emit('updateListData', {isLoading:false, errMsg:'', users:response.data.items})
                    },
                    error => {
                        this.$bus.$emit('updateListData', {isLoading:false, errMsg:error.message, users:[]})
                    }
                )
            }
        },
    }
</script>

<style scoped>

</style>