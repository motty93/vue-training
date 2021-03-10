<template>
  <div>
    <h2>About</h2>
    <input type="text"/>
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log('destroy')
  },
  deactivated() {
    console.log('deactivated')
  },
  activated() {
    console.log('activated')
  }
}
</script>
