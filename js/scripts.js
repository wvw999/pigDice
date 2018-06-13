function Player (name, score) {
  this.name = name
  this.score = score
}

function Score (dice, total, running) {
  this.dice = dice
  this.running = []
  this.total = total
}

Player.prototype.playerInfo = function () {
  return this.name + this.score + this.total;
};

Score.prototype.rollDice = function () {
    this.dice = Math.floor((Math.random() * 6) + 1);
    return this.dice
}

Score.prototype.pointsTotal = function () {
  var points = this.dice;
  if (points !== 1) {
    this.running.push(points)
  } else {
    this.running = []
  }
 return this.running
}

Score.prototype.runningTotal = function () {
  var x = 0
  this.running.forEach(function(add) {
    x = x + add
  });
  return x
}

Score.prototype.hold = function () {
  this.total = this.total + this.runningTotal()
  this.running= []
  return this.total
}

$(document).ready(function() {

  var player1 = new Player('dude',0);
  var player2 = new Player('dudette',0);
  var diceScore= new Score (0,0,0)

  $('#diceButton').click(function(event) {
    event.preventDefault();
    console.log(diceScore.runningTotal());
    $('#diceResult').text(diceScore.rollDice());
    $('#score').text(diceScore.pointsTotal());
    $('#tally').text(diceScore.runningTotal());

  });

  $('#holdButton').click(function(event){
    event.preventDefault();
    //needs to hand off rolling dice to other player
    $('#total').text(diceScore.hold());
    player2.toggle;

  });
});
