<template>
  <div>
    <LikeHeader />
    <LikeNumber />
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from './components/LikeHeader'

export default {
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
