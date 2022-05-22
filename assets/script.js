function startQuiz() {
  timer()  
  showQuestions(questions)
}
var quizArea = document.getElementById("quiz")
var startButton = document.getElementById("start") 
    startButton.addEventListener("click", startQuiz);

var questions = [
    {
        questionText: "Which one is NOT a commonly used data types", 
        choices: ["string", "boolean", "alerts", "numbers"], 
        answer: "alerts"
    },

    {
        questionText: "The condition of an if/else statement is enclosed with...", 
        choices: ["()", "{}", "''", "[]"], 
        answer: "()"
    },

    // {
    //     questionText: "Which one is NOT a commonly used data types", 
    //     choices: ["string", "boolean", "alerts", "numbers"], 
    //     answer: "alerts"
    // }
    
]

var currentQuestion = 0

var time = 30
var timerEl=document.getElementById("timer")

function timer() {
    var interval = setInterval(function(){
        if(time >0){
            timerEl.innerText=time
            time = (time -1)
        }
        else{
            clearInterval(interval)
        }
    },1000)
}
function showQuestions(questions){
    quizArea.innerHTML = ""
    var questionText = document.createElement("p")
    questionText.innerText = questions[currentQuestion].questionText
    quizArea.append(questionText)
    for(var i=0; i<questions[currentQuestion].choices.length; i++){
        var button = document.createElement("button")
        button.innerText = questions[currentQuestion].choices[i]
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
    } else{
        console.log("incorrect")
        time = time -5
    }
    currentQuestion = (currentQuestion +1)
    showQuestions(questions)
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
	
	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}