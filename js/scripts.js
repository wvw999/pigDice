function Player (name, dieroll, total, score) {
  this.name = name
  this.dieroll = dieroll
  this.total = total
  this.score = score
}

Player.prototype.playerInfo = function () {
  return this.name + this.score + this.total;
};

Player.prototype.rollDice = function () {
    this.dieroll = Math.floor((Math.random() * 6) + 1);
    console.log("here is the die roll" + this.dieroll);
    return this.dieroll
}

Player.prototype.pointsTotal = function () {
  var points = this.dieroll;
  if (points !== 1) {
    if (this.total + this.score + points >= 100) {
      this.total = this.total + this.score + points
      $('#victory').toggle();
      $('#victory').text(this.name + " wins!");
    } else {
    this.score = this.score + points
    }
  } else {
    this.score = 0
    $('#gotOne').toggle(800);
    $('#p1, #p1c').toggle(300);
    $('#p2, #p2c').toggle(300);
    $('#gotOne').toggle(400);
  }
 return this.score
}

function clear() {
  $('#diceResult').text('0')
  $('#score').text('0')
}

Player.prototype.hold = function () {
  this.total = this.total + this.score;
  return this.total
}

$(document).ready(function() {

  var player1 = new Player ('Dude', 0, 0, 0)
  var player2 = new Player ('Dudette', 0, 0, 0)

  $('#diceButton1, #diceButton2').click(function(event) {
    event.preventDefault();
    if (this.id == 'diceButton1') {
      $('#diceResult').text(player1.rollDice());
      $('#score').text(player1.pointsTotal());
      $('#tally').text(player1.runningtotal);
      $('#total').text(player1.total);
    } else if (this.id == 'diceButton2') {
      $('#diceResult').text(player2.rollDice());
      $('#score').text(player2.pointsTotal());
      $('#tally').text(player2.runningtotal);
      $('#total').text(player2.total);
    }
  });

$('#holdButton1, #holdButton2').click(function (event) {
    event.preventDefault();
    $('#p1, #p1c').toggle(300);
    $('#p2, #p2c').toggle(300);
       if (this.id == 'holdButton1') {
          var data = player1.hold()
          player1.score = data
          player1.runningtotal = 0
          player1.score = 0
          $('#player1Score').text(data);
       } else if (this.id == 'holdButton2') {
          var data = player2.hold()
          player2.score = data
          player2.runningtotal = 0
          player2.score = 0
          $('#player2Score').text(data);
       }
      clear();;
  });
});
