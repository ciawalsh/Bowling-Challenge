var player = new Player();

var updateTotal = function() {
	$('#total').text(player.currentScore);
};

var updateFirstFrame = function() {
	if (player.attemptNumber === 2) {
		if (player.currentFrame === 0) {
			$('#first-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 1) {
			$('#second-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 2) {
			$('#third-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 3) {
			$('#fourth-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 4) {
			$('#fifth-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 5) {
			$('#sixth-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 6) {
			$('#seventh-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 7) {
			$('#eigth-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 8) {
			$('#ninth-frame-firstattempt').text(player.attemptScore);
		} else if (player.currentFrame === 9) {
			$('#tenth-frame-firstattempt').text(player.attemptScore);
		}
	}
};

var updateSecondFrame = function() {
	if (player.attemptNumber === 1) {
		if (player.currentFrame === 1) {
			$('#first-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 2) {
			$('#second-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 3) {
			$('#third-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 4) {
			$('#fourth-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 5) {
			$('#fifth-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 6) {
			$('#sixth-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 7) {
			$('#seventh-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 8) {
			$('#eigth-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 9) {
			$('#ninth-frame-secondattempt').text(player.attemptScore);
		} else if (player.currentFrame === 10) {
			$('#tenth-frame-secondattempt').text(player.attemptScore);
		}
	}
};

var updateFrameTotal = function() {
	if (player.currentFrame === 1) {
		$('#first-frame').text(player.frameScore);
	} else if (player.currentFrame === 2) {
		$('#second-frame').text(player.frameScore);
	} else if (player.currentFrame === 3) {
		$('#third-frame').text(player.frameScore);
	} else if (player.currentFrame === 4) {
		$('#fourth-frame').text(player.frameScore);
	} else if (player.currentFrame === 5) {
		$('#fifth-frame').text(player.frameScore);
	} else if (player.currentFrame === 6) {
		$('#sixth-frame').text(player.frameScore);
	} else if (player.currentFrame === 7) {
		$('#seventh-frame').text(player.frameScore);
	} else if (player.currentFrame === 8) {
		$('#eigth-frame').text(player.frameScore);
	} else if (player.currentFrame === 9) {
		$('#ninth-frame').text(player.frameScore);
	} else if (player.currentFrame === 10) {
		$('#tenth-frame').text(player.frameScore);
	}
};

$(document).ready(function() {
	updateTotal();

	$('#bowl').on('click', function() {
		player.updateScore();
		updateFirstFrame();
		updateSecondFrame();
		updateFrameTotal();
		updateTotal();
	});


});