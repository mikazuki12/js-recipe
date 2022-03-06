const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function() {
    // ここにクリック後の処理を書く
  count += 1
  // count を表示
  display.textContent = count
}