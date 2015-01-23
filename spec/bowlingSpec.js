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

	describe("can bowl", function() {

		it("and hit a strike", function() {
			player.strike();
			expect(player.currentScore).toEqual(10);
		});

		it("and finish a 'turn'", function() {
			player.strike();
			expect(player.currentFrame).toEqual(2);
		});

	});

	describe("when finshing", function() {

		it("knows its total score", function() {
			player.strike();
			player.strike();
			player.strike();
			player.strike();
			player.strike();
			player.strike();
			player.strike();
			player.strike();
			player.strike();
			player.strike();
			expect(player.totalScore).toEqual(100);
		});

	});

});












