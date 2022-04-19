<template>
    <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        activated(){
            console.log('News组件被激活了')
        },
        deactivated(){
            console.log('News组件失活了')
        }
    }
</script>