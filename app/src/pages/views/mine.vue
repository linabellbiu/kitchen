/**
* @author 水印红枫
* @date 2019/12/31 16:57
* @Description:
*/

<template>
  <div id="mine">
    <MyMood :mood="mood"></MyMood>
  </div>
</template>

<script>
import MyMood from '../../components/MyMood'

export default {
  name: 'mine',
  components: {
    MyMood
  },
  data () {
    return {
      mood: [
        {
          value: '心情不好'
        },
        {
          value: '心情还行'
        },
        {
          value: '心情超好'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>
  #mine {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 4rem;
    right: 0;
    /*background-size: cover;*/
    /*background-image: url("../../common/image/chl.jpg");*/
    background-color: #F6F7F8;
    overflow-y: auto;
  }
</style>
