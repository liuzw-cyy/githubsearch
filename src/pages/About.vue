<template>
	<h2>我是About的内容!</h2>
</template>

<script>
	export default {
		name:'About',
		//通过路由规则，进入该组件时被调用
		beforeRouteEnter (to, from, next) {
			console.log('组件内路由守卫');
			if (to.meta.isAuth) {
				if (localStorage.getItem('person') === 'liuzw') {
					next()
				} else {
					alert('人员不符合')
				}
			} else {
				next()
			}
		},
		//通过路由规则，离开该组件时被调用
		beforeRouteLeave (to, from, next) {
			console.log('About--beforeRouteLeave',to,from)
			next()
		}
	}
</script>