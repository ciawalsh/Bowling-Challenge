var Scoreboard = function(player) {
	this.defaultScore = 0;
  this.player = player;
};

Scoreboard.prototype.currentScore = function() {
  return this.player.currentScore;
};

var Player = function() {
	this.playerName = 'default';
	this.defaultScore = 0;
	this.currentScore = 0;
};

Player.prototype.enterName = function(enteredName) {
	this.playerName = enteredName;
};

Player.prototype.startGame = function() {
	player.enterName();
};

Player.prototype.bowl = function() {
	this.currentScore += 1;
};
