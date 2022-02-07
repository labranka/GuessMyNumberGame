'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🧨Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//varijable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//funkcionalnost za dugme proveri
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Kada nista ne unese
  if (!guess) {
    document.querySelector('.message').textContent = '👿 Nije broj!';

    //kada pogodi
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🤩 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    //menjam boju kada pogodi
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //kada unese prevelik broj
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😓 Prevelik broj!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤬Izgubio si!';
      document.querySelector('.score').textContent = 0;
    }

    //kada unese premali broj
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😓 Premali broj!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤬Izgubio si!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//implementacija za dugme AGAIN-resetujem stranicu na klik
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//implementacija za high-score
