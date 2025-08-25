const quizData = [
    {
      question: "Starting off easy: what is Emily's cat's name?",
      options: ["Marmalade", "Juno", "Crookshanks", "Fork"],
      answer: 0,
      explanation: "Marmalade, aka Mar Mar, is my floofy fat cat :D"
    },
    {
      question: "What is Emily's Hogwarts House?",
      options: ["Ravenclaw", "Slytherin", "Hufflepuff", "Gryffindor"],
      answer: 0,
      explanation: "I'm a actually a true Ravenclaw, but I do have a few Hufflepuff-esque qualities."
    },
    {
      question: "What is Emily's favorite color?",
      options: ["Periwinkle", "Fuschia", "Pearl", "Burgandy"],
      answer: 2,
      explanation: "Pearl is my favorites shade of white! Burgandy and Navy Blue are close seconds though."
    },
    {
        question: "What is Emily's least favorite food?",
        options: ["Pineapple", "Sardines", "White Chocolate", "Cheese"],
        answer: 3,
        explanation: "As much as I hate the rest, there is no food I detest more than cheese."
    },
    {
        question: "How tall is Emily?",
        options: ["5'3", "5'4.5", "5'6", "6'8"],
        answer: 1,
        explanation: "Yes, I'm 5'4 and a half. Technically 5'5 if you round up!"
    },
    {
        question: "What does Emily want to major in in college?",
        options: ["Computer Science", "Applied Mathematics", "Mechanical Engineering", "Electrical Computer Engineering"],
        answer: 3,
        explanation: "Definitely ECE but Applied Math/Software Engineering would be close seconds."
    },
    {
        question: "What is Emily's MBTI?",
        options: ["INTJ-T", "ISTP-A", "ISTP-T", "INTJ-A"],
        answer: 0,
        explanation: "Introverted, Intuitive, Thinking, Judging, and Turbulent, apparently."
    },
    {
        question: "Who is Emily's favorite author?",
        options: ["Agatha Christie", "Homer", "Jane Austen", "J.K. Rowling"],
        answer: 0,
        explanation: "Aghh! It's hard to pick but I would have to say Ms. Christie!"
    },
    {
        question: "What is Emily's favorite movie/show?",
        options: ["Howl's Moving Castle", "Interstellar", "The Untamed", "Hidden Figures"],
        answer: 2,
        explanation: "Here's another fun fact: I actually quite enjoy watching c-dramas!"
    },
    {
        question: "What is Emily's patronus?",
        options: ["Hedgehog", "Beagle", "Thestral", "Siamese Cat"],
        answer: 2,
        explanation: "I took the test 6 years apart and got Thestral both times..."
    },
  ];
  
  const feedback = [
    "Who are you? I've probably never talked to you in my life.",
    "Not bad. I hope you learned something new about me!",
    "Impressive! You know me quite well. You're probably one of my close friends :)",
    "Either you're really lucky, or you've taken this quiz more than once. I refuse to believe anything else."
  ];
  // ====================================
  
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const trackerEl = document.getElementById("question-tracker");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    trackerEl.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
    questionEl.innerText = quizData[currentQuestion].question;
    optionsEl.innerHTML = "";
  
    quizData[currentQuestion].options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(index, btn);
      optionsEl.appendChild(btn);
      optionsEl.appendChild(document.createElement("br"));
    });
  }
  
  function checkAnswer(selectedIndex, btn) {
    if (answered) return;
    answered = true;
  
    const correctIndex = quizData[currentQuestion].answer;
    const optionButtons = optionsEl.querySelectorAll("button");
  
    if (selectedIndex === correctIndex) {
      btn.style.backgroundColor = "lightgreen";
      score++;
    } else {
      btn.style.backgroundColor = "salmon";
      optionButtons[correctIndex].style.backgroundColor = "lightgreen";
  
      //explain answer
      const explanationEl = document.createElement("p");
      explanationEl.innerText = quizData[currentQuestion].explanation;
      optionsEl.appendChild(explanationEl);
    }
  
    nextBtn.disabled = false;
  }
  
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultEl.style.display = "block";
    resultEl.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3>`;
  
    let feedbackText;
    if (score === quizData.length) {
      feedbackText = feedback[3];
    } else if (score >= quizData.length * 0.7) {
      feedbackText = feedback[2];
    } else if (score >= quizData.length * 0.4) {
      feedbackText = feedback[1];
    } else {
      feedbackText = feedback[0];
    }
    resultEl.innerHTML += `<p>${feedbackText}</p>`;
  }
  
  loadQuestion();
  