<template>
  <div>
    <LikeHeader header-text="hello">
      <h3>デフォルトslot1（名前がついてないslotに表示される）</h3>
      <!--  名前付きslotじゃないときはv-slot:defaultで受け取れる    -->
      <template v-slot:title="slotProps">
        <h1>トータルのいいね数</h1>
        <h2>{{ slotProps }}</h2>
        <h2>{{ slotProps.user.firstName }}</h2>
        <h2>{{ slotProps.user.lastName }}</h2>
        <h3>{{ slotProps.text }}</h3>
      </template>
      <h4>デフォルトslot4（名前がついてないslotに表示される）</h4>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
      <h5>デフォルトslot5（名前がついてないslotに表示される）</h5>
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
