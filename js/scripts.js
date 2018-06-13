var pointsArray = [];
var playerTotal = 0
// function Player (name, score, total) {
//   this.name = name
//   this.score = 0
//   this.total = 0
// }
//
// Player.prototype.playerInfo = function () {
//   return this.name + this.score + this.total;
// };


function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
}

function pointsTotal() {
  var points = rollDice();
  if (points !== 1) {
    pointsArray.push(points)
  } else {
    pointsArray = []
  }
 return points
}

function runningTotal() {
  var x = 0
  pointsArray.forEach(function(add) {
    x = x + add
  });
  return x
}

function hold(result) {
 playerTotal = playerTotal + result;
 pointsArray = []
 return playerTotal
}

$(document).ready(function() {
  // var player1 = new Player(1,0,0);
  // var player2 = new Player(2,0,0);

    $('#diceButton').click(function(event) {
        event.preventDefault();
        var rollResult = pointsTotal();
        var runningResult = runningTotal();
        $('#diceResult').text(rollResult);
        $('#score').text(pointsArray);
        $('#tally').text(runningResult);

  });

  $('#holdButton').click(function(event){
    event.preventDefault();
    //needs to hand off rolling dice to other player
    var pointsAdd = runningTotal();
    var display = hold(pointsAdd);
    $('#total').text(display);
    console.log(pointsArray);
  });
});
