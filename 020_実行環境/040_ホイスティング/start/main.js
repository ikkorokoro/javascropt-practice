// ホイスティング
/* コンテキスト内で宣言した変数や関数の定義をコード実行前にメモリーに配置すること
  ホイスティングはコンテキストが生成されるごと宣言部分がメモリスペースが確保される
*/

// 関数
/*  以下のようにa();の呼び出しを関数の上に持ってきても関数を実行することができる
  これは関数を一度定義するとメモリ上に記憶されているのでa();を関数の上に記述しても実行することができる
*/
a();
function a() {
  console.log('a is called');
}


// 変数(var)
/* 変数(var)の場合は以下記述だと、コンソール上ではundefindとなってしまう */

console.log(b);
var b = 0;

// 上記は以下のコードとと同等であるためundefined(未定義)となる

/* コード解説
変数bの定義によって、メモリスペースが確保される
だがまだ値がないためjsエンジンがundefinedと言う値を設定する */
var c;

console.log(c);

var c = 0;

// 変数の定義方法による挙動の違い
/* let const var 
メモリスペース確保の時点で値が設定されていない場合
varではundefinedが設定されるが
let constの場合ReferenceErrorが起きる
このように挙動が異なるためvarが非推奨となっている
*/


// 関数コンテキストでも同じくホイスティングが発生する
d();
function d() {
  console.log(e);
  var e = 0;//let、constの場合エラーが起きる

  f();
  function f() {
    console.log('b is called');
  }
}


// 関数の定義方法
// 無名関数と関数式というものがある
// 無名関数
f();
  function f() {
    console.log('b is called');
  }

//関数式
//この定義方法では変数の書き方と同じなため、変数のホイスティングの挙動と同じになるため以下コードの結果はReferenceErrorとなる
g();
const g = function() {
  console.log('c is called');
}

//jsエンジンによって実行結果が変わってくる可能性がある
/* 
googlechome = v8エンジン
firefox = スパイシーモンキー */