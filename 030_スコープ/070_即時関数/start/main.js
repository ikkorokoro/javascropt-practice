// 即時関数
/* 関数定義と同時に一度だけ実行される関数。 
  即時関数を明示的に記述して、他の開発者たちに宣言時に一度だけしか呼ばれないと共有することができる

  
*/



// 通常の関数の定義と呼び出し方法
function a() {
  console.log('called');
}
a();

// 即時関数による関数の呼び出し
/* 
jsには()の用途として二つの意味がある
1 グループ化
  括弧の中の計算先にを行う。これ以外には特に意味はない。
  let b = (1 + 2) * 3;
  console.log(b);
2 関数の実行
  a();

本来、関数を定義するときは名前をつけないとエラーとなってしまうが宣言された時にだけ呼ぶ、関数の場合いちいち名前を書くのが手間なので 
即時関数を使い、()で関数を実行できるようにする
*/
(function()  {
  console.log ('called');
})();


// 変数の対して関数を代入する場合(関数式)、関数の名前と()を省略することができる。
let b = function() {
  console.log('called')
}();

// 宣言時に即時関数が実行され、
// 1,引数として10を渡し、コンソールにcalled10が出力される
// 2,returnとしてcに０が代入される
let c = (function(d){
    console.log('called' + d);
    return 0;
})(10)
console.log(c);

/* どのように使うか
スコープを用いて関数内で使える関数と関数の外で使える変数や関数を明確にしたいときに使う 

 */

let d = (function(){
  console.log('called');
  let privateVal = 1;
  let pablicVal = 2;
  function privateFn() {
    console.log('private');
  }
  function pablicFn() {
    console.log('pablic');
  }
  return{
    pablicVal,
    pablicFn
  }
})()
// dにpablicVal,pablicFnが格納されているため以下のように外からよび出すことができる。
// privateを呼び出すとエラーが発生する
d.pablicFn();
d.pablicVal
console.log(d)
