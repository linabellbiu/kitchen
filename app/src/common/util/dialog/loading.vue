<template>
  <div id="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <p>{{loading_text}}</p>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    state: {
      type: String,
      default: 'start'
    },
    loading_text: {
      type: String,
      default: '正在加载...'
    },
    ele: {
      type: HTMLBodyElement,
      default: () => document.body
    }
  },
  watch: {
    state: {
      handler (newVal, oldVal) {
        this.changeState(newVal)
      },
      immediate: true
    }
  },
  methods: {
    changeState (val) {
      if (val === 'end') {
        let vm = document.getElementById('loading')
        this.ele.removeChild(vm)
      }
    }
  }
}
</script>

<style scoped>
  #loading {
    position: absolute;
    width: 5rem;
    height: 6rem;
    top: 40%;
    left: 10rem;
  }

  #loading p {
    text-align: center;
    width: 100%;
    float: left;
    margin: 0;
    padding: 0;
  }

  #loading div {
    width: 8%;
    height: 70%;
    margin: 6%;
    float: left;
    background-color: hotpink;
    border-radius: 40%;
  }

  #loading div:nth-child(1) {
    background-color: lightcoral;
    /*缩、放 这是两次，所以是2*/
    /*animation:loading 0.5s ease 0s 2 alternate;*/
    animation: loading 0.5s ease 0s infinite alternate;
  }

  #loading div:nth-child(2) {
    background-color: darkorange;
    animation: loading 0.5s ease 0.1s infinite alternate;
  }

  #loading div:nth-child(3) {
    background-color: lightcoral;
    animation: loading 0.5s ease 0.2s infinite alternate;
  }

  #loading div:nth-child(4) {
    background-color: gold;
    animation: loading 0.5s ease 0.3s infinite alternate;
  }

  #loading div:nth-child(5) {
    background-color: burlywood;
    animation: loading 0.5s ease 0.4s infinite alternate;
  }

  @keyframes loading {
    from {
      /*缩放y轴*/
      transform: scaleY(1)
    }

    to {
      transform: scaleY(0.5);
    }

  }
</style>
