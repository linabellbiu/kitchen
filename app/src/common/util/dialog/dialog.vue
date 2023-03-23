<template>
  <div id="dialog" @click.self="cancelButton">
    <div class="dialog">
      <div v-if="type==='call'" class="content_call">
        <p style="color: #333333;font-weight: 600;">联系客服</p>
        <p style="padding: 0.5rem 0;">{{text}}</p>
      </div>
      <div v-else class="content">{{text}}</div>
      <div v-if="'call'.includes(type)" @click="cancelButton" class="cancel">{{cancel_text}}</div>
      <div v-else @click="confirmButton" class="onlyConfirm">{{confirm_text}}</div>
      <div v-if="type=='call'" @click="confirmButton" class="confirm">
        <a style="color: #FF332E; text-decoration:none;" :href="'tel:'+text">{{confirm_text}}</a>
      </div>
      <div v-if="'text'.includes(type)" @click="confirmButton" class="confirm">{{confirm_text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  props: {
    text: {
      type: String,
      default: '成功'
    },
    type: {
      type: String,
      default: 'text'
    },
    confirm_text: {
      type: String,
      default: '确认'
    },
    cancel_text: {
      type: String,
      default: '取消'
    }
  },
  watch: {
    type: {
      handler (newVal, oldVal) {
        if (newVal) {
          this.init()
        }
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
    init () {
      switch (this.type) {
        case 'quit':
          let vm = document.getElementById('dialog')
          if (vm !== null) {
            vm.style.background = 'rgba(0, 0, 0, 0.3)'
          }
          break
        case 'call':
          break
        case 'text':
          break
      }
    },
    confirmButton () {
      let vm = document.getElementById('dialog')
      if (vm !== null) {
        document.body.removeChild(vm)
      }
      switch (this.type) {
        case 'quit':
          // 退出界面
          break
        case 'call':
          break
        case 'text':
          break
      }
    },
    cancelButton () {
      switch (this.type) {
        case 'call':
          break
        case 'text':
          break
      }
    }
  }
}
</script>

<style scoped>
  #dialog {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
    filter: Alpha(opacity=60);
    z-index: 1;
    left: 0;
  }

  #dialog .dialog {
    width: 20rem;
    height: 6rem;
    margin: 0 2rem;
    position: fixed;
    background-color: #FFFFFF;
    top: 40%;
    border-radius: 0.5rem;
    padding: 2rem 0.5rem;
    min-height: 5rem;
  }

  #dialog .dialog .content {
    text-align: center;
    color: #666666;
  }

  #dialog .dialog .content_call {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  #dialog .dialog .content_call p {
    /*margin: 0 auto;*/
  }

  #dialog .dialog .cancel {
    display: inline-block;
    width: 45%;
    text-align: center;
    bottom: 0;
    position: absolute;
    border-right: 0.5px solid #EEEEEE;
    border-top: 0.5px solid #EEEEEE;
    left: 5%;
    margin: 0 auto;
    height: 3rem;
    line-height: 3rem;
  }

  #dialog .dialog .confirm {
    display: inline-block;
    width: 45%;
    text-align: center;
    bottom: 0;
    right: 5%;
    position: absolute;
    border-top: 0.5px solid #EEEEEE;
    margin: 0 auto;
    height: 3rem;
    line-height: 3rem;
  }

  #dialog .dialog .onlyConfirm {
    display: inline-block;
    width: 100%;
    text-align: center;
    bottom: 0;
    right: 0;
    position: absolute;
    border-top: 0.5px solid #EEEEEE;
    margin: 0 auto;
    height: 3rem;
    line-height: 3rem;
  }
</style>
