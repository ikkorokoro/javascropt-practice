// クロージャーとは
// レキシカルスコープの変数を関数が使用している状態

// このクレージャー用いてさまざまな実装がすることができる
/* 
1,プライベート変数の定義 
  関数の外部からアクセスすることができない変数
2,動的な関数のしえ
*/


/* レキシカルスコープ
1, 実行中のコードから見た外部スコープのこと
2,どのようにしてスコープを決定するかの仕様のこと(どこに何を書くかによってスコープが決定するということ)
*/

//  次にincrement();が呼ばれるたびにnumに1を足していくプログラムを作りたい

// 以下のコードでは関数の中で変数num = 0が定義されており,呼ばれるたびにnumが初期化されて0となってしまう
increment();
increment();
increment();

function increment () {
  let num = 0;
  num += + 1;
  console.log(num);
} 

/* 以下のように変数を関数の外で定義することでnumが初期化されずに値が残っていくので1がプラスされていく
だがこの場合どこからでも変数の値を変えてしまうことができてしまうという問題がある。
*/

let number = 0;

inc();
inc();
inc();

function inc () {
  number += + 1;
  console.log(number);
} 
// ここで値を初期化をすることができてしまい。出力結果は1となり値が重複してします。
number = 0;
inc();


// ここで関数の内部に変数を持ちながらも外から変数を変更できないようにし,クロージャーを用いて行う
/* incrementFactory実行時の返り値として関数も返すことができ,かつ関数の中に変数を定義しているため
スコープ外となるため、呼び出すことができないため値を変更することもできない。
*/
function incrementFactory() {
  let n = 1;
  function incfac() {
    n += 1;
    console.log(n);
  }
  return incfac;
}
const incfac = incrementFactory();
incfac();
