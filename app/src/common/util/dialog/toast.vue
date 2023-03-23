<template>
  <div id="toast" ref="toast" v-show="show">
    <div class="header" v-if="title_show">{{title}}</div>
    <div class="content" ref="content">{{content}}</div>
  </div>
</template>

<script>
let time
export default {
  name: 'toast',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    title_show: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: '请选择评价再提交哦'
    },
    showTime: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      show: false
    }
  },
  watch: {
    show: {
      handler (newVal, oldVal) {
        this.change(newVal)
      },
      immediate: true
    }
  },
  mounted () {
    this.show = true
    this.init()
  },
  destroyed () {
    clearTimeout(time)
  },
  methods: {
    init () {
      let content = this.$refs.content
      let toast = this.$refs.toast
      this.$nextTick(() => {
        toast.style.left = (document.body.clientWidth - content.clientWidth) / 2 + 'px'
      })
    },
    change (val) {
      if (val) {
        time = setTimeout(() => {
          let vm = document.getElementById('toast')
          if (vm !== null) {
            document.body.removeChild(vm)
          }
        }, this.showTime)
      }
    }
  }
}
</script>

<style scoped>
  #toast {
    position: fixed;
    z-index: 10;
    /*width: 15rem;*/
    text-align: left;
    left: 5rem;
    top: 36%;
    opacity: 0.8;
    /*min-height: 6rem;*/
    border-radius: 1rem;
    background-color: black;
  }

  #toast .header {
    height: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    color: white;
    padding: 0 1rem;
  }

  #toast .content {
    color: white;
    padding: 1rem;
  }
</style>
