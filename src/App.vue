<template>
  <div>
    <div id="app">{{ $store.state.a.name }}</div>
    <button @click="handle">点击我！！！</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    handle() {
      this.$store.commit('a/add')
    }
  }
}
</script>

<style>
</style>
