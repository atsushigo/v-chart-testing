<template>
	<div>
		<div class="hello" v-for="(item,i) in msg" :key="i">
			<h1>年份:{{ item.Field1 }}  查獲毒品案:{{ item.Field2 }}</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>