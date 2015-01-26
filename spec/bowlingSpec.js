// describe ("Scoreboard", function() {

// 	var scoreboard;
// 	var player;

// 	beforeEach(function() {
// 		player = new Player();
// 		scoreboard = new Scoreboard(player);
// 	});

// 	describe("by default", function() {

// 		it("shows no score", function() {
// 			expect(scoreboard.defaultScore).toEqual(0);
// 		});

// 	});

// 	describe("is able to show a score", function() {

// 		it("after a hitting 1 pin down", function() {
// 			player.bowl();
// 			expect(scoreboard.currentScore()).toEqual(1);
// 		});

// 	});

// });

describe ("Player", function() {

	var player;

	beforeEach(function() {
		player = new Player();
	});

	describe("when starting", function() {
		
		it("can enter name", function() {
			player.enterName('Charlie');
			expect(player.playerName).toEqual('Charlie');
		});

	});

	describe("can update score", function() {

		it("and it show on the board", function() {
			player.updateScore(5);
			expect(player.currentScore).toEqual(5);
		});

		it("and it show in two sections within one frame", function() {
			player.updateScore(5);
			expect(player.currentScore).toEqual(5);
		});

	});

	// describe("can update score", function() {

	// 	it("and it show on the board", function() {
	// 		player.updateScore(5);
	// 		expect(player.currentScore).toEqual(5);
	// 	});

	// });



});












