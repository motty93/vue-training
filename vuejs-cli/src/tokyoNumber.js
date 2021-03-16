export const tokyoNumber = {
  data() {
    return {
      title: 'Welcome',
      subTitle: 'Sub Welcome'
    }
  },
  // もちろんthisにはアクセスできない
  // methodと同じくコンポーネントが再描画されたときに実行されるので頻繁に変わるものに対しては使わないようにする
  filters: {
    lowerCase(value) {
      return value.toLowerCase()
    }
  }
}
