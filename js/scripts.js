function Player (name, dieroll, total, score, robot) {
  this.name = name;
  this.dieroll = dieroll;
  this.total = total;
  this.score = score;
  this.robot = robot;
};

Player.prototype.playerInfo = function () {
  return this.name + this.score + this.total;
};

Player.prototype.rollDice = function () {
    this.dieroll = Math.floor((Math.random() * 6) + 1);
    console.log("here is the die roll" + this.dieroll);
    return this.dieroll
};

Player.prototype.pointsTotal = function (player2) {
  var points = this.dieroll;
  if (points !== 1) {
    if (this.total + this.score + points >= 100) {
      this.total = this.total + this.score + points
      $('#victory').toggle();
      $('#victory').text(this.name + " wins!");
    } else {
    this.score = this.score + points
  };
  } else {
    this.score = 0
    changePlayer();
  };
 return this.score
};


function changePlayer () {
  $('#gotOne').toggle(500);
  $('#gotOne').delay(1400).toggle(200);
  $('#p1, #p1c').toggle(2000);
  $('#p2, #p2c').toggle(2000);
  clear();
}

function clear() {
  $('#diceResult').text('0')
  $('#score').text('0')
};

function robot(player2) {
  console.log('BEEP BOOP!');
  for (x = 1; ((x < 6) || (player2.score >= 15)); x++) {
  player2.rollDice();
  player2.scoreupdate();
  player2.pointsTotal(player2);
}
};

Player.prototype.scoreupdate = function () {
$('#diceResult').text(this.rollDice());
$('#score').text(this.pointsTotal());
$('#tally').text(this.runningtotal);
$('#total').text(this.total);
$('#p1n').text(this.name);
};

// Player.prototype.checkBot = function () {
//   if (this.robot === 1) {
//     robot(this);
//   } else {
//   }
// }

Player.prototype.hold = function () {
  this.total = this.total + this.score;
  return this.total
};

$(document).ready(function() {
  if (confirm("Click OK to Play against Computer...")) {
    var player2 = new Player ('ROBOT!', 0, 0, 0, 1);
  } else {
    var player2 = new Player ('Jesus', 0, 0, 0, 0);
  }
  var player1 = new Player ('Dude', 0, 0, 0, 0);

$('#diceButton1, #diceButton2').click(function(event) {
  event.preventDefault();
  if (this.id == 'diceButton1') {
    player1.scoreupdate();
  } else {
    player2.scoreupdate();
  };
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
