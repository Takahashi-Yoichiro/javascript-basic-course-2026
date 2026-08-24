/* eslint-disable no-unused-vars */
//JavaScriptには、CやC++、Javaなどで使われている
//条件文やループ文が用意されている。
export function abs(x) {
  //絶対値を計算する関数。
  if (x >= 0) {
    //if文は、
    return x; //比較がtrueの場合に、このコードを実行する。
  } //ここでif節が終わる。
  else {
    //省略可能なelse節は、
    return -x; //比較がfalseのときに実行される。
  } //節に1文しかない場合は、中括弧は省略できる。
} //return文は、if/else中に含まれていることに注意。
// abs(-10) === abs(10); //=>true
export function sum(array) {
  //配列の要素の合計を計算する。
  let sum = 0; //sumの初期値を0にする。
  for (let x of array) {
    //配列をループし、各要素をxに代入する。
    sum += x; //sumに各要素の値を加算する。
  } //ここでループが終わる。
  return sum; //sumを返す。
}
// sum(primes); //=>28:5番目までの素数の合計2+3+5+7+11
export function factorial(n) {
  //階乗を計算する関数。
  let product = 1; //1からスタート。
  while (n > 1) {
    //()中の式がtrueの間は{}中の文を繰り返す。
    product *= n; //product= product * n;の短縮表記。
    n--; //n =n-1の短縮表記。
  } //ループの最後。
  return product; //計算結果を返す。
}
// factorial(4); //=>24:1*4*3*2
export function factorial2(n) {
  //ループ方法を変えた関数。
  let i,
    product = 1; //1からスタート。
  for (
    i = 2;
    i <= n;
    i++ //iは、2からnまで自動的にインクリメントされる。
  )
    product *= i; //ループごとに実行される。文は1行なので{}は必要ない。
  return product; //階乗の計算結果を返す。
}
// factorial2(5); //=>120:1*2*3*4*5
