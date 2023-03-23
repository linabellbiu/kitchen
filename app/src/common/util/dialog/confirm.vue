<template>
  <div id="confirm" v-if="show">
    <div class="dialog">
      <div class="content">{{text}}</div>
      <div @click="cancelButton" class="cancel">{{cancel_text}}</div>
      <div v-if="type=='call'" @click="confirmButton" class="confirm"><a style="color: black; text-decoration:none;"
                                                                         :href="'tel:'+text">{{confirm_text}}</a></div>
      <div v-else @click="confirmButton" class="confirm">{{confirm_text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirm',
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
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    confirmButton () {
      this.show = false
      let vm = document.getElementById('confirm')
      document.body.removeChild(vm)
      switch (this.type) {
        case 'call':
          break
        case 'text':
          break
      }
    },
    cancelButton () {
      this.show = false
      let vm = document.getElementById('confirm')
      document.body.removeChild(vm)
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
  #confirm {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    filter: Alpha(opacity=60);
    z-index: 1;
  }

  #confirm .dialog {
    width: 19rem;
    height: 5rem;
    margin: 0 3rem;
    position: fixed;
    background-color: white;
    top: 45%;
    border-radius: 1rem;
    padding: 2rem 0.5rem;
    min-height: 5rem;
    color: black;
  }

  #confirm .dialog .content {
    text-align: center;
    font-size: 1.2rem;
  }

  #confirm .dialog .cancel {
    display: inline-block;
    width: 45%;
    text-align: center;
    font-size: 1.3rem;
    bottom: 0;
    position: absolute;
    border-right: 1px solid black;
    border-top: 1px solid black;
    left: 5%;
    margin: 0 auto;
    height: 2.5rem;
    line-height: 2.5rem;
  }

  #confirm .dialog .confirm {
    display: inline-block;
    width: 45%;
    text-align: center;
    font-size: 1.3rem;
    bottom: 0;
    right: 5%;
    position: absolute;
    border-top: 1px solid black;
    margin: 0 auto;
    height: 2.5rem;
    line-height: 2.5rem;
  }
</style>
