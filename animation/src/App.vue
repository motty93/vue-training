<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
    <!-- typeでanimationを指定するとanimationを優先する -->
    <transition name="slide" type="animation" appear>
      <p v-if="show">slide animationだよ</p>
    </transition>
    <transition name="fade"
                enter-active-class="animate__animated animate__bounce"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
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

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
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
