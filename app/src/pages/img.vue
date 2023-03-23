/**
* @author 水印红枫
* @date 2020/1/8 16:26
* @Description:
*/

<template>
  <div id="img" ref="imgB">
    <img class="img" ref="img" :src="img" @click="quit">
  </div>
</template>

<script>
export default {
  name: 'img',
  data () {
    return {
      img: this.$route.params.img
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let img = this.$refs.img
      let imgB = this.$refs.imgB
      img.style.marginTop = (imgB.clientHeight - img.clientHeight) / 2 + 'px'
      img.style.marginLeft = (imgB.clientWidth - img.clientWidth) / 2 + 'px'
    },
    quit () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  #img {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000000;
  }

  #img .img {
    position: absolute;
    max-height: 100%;
    max-width: 100%;
  }
</style>
