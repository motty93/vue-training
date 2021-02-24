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
- v-bind: 省略も可能（コードを参照）, objectを渡すことも可能、冗長になりそうであればdata側にobjを作成してv-bindに渡すのもあり。
- v-on: 各イベントを指定できるディレクティブ属性(ex: v-on:click, v-on:change...)

### v-on
- eventオブジェクトを使用する際、メソッド引数を渡すとeventを取得できる
- 関数側にeventと他に引数を渡したい場合、`hoge(10, $event)`とするとeventオブジェクトを拾える
- `preventDefault`と`stopPropagation`は`v-on:click.prevent`・`v-on:click.stop`の形で使用可能(hoge.stop.preventと書くこともできる)
- prevent, stopと同じようにキー修飾子も使える(`v-on:keyup.enter`)
