<template>
  <div>
    <p v-border:solid.shadow.round="{ width: '10px', color: 'red' }">Home</p>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <CountNumber />
  </div>
</template>

<script>
import CountNumber from './CountNumber'
import { tokyoNumber } from '@/tokyoNumber'

export default {
  // 内容が被った場合、コンポーネントの値が優先される
  mixins: [tokyoNumber],
  components: {
    CountNumber
  },
  // ローカルでのカスタムディレクティブ
  // thisは使えない
  directives: {
    border(el, binding) {
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
    }
  }
}
</script>
