/**
* @author 水印红枫
* @date 2019/12/31 14:14
* @Description:
*/

<template>
  <div id="more" ref="more">
    <div class="classes">
      <p class="p" v-show="pShowTwo">请选择食物种类</p>
      <div class="icon" ref="icon" :key=index v-for="(item,index) in classes" @click="clickC(item,index)">
        <img :src=item.img>
        <p>{{item.name}}</p>
      </div>
    </div>
    <img class="img" :src="imgSrc" @click="clickI">
    <input style="display: none" ref="imgInput" @change="addImg" type="file" accept="image/*" id="upload"
           name="upload">
    <input class="input" @focus="focus" placeholder="请输入食物名称" v-model="name">
    <p class="p" v-show="pShow">请输入食物名称</p>
    <button class="button" @click="addFood">添加食物</button>
    <div class="view" ref="view">
      <MoodCard :data="item" v-for="(item, index) in mood_value" :key=index></MoodCard>
      <div class="all" v-if="allShow">已加载全部</div>
    </div>
  </div>
</template>

<script>
import MoodCard from '../../components/MoodCard'

let view

export default {
  name: 'more',
  components: {
    MoodCard
  },
  data () {
    return {
      imgSrc: require('@/common/image/青椒鸡蛋.jpg'),
      name: '',
      img: '',
      pShow: false,
      mood_value: [],
      page: 0,
      size: 5,
      // 减少请求次数，提高性能
      pageSize: 0,
      allShow: false,
      pShowTwo: false,
      classes: [
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
    view.removeListener('scroll', this.scroll(), false)
  },
  methods: {
    init () {
      view = this.$refs.view
      view.addEventListener('scroll', this.scroll(), false)
    },
    scroll () {
      if (this.page === this.pageSize || this.allShow) {
        return
      }
      if (view.scrollTop + this.kitchen.scrollHeight >= view.clientHeight) {
        this.$Dialog.Rotate({
          ele: view
        })
        this.page += this.size
        this.getFood()
      }
    },
    clickT () {
      let more = this.$refs.more
      more.scrollTop = more.clientHeight
    },
    clickC (item, index) {
      this.pShowTwo = false
      this.class = index
      for (let i of this.$refs.icon) {
        i.style.color = '#333333'
        i.style.border = '0'
      }
      this.$refs.icon[index].style.color = 'red'
      this.$refs.icon[index].style.border = '0.5px solid red'
    },
    query () {
      this.getMood()
    },
    getMood () {
      this.pageSize = this.page
      this.$http.getMood({
        page: this.page,
        size: this.size
      }).then((res) => {
        this.$Dialog.Rotate({
          ele: view,
          state: 'end'
        })
        if (res.flag === 1) {
          this.pageSize -= 1
          if (res.data.length < 5) {
            this.allShow = true
          }
          this.mood_value = this.mood_value.concat(res.data)
        }
      })
    },
    clickI () {
      let imgInput = this.$refs.imgInput
      imgInput.click()
    },
    focus () {
      this.pShow = false
    },
    addImg () {
      let imgInput = this.$refs.imgInput
      let data = new FormData()
      data.append('file', imgInput.files[0])
      this.UploadImg(data)
      let reader = new FileReader()
      reader.readAsDataURL(imgInput.files[0])
      // let _this = this
      reader.onload = function (e) {
        // _this.img = this.result
      }
    },
    UploadImg (data) {
      this.$http.UploadImg({
        data
      }).then((res) => {
        if (res.flag === 1) {
          this.img = res.msg
          this.$Dialog.Dialog({
            text: '上传成功',
            type: 'quit'
          })
          this.imgSrc = 'http://dingyahui.top:8989/serveltDemo/pic/' + res.msg
          console.log('成功')
        } else {
          this.$Dialog.Dialog({
            text: '上传失败，请重新上传',
            type: 'quit'
          })
          console.log('失败')
          this.img = ''
        }
      })
    },
    addFood () {
      if (this.class < 0) {
        this.pShowTwo = true
        return
      }
      if (this.img === '') {
        this.$Dialog.Dialog({
          text: '请先上传图片完成',
          type: 'quit'
        })
        return
      }
      if (this.name === '') {
        this.pShow = true
        return
      }
      this.$http.addFood({
        name: this.name,
        img: this.img,
        class: this.class
      }).then((res) => {
        if (res.flag === 1) {
        } else {
        }
        this.$Dialog.Dialog({
          text: res.msg,
          type: 'quit'
        })
      })
    }
  }
}
</script>

<style scoped>
  #more {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 4rem;
    right: 0;
    padding: 1rem;
    overflow-y: auto;
  }

  #more .classes {

  }

  #more .classes .icon {
    width: 4rem;
    margin: 1rem 0.7rem;
    display: inline-block;
    text-align: center;
  }

  #more .classes .icon img {
    width: 2rem;
  }

  #more .classes .icon p {
    margin: 0 auto;
  }

  #more .img {
    width: 23rem;
    height: 10rem;
  }

  #more .input {
    width: 21rem;
    margin: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 3rem;
    line-height: 3rem;
    border: 0;
    outline: 0;
  }

  #more .button {
    width: 21rem;
    margin-left: 1rem;
    text-align: center;
    border-radius: 4px;
    background-color: red;
    height: 3rem;
    line-height: 3rem;
    color: #FFFFFF;
    font-size: 1.1rem;
  }

  #more .p {
    color: red;
    width: 23rem;
    text-align: center;
    margin: 0 auto;
  }

  #more .view {
    position: absolute;
    height: 100%;
    left: 0;
    width: 100%;
    top: 26rem;
    overflow-y: auto;
  }

  #more .view .title {
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    font-weight: bolder;
    color: red;
    text-shadow: 5px 5px 5px #cbafaf;
  }

  #more .view .title:active {
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    font-weight: bolder;
    color: red;
    text-shadow: 1px 1px 1px #cbafaf;
  }

  #more .view .all {
    text-align: center;
    width: 23rem;
    padding: 1rem;
  }
</style>
