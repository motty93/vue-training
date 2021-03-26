<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <transition name="slide">
      <p v-if="show">slide animationだよ</p>
    </transition>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態   */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
}
.fade-leave-to {
  /* 消える時の最後の状態 */
}
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
