<template>
  <div>
    <label for="title">タイトル</label>
    <input
      id="title"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <pre>{{eventData.title}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        title: 'test'
      }
    }
  },
  props: ["value"]
}
</script>
