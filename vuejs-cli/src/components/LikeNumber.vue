<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
    <p>{{ testProps }}</p>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      // required: true, // defaultと併用できない
      default: 100
    },
    testProps: {
      type: String
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      // 親コンポーネントの関数を実行するために使う→カスタムイベントを作成する
      this.$emit('my-click', this.totalNumber + 1)
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
