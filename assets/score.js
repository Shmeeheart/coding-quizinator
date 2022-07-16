function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  var highscoresEl = document.getElementById('highscores');

  highscores.forEach(function (score) {
    var li = document.createElement('li');
    li.textContent = score.name + ': ' + score.score;
    highscoresEl.appendChild(li);
  });
}

printHighscores();
