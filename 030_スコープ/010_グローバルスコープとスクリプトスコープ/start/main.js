//スコープ
// 実行中のコードから値と式が参照できるは範囲

//グローバルスコープとスクリプトスコープ
let a = 0;
var b = 0;
function c() {}
console.log(b);
//ブラウザ -> 検証 -> sources -> debubber起動させる -> Scope確認

// let,constはスクリプトスコープ

/* var,functionはグローバルオブジェクトのWindowオブジェクトの中に値が格納されている。これがグローバルスコープ

要するにwindowオブジェクト ＝ グローバルスコープである 
windowオブジェクトはデータを取得する際windowを省略することができる
一般的は使い勝手は変わらないためスクリプトスコープもまとめてグローバルスコープと呼ばれることがある
だがグローバルスコープ、スクリプトスコープの取れる値によって実行結果が変わる可能性があることを認識しておく
*/

window.d = 1;
let d = 2;
console.log(d);

console.log(window.b);  
// 以下のようにwindowを省略できる
console.log(b); 

// まとめ
// スクリプトスコープとグローバルスコープはjsファイルのどこからでも呼び出すことできる