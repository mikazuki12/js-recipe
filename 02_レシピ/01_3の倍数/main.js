const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}

// n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}
