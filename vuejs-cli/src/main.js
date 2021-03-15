import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber'

Vue.config.productionTip = false
// グローバル登録
Vue.component('LikeNumber', LikeNumber)
// Vue.directive('border', {
//   bind(el, binding, vnode) {
//     // ディレクティブが初めて対象の要素に紐付いた時
//   },
//   inserted(el, binding, vnode) {
//     // 親Nodeに挿入された時
//   },
//   update(el, binding, vnode, onlVnode) {
//     // コンポーネントが更新されるたび。子コンポーネントが更新される前
//   },
//   componentUpdated(el, binding, vnode, onlVnode) {
//     // コンポーネントが更新されるたび。子コンポーネントが更新される後
//   },
//   unbind(el, binding, vnode) {
//     // ディレクティブが紐付いている要素から取り除かれた時
//   }
// })

// この形はbindとupdateが実行される
Vue.directive('border', function(el, binding) {
  el.style.borderWidth = binding.value.width
  el.style.borderColor = binding.value.color
  el.style.borderStyle = binding.arg
  // binding.modifiers.roundはtrue or falseを返す
  if (binding.modifiers.round) {
    el.style.borderRadius = '0.5rem'
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.26)'
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
