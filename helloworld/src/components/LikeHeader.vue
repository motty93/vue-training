<template>
  <div>
    <!-- default slot -->
    <slot></slot>
    <slot name="title" :user="user" text="これがtextですよぉ">
      <h2>親で何も指定してなければこれが表示される</h2>
    </slot>
    <hr>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'first',
        lastName: 'last'
      }
    }
  }
}
</script>

<style scoped>
/* 親のstyleが優先される */
h1 {
  color: blue;
}
</style>
