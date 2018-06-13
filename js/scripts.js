function Score (dice, total, running) {
  this.dice = dice
  this.running = []
  this.total = total
}

function Player (name, score) {
  this.name = name
  this.score = score
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
  this.total = this.total + this.runningTotal();
  return this.total
}

function clear() {
  $('#diceResult').text('0')
  $('#tally').text('0')
  $('#total').text('0')
  $('#score').text('0')

}

$(document).ready(function() {

  var diceScore= new Score (0,0,0)
  var player1 = new Player ('Dude', 0, 0)
  var player2 = new Player ('Dudette', 0, 0)

  $('#diceButton').click(function(event) {
    event.preventDefault();
    $('#diceResult').text(diceScore.rollDice());
    $('#score').text(diceScore.pointsTotal());
    $('#tally').text(diceScore.runningTotal());

  });

  $('#holdButton').click(function(event){
    event.preventDefault();
    var data = diceScore.hold()
    $('#total').text(data);
      if ($('#bippy').hasClass('active')){
      player1.score = data
      $('#player1Score').text(data);
      }else{
      $('#player2Score').text(data);
      player2.score = data
      }
      clear();


  });
});
