var player1 = Math.floor(Math.random(1)*6)+1;
var player2 = Math.floor(Math.random(1)*6)+1;
alert=(player1);
function whichDice(number) {
  document.querySelector('h1').textContent="Player "+number+" Wins.";
  document.querySelector(".img2").setAttribute("src", "images/dice"+player2+".png");
  document.querySelector(".img1").setAttribute("src", "images/dice"+player1+".png");

}

function flag() {

}
  if (player1 < player2) {
    whichDice(2);
  }
    else if (player1 > player2) {
    whichDice(1);
  } else {
    whichDice();
    document.querySelector('h1').textContent="Draw!";
}
/*}*/
