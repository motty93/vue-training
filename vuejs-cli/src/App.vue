<template>
  <div>
    <LikeHeader />
    <p>{{ number }}</p>
    <LikeNumber/>
    <LikeNumber :total-number="number" />
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from './components/LikeHeader'

export default {
  data() {
    return {
      number: 10
    }
  },
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
