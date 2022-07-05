function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
}

printHighscores();
