/**
* @author 水印红枫
* @date 2019/12/31 14:18
* @Description:
*/

<template>
  <div id="MyTab" ref="MyTab">
    <div class="tab" ref="tab" v-for="(item, index) in data" :key="index" @click="clickP(index)">
      <img class="img" :src="item.img">
      <p class="p">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    data: Array
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let tab = this.$refs.tab
      let MyTab = this.$refs.MyTab
      tab[0].className += ' active'
      for (let i of tab) {
        i.style.width = parseInt(MyTab.clientWidth / this.data.length) - 2 + 'px'
      }
    },
    clickP (index) {
      let tab = this.$refs.tab
      for (let i of tab) {
        i.className = 'tab'
      }
      tab[index].className += ' active'
      this.$router.push({
        name: this.data[index].path
      })
    }
  }
}
</script>

<style>
  #MyTab {
    position: fixed;
    height: 4rem;
    color: #FFFFFF;
    left: 0;
    background-color: #FFFFFF;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  #MyTab .tab {
    height: 4rem;
    display: inline-block;
    color: #333333;
    text-align: center;
    /*line-height: 3rem;*/
    font-size: 1rem;
    border: 0.5px solid #333333;
  }

  #MyTab .tab .img {
    width: 2rem;
    height: 2rem;
  }

  #MyTab .tab .p {
    margin: 0 auto;
  }

  #MyTab .active {
    color: red;
  }
</style>
