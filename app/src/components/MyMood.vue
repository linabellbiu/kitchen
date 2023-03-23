<script>
import utils from '../common/util/utils'

export default {
  name: 'MyMood',
  props: {
    mood: Array
  },
  data () {
    return {
      value: '猜我今天的心情怎么样',
      text_value: '',
      index: -1,
      date: '',
      time: '',
      warn: false,
      img: 'c569f46e-3a6f-4ef9-ae29-3ecbf55c32b8t1600653197396'
    }
  },
  watch: {
    text_value: {
      handler (newVal, oldVal) {
        if (newVal === '') {
          this.warn = true
        } else {
          this.warn = false
        }
      }
    }
  },
  computed: {
    love_time () {
      return utils.love(this.date, '2017-05-10')
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    clearInterval(this.time)
  },
  methods: {
    init () {
      this.time = setInterval(() => {
        this.date = new Date().getTime()
      }, 100)
      // let ball = this.$refs.ball
      // let star = this.$refs.star
      // let l = parseInt(25 / this.mood.length)
      // l = l > 2 ? 2 : l
      // for (let i of ball) {
      //   i.style.width = l + 'rem'
      //   i.style.height = l + 'rem'
      // }
      // star.style.marginLeft = (25 - ((l + 2) * this.mood.length)) / 2 + 'rem'
    },
    play () {
      let audio = this.$refs.audio
      if (audio.style.display === 'block') {
        audio.style.display = 'none'
        // audio.play()
      } else {
        audio.style.display = 'block'
        // audio.pause()
      }
    },
    clickB (item, index) {
      this.index = index
      let ball = this.$refs.ball
      for (let i in ball) {
        // ball[i].style.backgroundColor = '#FFFFFF'
        if (i <= index) {
          // ball[i].style.backgroundColor = 'red'
        }
      }
      this.value = item.value
    },
    addMood () {
      if (this.index < 0) {
        this.value = '请先点击下方心情指数'
        return
      }
      if (this.text_value === '') {
        this.warn = true
        return
      }
      this.$http.addMood({
        star: this.index,
        value: this.value,
        text: this.text_value,
        img: this.img,
        time: new Date().getTime()
      }).then((res) => {
        if (res.flag === 1) {
          console.log('成功')
        } else {
          console.log('失败')
        }
        this.$Dialog.Dialog({
          text: res.msg,
          type: 'quit'
        })
      })
    },
    clickI () {
      let imgInput = this.$refs.imgInput
      imgInput.click()
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
          console.log('成功')
        } else {
          this.$Dialog.Dialog({
            text: '上传失败，请重新上传',
            type: 'quit'
          })
          console.log('失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  #MyMood {
    position: absolute;
    background-color: #FFFFFF;
    /*background-color: rgba(81, 22, 32, 0.9);*/
    top: 0;
    /*padding-bottom: 8rem;*/
  }

  #MyMood .loveTime {
    width: 21rem;
    padding: 1rem 2rem;
    background-color: #FFFFFF;
    height: 4rem;
    line-height: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 4px;
    color: #8ec3bd;
    -webkit-box-shadow: 8px 8px 8px 8px #8ec3bd;
    box-shadow: 8px 8px 8px 8px #8ec3bd;
    text-align: center;
    /*color: #FFFFFF;*/
    text-shadow: 8px 8px 4px red;
  }

  #MyMood .audio {
    width: 20rem;
    margin: 1rem 2.5rem;
    display: none;
  }

  #MyMood .star {
    padding: 0 5rem;
    width: 15rem;
    -webkit-box-shadow: 8px 8px 8px 8px #8ec3bd;
    box-shadow: 8px 8px 8px 8px #8ec3bd;
  }

  #MyMood .star .ball {
    width: 3rem;
    height: 3rem;
    display: inline-block;
    background-color: #FFFFFF;
    margin: 1rem;
  }

  #MyMood .star .ball .img {
    width: 3rem;
    /*box-shadow: 1px 1px 1px 1px blue;*/
  }

  #MyMood .value {
    width: 25rem;
    text-align: center;
    height: 3rem;
    border-right: 4px;
    background-color: #FFFFFF;
    line-height: 3rem;
    color: blue;
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 2px 2px 2px red;
    margin: 2rem 0;
  }

  #MyMood .value .cdImg {
    width: 3rem;
    position: absolute;
    right: 3rem;
    animation: rotate 3s linear 0s infinite normal
  }

  #MyMood .warn {
    width: 25rem;
    text-align: center;
    color: red;
  }

  #MyMood .text {
    width: 20rem;
    height: 10rem;
    border: 0.5px solid red;
    /*outline: none;*/
    margin: 2rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    -webkit-box-shadow: 8px 8px 8px 8px #8ec3bd;
    box-shadow: 8px 8px 8px 8px #8ec3bd;
  }

  #MyMood .button {
    width: 23rem;
    margin: 1rem;
    border: 0;
    border-radius: 4px;
    background-color: #FF332E;
    /*color: #FFFFFF;*/
    height: 2.5rem;
    line-height: 2.5rem;
    -webkit-box-shadow: 8px 8px 8px 8px #8ec3bd;
    box-shadow: 8px 8px 8px 8px #8ec3bd;
  }

  #MyMood .title {
    width: 25rem;
    margin: 1rem 0;
    text-align: center;
    border: 0;
    border-radius: 4px;
    height: 4rem;
    color: #8ec3bd;
    font-size: 1.5rem;
    text-shadow: 10px 10px 5px red;
    font-weight: bolder;
    line-height: 4rem;
  }

  @keyframes rotate {
    0% {
      transform: rotate(72deg);
    }
    20% {
      transform: rotate(108deg)
    }
    40% {
      transform: rotate(144deg)
    }
    60% {
      transform: rotate(180deg)
    }
    80% {
      transform: rotate(216deg)
    }
    100% {
      transform: rotate(252deg)
    }
  }
   #MyMood .imgUpload {
    width: 23rem;
    height: 10rem;
    margin: 2rem 1rem 0;
  }
</style>
