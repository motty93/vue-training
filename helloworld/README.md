# vuejs-cli

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## CSS transition

v-ifでフェードアウトする
1. v-ifがfalseになる
2. opacity: 1をopacity: 0に変える
3. 5秒間待つ
4. 対象のコンポーネントを削除する

↑かなり複雑になる

### 解決策

**transition/transition-group**コンポーネントを使用する

- transitionコンポーネント内に要素は一つしか入れられない
- v-if-elseであれば片方が表示されるのでおｋ
- リストのレンダリングをする際はtransition-groupを使用する(動的にdataを表示するとか)



