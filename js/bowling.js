// var Scoreboard = function(player) {
// 	this.defaultScore = 0;
// 	this.player = player;
// };

// Scoreboard.prototype.currentScore = function() {
// 	return this.player.currentScore;
// };

var Player = function() {
	this.playerName = 'default';
	this.defaultScore = 0;
	this.currentScore = 0;
	this.currentFrame = 0;
	this.frameScore = 0;
};

Player.prototype.enterName = function(enteredName) {
	this.playerName = enteredName;
};

Player.prototype.startGame = function() {
	player.enterName();
};

Player.prototype.strike = function() {
	if (this.currentFrame < 10) {
		this.currentScore += 10;
		this.frameScore = 10;
		this.calculateFrameScore();
		this.nextFrame();
	}
};

Player.prototype.calculateFrameScore = function() {
	if (this.frameScore === 10) {
		return "strike";
	}
};

Player.prototype.nextFrame = function() {
	if (this.currentFrame < 10) {
		this.currentFrame += 1;
	} else if (this.currentFrame === 10) { 
		this.totalScore = this.currentScore; 
	}
};
