function Player (name, dieroll, total, score, robot) {
  this.name = name;
  this.dieroll = dieroll;
  this.total = total;
  this.score = score;
  this.robot = robot;
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
    $('#gotOne').toggle(500);
    $('#gotOne').delay(1400).toggle(200);
    $('#p1, #p1c').toggle(2000);
    $('#p2, #p2c').toggle(2000);
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
  if (confirm("Click OK to Play against Computer...")) {
    console.log("if");
    var player2 = new Player ('ROBOT!', 0, 0, 0, 1);
    console.log(player2.name);
  } else {
    console.log("else");
    var player2 = new Player ('Jesus', 0, 0, 0, 0);
    console.log(player2.name);
  }
  var player1 = new Player ('Dude', 0, 0, 0, 0);

  $('#diceButton1, #diceButton2').click(function(event) {
    event.preventDefault();
    if (this.id == 'diceButton1') {
      $('#diceResult').text(player1.rollDice());
      $('#score').text(player1.pointsTotal());
      $('#tally').text(player1.runningtotal);
      $('#total').text(player1.total);
      $('#p1n').text(player1.name);
    } else if (this.id == 'diceButton2') {
      $('#diceResult').text(player2.rollDice());
      $('#score').text(player2.pointsTotal());
      $('#tally').text(player2.runningtotal);
      $('#total').text(player2.total);
      $('#p2n').text(player2.name);
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
