function Player (name, robot) {
  this.name = name;
  this.dieroll = 0;
  this.clickedhold = 0;
  this.gotone = 0;
  this.tally = 0;
  this.total = 0;
  this.robot = robot;
  this.victory = 0;
}

Player.prototype.rollDice = function () {
  this.dieroll = Math.floor((Math.random() * 6) + 1);
  this.tally = this.tally + this.dieroll;
}

Player.prototype.hold = function () {
  this.total = this.total + this.tally;
  this.dieroll = 0;
  this.tally = 0;
  $('#die').text(this.dieroll);
  $('#running').text(this.tally);
}

$(document).ready(function() {
    var player1 = new Player ('Dude');
    var player2 = new Player ('Jesus');
    var player3 = new Player ('ROBOT!', 1);
    if (confirm("Click OK to Play against Computer...")) {
    var playerArray = [player1, player3];
  } else {
    var playerArray = [player1, player2];
  }

  for(y = 1; ((player1.victory == 0) && (player2.victory == 0) && (player3.victory == 0)); y++) {
    console.log("got parent for loop");
    playerArray.forEach(function(player) {
      console.log("got to array loop");
      $('#die').text(0);
      $('#running').text(0);
      for(x = 1; ((player.gotone == 0) && (player.clickedhold == 0)); x++) {
         $('#diceButton').click(function(event) {
          event.preventDefault();
           console.log("got to dice click event");
            player.rollDice();
         });
         $('#holdButton').click(function(event) {
          event.preventDefault();
           console.log("got to hold click event");
           player.hold();
         });
      }
      this.gotone = 0;
      this.clickedhold = 0;
    });
  }

});
