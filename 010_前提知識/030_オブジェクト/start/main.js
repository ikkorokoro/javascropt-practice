// オブジェクトとは
/* 名前(プロパティー、またはキー)と値（バリュー）をペアで管理する入れ物
Rubyでいうところのハッシュに似ている */

// プロパティへのアクセス方法
/* 
ドット記法
obj.name 
*/

/* 
ブラケット記法
obj['name'] 
*/

let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function() {
    // オブジェクトに関数を設定する際は名前のない関数、「無名関数」で定義することが多い
    // またオブジェクトの中に格納された関数を「メソッド」という
    console.log('value3');
  },
  prop4: {
    prop5: 'value5'
  }
}

console.log(obj.prop1)
console.log(obj.prop2)
//関数を呼び出すときは()つける
obj.prop3()
console.log(obj.prop4.prop5)
// 新しくプロパティを追加したい場合
obj.prop6 = 'value6'
console.log(obj['prop6'])

console.log(obj)
