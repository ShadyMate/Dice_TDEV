describe('Dice', function() {
	beforeEach(function() {
		dice = new Dice();
	});
	let array1 = [1, 2, 3, 4, 5];
	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		
		expect(dice.add(array1)).toEqual(6);
	});
});
