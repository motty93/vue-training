<template>
  <div>
    <LikeHeader header-text="hello">
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber" />
    <LikeNumber :total-number="number" testProps="test" />
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
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}

h1 {
  color: red;
}
</style>
