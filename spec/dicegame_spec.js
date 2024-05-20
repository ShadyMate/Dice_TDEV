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
	// Test Case 3:
	let array3 = [6, 6, 4, 4, 1, 3];
	it('should return 2 for [ 6, 6, 4, 4, 1, 3 ]', function() {
		expect(dice.add(array3)).toEqual(2);
	});
	let array4 = [3, 5, 3, 5, 4, 2]
	it('should return 12 for [ 3, 5, 3, 5, 4, 2 ]', function() {
		expect(dice.add(array4)).toEqual(12);
	});
});
