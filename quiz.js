let ques = document.querySelector("#question");
let optn = document.querySelector("#option");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");

let currentQ = 0;
let score = 0;

let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "define", "int", "dim"],
    correct: "var"
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
      "getElementByClass()",
      "querySelectorAll()",
      "getElementById()",
      "selectElement()"
    ],
    correct: "getElementById()"
  },
  {
    question: "Which language runs inside the browser?",
    options: ["Python", "Java", "JS", "C++"],
    correct: "JS"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: "<h1>"
  },
  {
    question: "Which method prints something in the console?",
    options: [
      "console.print()",
      "console.log()",
      "print.console()",
      "log.console()"
    ],
    correct: "console.log()"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "<!-- -->", "##", "**"],
    correct: "//"
  }
];

function disableBtn() {
  let allBtns = document.querySelectorAll("#option button");

  allBtns.forEach((btn) => {
    btn.disabled = true;
  });
}

function loadQuestion() {
  optn.innerHTML = "";

  if (currentQ === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  let current = questions[currentQ];
  ques.innerText = current.question;

  current.options.forEach((option) => {
    let btn = document.createElement("button");
    btn.innerText = option;
    optn.append(btn);

    btn.addEventListener("click", () => {
      if (option === current.correct) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");

        let allBtns = document.querySelectorAll("#option button");

        allBtns.forEach((b) => {
          if (b.innerText === current.correct) {
            b.classList.add("correct");
          }
        });
      }

      disableBtn();
    });
  });
}

nextBtn.addEventListener("click", () => {
  currentQ++;

  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    ques.innerText = `Quiz Finished 🎉 Your Score: ${score}/${questions.length}`;
    optn.innerHTML = "";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQ > 0) {
    currentQ--;
    loadQuestion();
  }
});

loadQuestion();