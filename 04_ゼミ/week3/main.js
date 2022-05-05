const quizText = document.getElementById("quiz-text")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

let quizNumber = 0
const quizzes = [
  {
    text: "私の誕生日は何月ですか？",
    choices: [
      {
        text: "1月",
        isCorrect: false,
        feedback: "残念!違います",
      },
      {
        text: "5月",
        isCorrect: false,
        feedback: "残念!違いますよ",
      },
      {
        text: "6月",
        inCorrect: true,
        feedback: "正解!",
      },
    ],
  },
  {
    text: "私たちの趣味はなんですか？",
    choices: [
      {
        text: "スキー",
        isCorrect: false,
        feedback: "ハズレ!",
      },
      {
        text: "スノボー",
        isCorrect: true,
        feedback: "正解!",
      },
      {
        text: "スケート",
        isCorrect: false,
        feedback: "残念!",
      },
    ],
  },
  {
    text: "最近ハマっているアニメはアニメは？",
    choices: [
      {
        text: "ワンピース",
        isCorrect: false,
        feedback: "ハズレ!",
      },
      {
        text: "ダイヤのA",
        isCorrect: true,
        feedback: "正解!",
      },
      {
        text: "進撃の巨人",
        isCorrect: false,
        feedback: "ハズレ!",
      },
    ],
  },
]

const reloadQuizs = (quizNumber) => {
  const quiz = quizzes[quizNumber]
  quizText.textContent = "Q . " + quiz.text
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  feedback.textContent = ""
  nextQuizButton.classList.add("hidden")
}

const choose = function (choiceNumber) {
  const choice = quizzes[quizNumber].choices[choiceNumber]

  feedback.textContent = choice.feedback

  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      // 次の問題があれば、次の問題ボタンを表示
      nextQuizButton.classList.remove("hidden")
    } else {
      // 次の問題がなければ、結果を表示
    }
  }
}

choice1.onclick = function () {
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  // 2番目の選択肢を選択
  choose(2)
}

nextQuizButton.onclick = function () {
  quizNumber += 1
  reloadQuizs(quizNumber)
}
reloadQuizs(0)
