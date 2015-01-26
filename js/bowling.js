var Player = function() {
	this.playerName = 'default';
	this.defaultScore = 0;
	this.currentScore = 0;
	this.currentFrame = 0;
	this.attemptScore = 0;
	this.frameScore = 0;
	this.attemptNumber = 1;
	this.strikeBonus = false;
	this.spareBonue = false;
};

Player.prototype.enterName = function(enteredName) {
	this.playerName = enteredName || prompt("What is your name?");
};

Player.prototype.updateScore = function(pinsHit) {
	if (this.strikeBonus === false) {
		if (this.attemptNumber === 1) {
			score = prompt("What did you score on the first attempt?") || pinsHit;
			if (score < 10) {
				this.attemptScore = score;
				this.currentScore += parseInt(score);
				this.attemptNumberChange();
			} else if (score == 10) {
				this.frameScore = score;
				this.attemptScore = score;
				this.currentScore += parseInt(score);
				this.activateStrikeBonus();
				this.endFrame();
			} else {
				alert("Please enter a number between 1-10");
			}
		}
		else if (this.attemptNumber === 2) {
			var score2 = prompt("What did you score the second attempt?") || pinsHit;
			if (parseInt(score) + parseInt(score2) < 10) {
				this.attemptScore = score2;
				this.frameScore = parseInt(score) + parseInt(score2);
				this.currentScore += parseInt(score2);
				this.attemptNumberChange();
				this.endFrame();
			} else if (parseInt(score) + parseInt(score2) == 10) {
				this.frameScore = 10;
				this.attemptScore = score2;
				this.currentScore += parseInt(score2);
				this.attemptNumberChange();
				this.endFrame();
			} else {
				alert("Please enter a number between 1-10");
			}
		}
	}
	else if (this.strikeBonus === true) {
		if (this.attemptNumber === 1) {
			score = prompt("What did you score on the first attempt?") || pinsHit;
			if (score < 10) {
				this.attemptScore = score;
				this.currentScore += (parseInt(score)*2);
				this.attemptNumberChange();
			} else if (score == 10) {
				this.frameScore = score;
				this.attemptScore = score;
				this.currentScore += (parseInt(score)*2);
				this.endFrame();
			} else {
				alert("Please enter a number between 1-10");
			}
		}
		else if (this.attemptNumber === 2) {
			var score2 = prompt("What did you score the second attempt?") || pinsHit;
			if (parseInt(score) + parseInt(score2) < 10) {
				this.attemptScore = score2;
				this.frameScore = parseInt(score) + parseInt(score2);
				this.currentScore += (parseInt(score)*2);
				this.attemptNumberChange();
				this.activateStrikeBonus();
				this.endFrame();
			} else if (parseInt(score) + parseInt(score2) == 10) {
				this.frameScore = 10;
				this.attemptScore = score2;
				this.currentScore += (parseInt(score)*2);
				this.attemptNumberChange();
				this.activateStrikeBonus();
				this.endFrame();
			} else {
				alert("Please enter a number between 1-10");
			}
		}
	}
};

// Player.prototype.calculateFrameScore = function() {
// 	if (this.frameScore == 10) {
// 		var answer = prompt("Did you get a strike or spare?");
// 		if (answer == "strike") {
// 			return "Well done";
// 		} else {
// 			return "Just as good";
// 		}
// 	}
// };

Player.prototype.attemptNumberChange = function () {
	if (this.attemptNumber == 1) {
		this.attemptNumber = 2;
	} else if (this.attemptNumber == 2) {
		this.attemptNumber = 1;
	}
};

Player.prototype.endFrame = function() {
	if (this.currentFrame < 10) {
		this.currentFrame += 1;
	} else if (this.currentFrame === 10) { 
		this.totalScore = this.currentScore; 
	}
};

Player.prototype.activateStrikeBonus = function() {
	if (this.strikeBonus === false) {
		this.strikeBonus = true;
	} else {
		this.strikeBonus = false;
	}
};
