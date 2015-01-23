var player = new Player();

var updateTotal = function() {
	$('#total').text(player.currentScore);
};

var updateFrame = function() {
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
	} else {
		$('#tenth-frame').text(player.frameScore);
	}
};

$(document).ready(function() {
	updateTotal();

	$('#bowl').on('click', function() {
		player.strike();
		updateTotal();
		updateFrame();
	});


});