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
        <input type="text" id="title" v-model.lazy="eventData.title" />
      </p>
      <p>
        <label for="maxNum">最大人数</label>
        <input type="number" id="maxNum" v-model.number="eventData.maxNum" />
      </p>
      <p>
        <label for="host">主催者</label>
        <input type="text" id="host" v-model.trim="eventData.host" />
      </p>
      <pre>{{ eventData.title }}</pre>
      <pre>{{ eventData.maxNum }}</pre>
      <pre>{{ eventData.host }}</pre>
      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        name="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <pre>{{ eventData.detail }}</pre>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10"></label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20"></label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30"></label>
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <p>{{ eventData.price }}</p>
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{
          location
        }}</option>
      </select>
      <p>{{eventData.location}}</p>
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
      locations: ['東京', '大阪', '名古屋'],
      eventData: {
        title: '',
        maxNum: 100,
        host: '',
        detail: '',
        isPrivate: false,
        target: [],
        price: '無料',
        location: '東京'
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
