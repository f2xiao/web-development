var randomNumber1 = Math.floor(Math.random() * 6)+1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6)+1;
// console.log(randomNumber1);
var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var title = document.querySelector(".container h1");
console.log(title);

img1.setAttribute("src", randomDiceImage1);
img2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2){
  title.innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 == randomNumber2) {
  title.innerHTML = "Draw!";
}
else {
  title.innerHTML = "Player 2 Wins! 🚩";
}
