<template>
  <div>
    <slot>
      <h2>親で何も指定してなければこれが表示される</h2>
    </slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
}
</script>

<style scoped>
/* 親のstyleが優先される */
h1 {
  color: blue;
}
</style>
