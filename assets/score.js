function printHighscores() {
  var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];
  var highScoresEl = document.getElementById('highScores');

  highScores.forEach(function (score) {
    var li = document.createElement('li');
    li.textContent = score.name + ': ' + score.score;
    highScoresEl.appendChild(li);
  });
}

printhighScores();
