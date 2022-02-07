'use strict';

//varijable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//zato sto mi se ponavlja puno puta zelim da imam funkciju
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//funkcionalnost za dugme proveri
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Kada nista ne unese
  if (!guess || guess < 0) {
    displayMessage('👿 Nije odgovarajuci broj(Unesi broj od 1 do 20)!');

    //kada pogodi
  } else if (guess === secretNumber) {
    displayMessage('🤩 Tacan broj!');
    document.querySelector('.number').textContent = secretNumber;
    //menjam boju kada pogodi
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //kada je odgovor pogresan
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '😓 Prevelik broj!' : '😣 Premali broj'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤬Izgubio si!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//implementacija za dugme AGAIN-resetujem stranicu na klik
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//implementacija za high-score
