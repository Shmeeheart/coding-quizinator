var quizArea = document.getElementById("quiz")
var startButton = document.getElementById("start") 
    startButton.addEventListener("click", startQuiz);

var questions = [
    {
        questionText: "Which one is NOT a commonly used data types", 
        choices: ["String", "Boolean", "Alerts", "Numbers"], 
        answer: "alerts"
    },
    {
        questionText: "The condition of an if/else statement is enclosed with...", 
        choices: ["()", "{}", "''", "[]"], 
        answer: "()"
    },
    {
        questionText: "Arrays in JavaScript can be used to store ___", 
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"], 
        answer: "All of the above"
    },
    {
        questionText: "String values must be enclosed within __ when being assigned to variables", 
        choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"], 
        answer: "Quotes"
    },
    {
        questionText: "A very useful tool during development and debugging for printing content to the debugger is", 
        choices: ["JavaScript", "Terminal/bash", "For loops", "Console.log"], 
        answer: "Console.log"
    },
]

var currentQuestion = 0

var time = questions.length*15
var timerEl=document.getElementById("timer")

function startQuiz() {
    timer()  
    showQuestions(questions)
  }

function timer() {
    var interval = setInterval(function(){
        if(time >0){
            timerEl.textContent=time
            time--
            console.log(time)
        }
        else{
            clearInterval(interval)
        }
    },1000)
}
function showQuestions(questions){
    quizArea.innerHTML = ""
    var questionText = document.createElement("p")
    questionText.textContent = questions[currentQuestion].questionText
    quizArea.append(questionText)
    for(var i=0; i<questions[currentQuestion].choices.length; i++){
        var button = document.createElement("button")
        button.textContent = questions[currentQuestion].choices[i]
        button.classList.add("answer-button")
        button.addEventListener("click",checkAnswer)
        quizArea.append(button)
    }
}
function checkAnswer(event){
    var userChoice = event.target.innerText
    var correctAnswer = questions[currentQuestion].answer
    if (userChoice === correctAnswer) {
        console.log("correct")
        time = time +5
    } else{
        console.log("incorrect")
        time = time -5
    }
    currentQuestion = (currentQuestion +1)
    showQuestions(questions)
}

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
	
// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }