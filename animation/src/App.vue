<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <br />
    <br />
    <!-- :css="false"とするとcssでのアニメーションを無くす-->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="entereCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br />
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
    <!-- typeでanimationを指定するとanimationを優先する -->
    <transition name="slide" type="animation" appear>
      <p v-if="show">slide animationだよ</p>
    </transition>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__bounce"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      myComponent: 'ComponentA'
    }
  },
  methods: {
    beforeEnter(el) {
      //現れる前
      el.style.transform = 'scale(0)'
    },
    enter(el, done) {
      // CSSを使うときは必ずdoneをつける
      // 現れるとき
      let scale = 0
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`
        scale += 0.01
        if (scale > 1) {
          clearInterval(interval)
          done()
        }
      }, 5)
    },
    leave(el, done) {
      // 消える時
      let scale = 1
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`
        scale -= 0.01
        if (scale < 0) {
          clearInterval(interval)
          done()
        }
      }, 5)
    },
    leaveCancelled(el) {
      console.log(el)
      // 消えるアニメーションがキャンセルされた時
      // v-showのときに実行される
    }
  }
}
</script>

<style>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}

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
