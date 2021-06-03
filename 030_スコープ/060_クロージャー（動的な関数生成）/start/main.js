// クロージャー（動的な関数)
/* addNumberFactory(5);の引数5によって、addNumberのnumに５がセットされる状態になる。
addNumberはaddNumberFactoryの中に記述されているためレキシブルスコープでnumを参照することができるため5がセットされる
関数の引数の値によって生成される関数を変えることができるため、動的な関数として使用できる
*/

function addNumberFactory(num) {
  function addNumber(value) {
    return num + value
  }
  return addNumber
}

const add5 = addNumberFactory(5);
const res = add5(10);
console.log(res);
// 引数を変更することで出力を変更することができる
const add10 = addNumberFactory(10);
const result = add10(15);
console.log(result);