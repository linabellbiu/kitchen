/**
* @author 水印红枫
* @date 2019/12/31
* @Description:
*/

<template>
  <div id="home">
    <router-view></router-view>
    <v-tab :data="tab_data"></v-tab>
  </div>
</template>

<script>
import MyTab from '../components/MyTab'

export default {
  name: 'home',
  components: {
    'v-tab': MyTab
  },
  data () {
    return {
      tab_data: [
        {
          name: '菜单',
          path: 'kitchen',
          img: require('@/common/image/菜单.png')
        }, {
          name: '发现',
          path: 'more',
          img: require('@/common/image/心.png')
        }
      ]
    }
  },
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

<style scoped>
  #home {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>
