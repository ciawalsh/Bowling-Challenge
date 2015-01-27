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
			expect(player.attemptScore).toEqual('5');
		});

		it("and it show on the board", function() {
			player.updateScore(5);
			player.updateScore(5);
			expect(player.frameScore).toEqual(10);
		});
		
	});

});












