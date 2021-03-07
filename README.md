## VueJS
### テンプレート構文
- htmlを出力するためのテンプレート
    ```html
    <div id="app">
      <p>{{ message }}</p>
    </div>
    ```

### 二重括弧を使ってデータを描画する
単一の式のみ使用できる

`{{ var a = 1 }}`などとしても表示できないので、Vueインスタンスの内部で定義したものを二重括弧内に使って表示する


## ディレクティブ構文
- v-once: stateを変更しても最初に描画したときから値を変更したくないものに対して使用する
- v-html: htmlタグを表示したい場合しようする（ただしクロスサイトスクリプティングできてしまうので注意, 信頼のあるコンテンツのみ使用する）
- v-bind: 省略も可能（:のみ、コードを参照）, objectを渡すことも可能、冗長になりそうであればdata側にobjを作成してv-bindに渡すのもあり。
- v-on: 各イベントを指定できるディレクティブ属性(ex: v-on:click, v-on:change...)

### v-on
- eventオブジェクトを使用する際、メソッド引数を渡すとeventを取得できる
- 関数側にeventと他に引数を渡したい場合、`hoge(10, $event)`とするとeventオブジェクトを拾える
- `preventDefault`と`stopPropagation`は`v-on:click.prevent`・`v-on:click.stop`の形で使用可能(hoge.stop.preventと書くこともできる)
- prevent, stopと同じようにキー修飾子も使える(`v-on:keyup.enter`)
- `@`で書くこともできる

### v-model
- input要素にstateを指定することで、動的にstateを変更することができる

### v-if else
必ず`v-if`/`v-else`は隣接しないと動かないので注意

### v-show
- templateタグには使用しない
- 頻繁に変わるdataに対して使用する
- v-ifと違ってdisplay: none;がついて要素は存在する形になる

### v-for
- v-ifと併用は推奨されない。v-ifと一緒に使用される時v-forが優先されるので注意。
- templateと一緒に使用すると無駄な要素が生成されず良い感じになる
- inでもofでもおｋ
- 必ずkey属性を使用する(予期しないバグが発生するので絶対に使用する)。この場合templateは使用しない。さらにkeyにindexは使用しないように。

## conputedプロパティを使う
dataは動的な値を扱うことはできず静的な値しか使えないので、computedプロパティを使用することで可能になる

基本的にdataは初期値を設定する

※プロパティの呼び出しは括弧は使用しない

### メソッドとの違い
大きくはキャッシュ問題。

メソッドの場合はdataが変更されたときに再描画され再呼び出しが行われるが、computedプロパティは依存するdataの変更のみ再呼び出しが行われる。

二重括弧で動的なものを扱う場合は、無駄に関数を呼び出さないようにcomputedを使用する方がいいかもしれん。

## ウォッチャー(watchプロパティ)
あるデータが変わったときに特定の処理をしたいときに使用する

computedは基本的に同期処理なので、こっちは非同期処理を行う

## html classを動的につける
classをbindして、computedプロパティでクラスをtrue/falseで返す(style_class.html参照)

## styleをバインドするとき
オブジェクトか配列を使ってスタイルを当てる(style.htmlかstyle_class.htmlを参照)

## templateタグ
html要素としては表示されないタグ

reactで言えば`<>`みたいな感じ
