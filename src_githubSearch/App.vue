<template>
      <div id="app">
        <div class="container">
          <Search/>
          <List/>
        </div>
    </div>
</template>

<script>
    import List from './components/List.vue'
    import Search from './components/Search.vue'
    export default {
      name:'App',
        components:{List, Search}
    }
</script>

<style>

</style>
