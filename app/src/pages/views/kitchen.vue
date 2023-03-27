/*
*
*/
<template>
  <div id="kitchen" ref="kitchen">
    <div class="left">
      <div class="icon" ref="icon" :key=index v-for="(item,index) in classes" @click="clickC(index)">
        <img :src=item.img>
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="right" ref="right">
      <MyFood :data="food_data" @MailSuccess="MailSuccess"></MyFood>
      <div class="all" v-if="allShow">已加载全部</div>
    </div>
  </div>
</template>

<script>
import MyFood from '../../components/MyFood'
let right
export default {
  name: 'kitchen',
  components: {
    MyFood
  },
  data () {
    return {
      food_data: [
        {
          name: '全部',
          img: require('@/common/image/菜单.png')
        }
      ],
      page: 0,
      size: 5,
      // 减少请求次数，提高性能
      pageQuery: false,
      allShow: false,
      classes: [
        {
          name: '全部',
          img: require('@/common/image/菜单.png')
        },
        {
          name: '素食',
          img: require('@/common/image/素食.png')
        }, {
          name: '荤食',
          img: require('@/common/image/肉食.png')
        }, {
          name: '汤类',
          img: require('@/common/image/汤.png')
        }, {
          name: '其他',
          img: require('@/common/image/食物.png')
        }
      ],
      class: -1
    }
  },
  mounted () {
    this.init()
    this.query()
  },
  destroyed () {
    right.removeListener('scroll', this.scroll, false)
  },
  methods: {
    init () {
      right = this.$refs.right
      right.addEventListener('scroll', this.scroll, false)
      this.clickC(0)
    },
    scroll () {
      if (this.pageQuery || this.allShow) {
        return
      }
      if (right.scrollTop + right.scrollHeight >= right.clientHeight) {
        this.pageQuery = true
        this.$Dialog.Rotate({
          ele: right
        })
        this.page += this.size
        this.getFood()
      }
    },
    clickC (index) {
      this.class = index - 1
      this.food_data = []
      this.page = 0
      this.size = 5
      this.getFood()
      for (let i of this.$refs.icon) {
        i.style.color = '#333333'
        i.style.border = '0'
      }
      this.$refs.icon[index].style.color = 'red'
      this.$refs.icon[index].style.border = '0.5px solid red'
    },
    getFood () {
      this.$http.getFood({
        page: this.page,
        size: this.size,
        class: this.class
      }).then((res) => {
        console.log(res.data)
        console.log(res.data.length)
        this.pageQuery = false
        this.$Dialog.Rotate({
          ele: right,
          state: 'end'
        })
        if (res.data.length < this.size) {
          this.allShow = true
        }
        console.log(this.food_data.concat(res.data))
        this.food_data = this.food_data.concat(res.data)
      })
    },
    MailSuccess (index) {
      this.food_data[index].num++
    }
  }
}
</script>

<style scoped>
  #kitchen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 4rem;
  }

  #kitchen .left {
    width: 5rem;
    display: inline-block;
    height: 100%;
    position: absolute;
    left: 2px;
    top: 2px;
    box-shadow: 2px 2px 2px 2px #aa8a8a;
  }

  #kitchen .left .icon {
    width: 4rem;
    margin: 2rem 0.4rem;
    text-align: center;
    box-shadow: 2px 2px 2px 2px #aa8a8a;
  }

  #kitchen .left .icon img {
    width: 2rem;
  }

  #kitchen .left .icon p {
    margin: 0 auto;
  }

  #kitchen .right {
    width: 18rem;
    display: inline-block;
    height: 100%;
    position: absolute;
    left: 6rem;
    top: 0;
    bottom: 0;
    overflow-y: auto;
  }

  #kitchen .right::-webkit-scrollbar {
    display: none;
  }
  #kitchen .right .all {
    text-align: center;
    width: 16rem;
    padding: 1rem;
  }
</style>
