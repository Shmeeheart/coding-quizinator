var quizArea = document.getElementById('quiz');
var startButton = document.getElementById('start');
var interval;
startButton.addEventListener('click', startQuiz);

var questions = [
  {
    questionText: 'Which one is NOT a commonly used data types',
    choices: ['String', 'Boolean', 'Alerts', 'Numbers'],
    answer: 'alerts',
  },
  {
    questionText: 'The condition of an if/else statement is enclosed with...',
    choices: ['()', '{}', "''", '[]'],
    answer: '()',
  },
  {
    questionText: 'Arrays in JavaScript can be used to store ___',
    choices: [
      'Numbers and strings',
      'Other arrays',
      'Booleans',
      'All of the above',
    ],
    answer: 'All of the above',
  },
  {
    questionText:
      'String values must be enclosed within __ when being assigned to variables',
    choices: ['Commas', 'Curly brackets', 'Quotes', 'Parenthesis'],
    answer: 'Quotes',
  },
  {
    questionText:
      'A very useful tool during development and debugging for printing content to the debugger is',
    choices: ['JavaScript', 'Terminal/bash', 'For loops', 'Console.log'],
    answer: 'Console.log',
  },
];

var currentQuestion = 0;

var time = questions.length * 15;
var timerEl = document.getElementById('timer');

function startQuiz() {
  startTimer();
  showQuestions(questions);
}

function startTimer() {
  interval = setInterval(function () {
    timerEl.textContent = time;
    time--;
    console.log(time);
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function showQuestions(questions) {
  if (currentQuestion < questions.length) {
    quizArea.innerHTML = '';
    var questionText = document.createElement('p');
    questionText.textContent = questions[currentQuestion].questionText;
    quizArea.append(questionText);
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
      var button = document.createElement('button');
      button.textContent = questions[currentQuestion].choices[i];
      button.classList.add('answer-button');
      button.addEventListener('click', checkAnswer);
      quizArea.append(button);
    }
  } else {
    quizArea.innerHTML = '<h2>You have finished the quiz!</h2>';
    quizEnd();
  }
}

function checkAnswer(event) {
  var userChoice = event.target.innerText;
  var correctAnswer = questions[currentQuestion].answer;
  if (userChoice === correctAnswer) {
    console.log('correct');
    time = time + 5;
  } else {
    console.log('incorrect');
    time = time - 5;
  }
  currentQuestion = currentQuestion + 1;
  showQuestions(questions);
}

function quizEnd() {
  //store remaining time in a variable
  var timeRemaining = time;
  stopTimer();
  //display none timerEl
  timerEl.style.display = 'none';
  //display the final score
  quizArea.innerHTML = `<h2>You got ${timeRemaining} points!`;
  submitScore(timeRemaining);
}

function submitScore(timeRemaining) {
  //create input for name with a placeholder
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter your name');
  input.setAttribute('id', 'name');
  quizArea.append(input);

  //create button to submit name
  var submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.setAttribute('id', 'submit');
  quizArea.append(submitButton);

  //save name and timeRemaining to local storage on click of the submit button
  submitButton.addEventListener('click', function () {
    //we get the value of the name input
    var name = document.getElementById('name').value;
    var score = timeRemaining;
    //we create an object with the name and score
    var highscoresStorage =
      JSON.parse(localStorage.getItem('highscores')) || [];

    highscoresStorage.push({
      name: name,
      score: score,
    });

    //then set the high scores to the highscoresStorage array we just created in localStorage
    localStorage.setItem('highscores', JSON.stringify(highscoresStorage));
  });
}
