/**
* @author 水印红枫
* @date 2020/1/3 9:12
* @Description:
*/

<template>
  <div id="MoodCard">
    <img class="imgShow" ref="imgShow" @error="checkImg" />
    <div class="time">
      <div>相爱时间</div>
      {{time}}
    </div>
    <div class="text">
      {{data.text}}
    </div>
    <div class="mood">
      {{data.value}}
    </div>
  </div>
</template>

<script>
import util from '../common/util/utils'

export default {
  name: 'MoodCard',
  data () {
    return {}
  },
  computed: {
    time () {
      return util.love(Number(this.data.time), '2017-05-10')
    }
  },
  props: {
    data: Object
  },
  mounted () {
  },
  methods: {
    checkImg () {
      this.$refs.imgShow.src = require('../common/image/你和我.jpg')
    }
  }
}
</script>

<style scoped>
  #MoodCard {
    position: relative;
    min-height: 20rem;
    width: 23rem;
    margin: 1rem;
    border: 0.5px solid;
    box-shadow: 1px 1px 1px 1px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  #MoodCard .time {
    width: 21rem;
    margin: 1rem;
    height: 4rem;
    line-height: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 3px 3px 10px 3px pink;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 2px 2px 2px red;
  }

  #MoodCard .text {
    width: 19rem;
    margin: 1rem;
    padding: 1rem;
    border-bottom: 0.5px solid #333333;
    background-size: cover;
    min-height: 7rem;
    font-weight: 600;
    max-width: 15rem;
    overflow-y: auto;
    color: pink;
    font-size: 1.4rem;
  }

  #MoodCard .mood {
    position: absolute;
    bottom: 0;
    width: 23rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.1rem;
    font-weight: bolder;
    text-align: center;
    color: red;
  }
  #MoodCard .imgShow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>
