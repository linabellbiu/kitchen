<template>
    <div id="refresh">
      <div class="content_loading"  ref="loading">
        <div  class="loading one"></div>
        <div  class="loading two"></div>
        <div  class="loading three"></div>
        <div  class="loading four"></div>
        <p>{{text}}</p>
      </div>
    </div>
</template>
<script>
export default {
  name: 'refresh',
  props: {
    text: {
      type: String,
      default: '正在加载'
    }
  }
}
</script>
<style scoped>
 #refresh .content_loading {
    width: 9rem;
    margin-left: 8rem;
    height: 0;
    max-height: 25rem;
  }
  #refresh .content_loading p {
    margin: 0 auto;
    text-align: center;
  }
  #refresh .content_loading .loading {
    width: 1rem;
    height: 1rem;
    margin: 0.5rem;
    display: inline-block;
    border-radius: 0.5rem;
    background-color: #ff0000;
  }

  #refresh .content_loading .one {
    animation: loading 0.5s ease 0.1s infinite alternate;
  }

  #refresh .content_loading .two {
    animation: loading 0.5s ease 0.2s infinite alternate;
  }

  #refresh .content_loading .three {
    animation: loading 0.5s ease 0.3s infinite alternate;
  }

  #refresh .content_loading .four {
    animation: loading 0.5s ease 0.4s infinite alternate;
  }

  @keyframes loading {
    from {
      transform: scale(1)
    }

    to {
      transform: scale(0.6);
    }

  }
</style>
