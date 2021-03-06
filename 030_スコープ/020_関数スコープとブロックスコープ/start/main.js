//関数スコープとブロックスコープ
//関数スコープ
/* funcitonの{}の中のスコープがブロックススコープ 
*/
// 正常に処理が行われる(スコープ内)
function a() {
  let b = 0;
  console.log(b);
}
a();

//エラーが発生する(スコープの外)
// 以下のコードだと変数bはfunctionの外から呼び出そうとするとエラーが発生する
function a() {
  let b = 0;
}
// console.log(b);
a();


//ブロックスコープ
/* 
{}に囲まれた範囲のことをブロックスコープ
一般的にはif,for文の際の{}はブロックスコープが生成される
関数スコープは 関数宣言がされているため関数スコープとなる
jsでブロックスコープを使用するには
letまたはconstで変数宣言を行う.
varではブロックスコープが生成されない

letとconstで宣言した変数はは{}の中では呼び出せるが{}の外で呼び出すとエラーが発生する
varの場合内外どちらでも呼び出せることでせることができ、意図しない挙動をする場合がるため非推奨となっている。
*/

//ブロックスコープ内(呼び出せる)
{
  const c = 1;
  let d = 2;
  console.log(c);
  console.log(d);
}

//スコープ外(呼び出せないエラー発生)
{
  const e = 1;
  let f = 2;
}
// console.log(e);
// console.log(f);

//varの場合{}外からも呼び出すことができる(非推奨)
{
  var g = 1;
}
console.log(g);

// ブロックスコープ内での関数宣言

/* ブロックスコープ内で無名関数で関数宣言を行った場合,
ブロックスコープを無視して外から呼び出すことができる */

{
  function h() {
    console.log('h is called');
  }
}
h();

/* ブロックスコープ内で宣言方法がconst,letを使用した
関数式で関数宣言を行った場合,呼び出すことができない（エラーが発生する） */

{
  const i = function(){
    console.log('i is called');
  } 
}
i();

// まとめ
/* 
関数スコープ
関数を定義した時の{}の中のスコープのこと
{}の中では呼び出せるが外では呼び出すことができない

ブロックスコープ
{}中のスコープ
letまたはconstで変数宣言を行う.
varではブロックスコープが生成されない
{}の中で無名関数を定義すると{}の外でも呼び出せるが
let,constで宣言した関数式の場合、ブロックスコープが適用され、
スコープ外から呼び出すことができない(エラー)
*/
// スコープとコンテキスト
// グローバルスコープ内に定義されている変数や関数をグローバルコンテキテストで使用することができる
// 関数スコープ内に定義されている変数や関数を関数コンテキスト内で使用することができる