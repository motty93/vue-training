<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
  </div>
</template>

<script>
import { tokyoNumber } from '@/tokyoNumber'

export default {
  mixins: [tokyoNumber],
  // ライフサイクルフックに関してはマージされる、どちらも実行される
  // 先にmixinが実行され、あとでcomponent側が実行される
  created() {
    console.log('create in component')
  }
}
</script>
