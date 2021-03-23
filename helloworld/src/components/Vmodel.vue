<template>
  <div>
    <label for="title">v-model</label>
    <input
      type="text"
      id="title"
      :value="model.title"
      @input="changeTitle($event)"
    />
    <p>{{ model.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        title: ''
      }
    }
  },
  methods: {
    changeTitle(e) {
      this.model.title = e.target.value
    }
  }
}
</script>
