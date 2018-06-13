function Player (name, score, total) {
  this.name = name
  this.score = []
  this.total = []
}

Player.prototype.playerInfo = function () {
  return this.name + this.score + this.total;
};


function rollDice() {
  var diceRolled = Math.floor((Math.random() * 6) + 1);
  return diceRolled
}




$(document).ready(function() {
    $('#diceButton').click(function(event) {
        event.preventDefault();
        var rollResult = rollDice();
        $('.dice').text(rollResult);







  });
});
