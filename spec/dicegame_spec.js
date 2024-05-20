describe('Dice', function() {
	beforeEach(function() {
		dice = new Dice();
	});

	// Test Case 1:
	let array1 = [1, 2, 3, 4, 5];
	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		expect(dice.add(array1)).toEqual(6);
	});
	// Test Case 2:
	let array2 = [ 2, 2, 3, 3 ];
	it('should return 4 for [ 2, 2, 3, 3 ]', function() {
		expect(dice.add(array2)).toEqual(4);
	});
});
