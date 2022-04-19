<template>
    <div>
      <Count/>
      <hr>
      <Person/>
    </div>
</template>

<script>
    import Count from './components/Count.vue'
    import Person from './components/Person.vue'
    export default {
      name:'APP',
      components:{Count, Person}
    }
</script>

<style>

</style>
