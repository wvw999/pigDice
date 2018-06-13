var pointsArray = [];

// function Player (name, score, total) {
//   this.name = name
//   this.score = 0
//   this.total = 0
// }
//
// Player.prototype.playerInfo = function () {
//   return this.name + this.score + this.total;
// };
function runningtotal() {
  var x = 0
  pointsArray.forEach(function(add) {
    x = x + add
  console.log(x);
  });
  return x
}

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
//
// function pointsTally() {
//   totalArray= []
//   pointsTotal()
// }



$(document).ready(function() {
  // var player1 = new Player(1,0,0);
  // var player2 = new Player(2,0,0);

    $('#diceButton').click(function(event) {
        event.preventDefault();
        var rollResult = pointsTotal();
        var runningResult = runningtotal();
        $('#diceResult').text(rollResult);

        $('#score').text(pointsArray);

        $('#tally').text(runningResult);






  });
});
