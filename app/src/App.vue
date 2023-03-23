<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.init()
  },
  destroyed () {
    window.removeEventListener('unload', this.saveState)// 解决刷新后vux内容丢失问题
  },
  methods: {
    init () {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 25 + 'px'
      window.addEventListener('unload', this.saveState)// 解决刷新后vux内容丢失问题
    },
    saveState () {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
