describe('Dice', function() {
	beforeEach(function() {
		dice = new Dice();
	});

	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		let array = [1, 2, 3, 4, 5];
		expect(dice.add(array)).toEqual(6);
	});
});
