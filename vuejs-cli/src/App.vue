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
      <template #number>
        <h2>{{ number }}</h2>
      </template>
      <template v-slot:[title]></template>
      <template #title2></template>
      <h5>デフォルトslot5（名前がついてないslotに表示される）</h5>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber" />
    <LikeNumber :total-number="number" testProps="test" />
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <p>
        <label for="title">タイトル</label>
        <input type="text" id="title" v-model.lazy="eventData.title">
      </p>
      <p>
        <label for="maxNum">最大人数</label>
        <input type="number" id="maxNum" v-model.number="eventData.maxNum">
      </p>
      <p>{{eventData.title}}</p>
      <p>{{eventData.maxNum}}</p>
    </div>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from './components/LikeHeader'
import About from './components/About'
import Home from './components/Home'

export default {
  data() {
    return {
      number: 10,
      title: 'title',
      title2: 'title2',
      currentComponent: 'Home',
      eventData: {
        title: 'タイトル',
        maxNum: 100
      }
    }
  },
  components: {
    LikeHeader,
    Home,
    About
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
