// 旋转小菊花
<template>
    <div id="rotate">
        <div class="ball"></div>
        <div class="line lineOne"></div>
        <div class="line lineTwo"></div>
        <div class="line lineThree"></div>
        <div class="line lineFour"></div>
        <div class="line lineFive"></div>
        <a class="text">{{text}}</a>
    </div>
</template>
<script>
export default {
  name: 'rotate',
  props: {
    text: {
      type: String,
      default: '正在加载...'
    }
  }
}
</script>
<style scoped>
#rotate{
    height: 4rem;
    width: 100%;
    position: relative;
}
#rotate .text{
    position: absolute;
    left: 10rem;
    top: 1.5rem;
}
#rotate .line{
    width: 2rem;
    height: 2px;
    background-color: #666666;
    top: 2rem;
    position: absolute;
    left: 6rem;
}
#rotate .ball{
    position: absolute;
    margin-left: 6.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    top: 1.5rem;
    z-index: 2;
    background-color: #FFFFFF;
}
#rotate .lineOne{
    animation: rotateOne 3s linear 0s infinite normal;
}
#rotate .lineTwo{
    animation: rotateTwo 3s linear 0s infinite normal;
}
#rotate .lineThree{
    animation: rotateThree 3s linear 0s infinite normal;
}
#rotate .lineFour{
    animation: rotateFour 3s linear 0s infinite normal;
}
#rotate .lineFive{
    animation: rotateFive 3s linear 0s infinite normal;
}
@keyframes rotateOne {
    0%{transform: rotate(0deg);}
    20%{transform: rotate(36deg)}
    40%{transform: rotate(72deg)}
    60%{transform: rotate(108deg)}
    80%{transform: rotate(144deg)}
    100%{transform: rotate(180deg)}
}
@keyframes rotateTwo {
    0%{transform: rotate(36deg);}
    20%{transform: rotate(72deg)}
    40%{transform: rotate(108deg)}
    60%{transform: rotate(144deg)}
    80%{transform: rotate(180deg)}
    100%{transform: rotate(216deg)}
}
@keyframes rotateThree {
    0%{transform: rotate(72deg);}
    20%{transform: rotate(108deg)}
    40%{transform: rotate(144deg)}
    60%{transform: rotate(180deg)}
    80%{transform: rotate(216deg)}
    100%{transform: rotate(252deg)}
}
@keyframes rotateFour {
    0%{transform: rotate(108deg);}
    20%{transform: rotate(144deg)}
    40%{transform: rotate(180deg)}
    60%{transform: rotate(216deg)}
    80%{transform: rotate(252deg)}
    100%{transform: rotate(288deg)}
}
@keyframes rotateFive {
    0%{transform: rotate(144deg);}
    20%{transform: rotate(180deg)}
    40%{transform: rotate(216deg)}
    60%{transform: rotate(252deg)}
    80%{transform: rotate(288deg)}
    100%{transform: rotate(324deg)}
}
</style>
