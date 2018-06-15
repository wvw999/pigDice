function Player (name, robot) {
  this.name = name;
  this.dieroll = 0;
  this.clickedhold = 0;
  this.gotone = 0;
  this.tally = 0;
  this.total = 0;
  this.hadaturn = 0;
  this.robot = robot;
  this.victory = 0;
}

Player.prototype.rollDice = function () {
  val rolling = this.dieroll = Math.floor((Math.random() * 6) + 1);
  if(rolling > 1) {
    this.tally = this.tally + this.dieroll;
    console.log(this);
    this.turnreset();
  } else
    this.turnreset();
  }
}

Player.prototype.turnreset = function (value) {
    this.tally = 0
    this.dieroll = 0
    this.hadaturn = 1
}

Player.prototype.hold = function () {
  this.total = this.total + this.tally;
  this.dieroll = 0;
  this.tally = 0;
  $('#die').text(this.dieroll);
  $('#running').text(this.tally);
  this.clickedhold = 1;
  console.log(this);
}

function playmanager (mode,game) {
  if (mode = 1) {
    if(game[0].hadaturn == 0) {
     game[0].rollDice();
    } else {
     game[1].rollDice();
    }
  } else {
    if(game[0].hadaturn == 0) {
     game[0].hold();
    } else {
     game[1].hold();
    }
  }

}


$(document).ready(function() {
  var player1 = new Player ('Dude');
  var player2 = new Player ('Jesus');
  var player3 = new Player ('ROBOT!', 1);
  if (confirm("Click OK to Play against Computer...")) {
    var game = [player1, player3];
  } else {
    var game = [player1, player2];
  }

    $('#diceButton').click(function(event) {
    event.preventDefault();
    console.log("got to dice click event ");
    playmanager(1,game);
  });
  $('#holdButton').click(function(event) {
    event.preventDefault();
    console.log("got to hold click event ");
    playmanager(2,game);
  });
});
