// スコープチェーン
// スコープが複数階層で連なっていること。
// レキシカルスコープのように他のスコープを含んでいる状態

// 以下のコードのconsole.log(a;)では3が出力される
/* なぜ3になるか？
スコープが連なっている場合は内側のスコープから変数を探していく(スコープチェーン)
ため3が出力される.
もしlet a = 3;をコメントアウトした場合、その1つ外側で定義している1が出力される
*/
let a = 2;

function fn1() {
  let a = 1;
  function fn2() {
    let a = 3;
    console.log(a);
  }
  fn2();
}
fn1();

// 以下の記述の出力は2となる
/* なぜか
  スクリプトオブジェクト(let,const)よりグローバルオブジェクト(window, var, function)が外側のスコープのため
*/
let a = 2;
window.a = 4;
function fn1() {
  function fn2() {
    console.log(a);
  }
  fn2();
}
fn1();

// 注意事項、陥りやすいエラー
/* 以下のコードでは
fn2に定義してあるconsole.log(a);で２を取得しようとしてもif文の中のvarの記述によりホイスティングが発生してしまい
console.logで出力される値はundefinedとなってしまう
*/
let a = 2;
window.a = 4;
function fn1() {
    function fn2() {
        console.log(a);
        if(true) {
            var a = 3;
        }
        
    }
    fn2();
}
fn1();




