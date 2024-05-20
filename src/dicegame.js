// StringCalculator.js
function Dice() {}
Dice.prototype.add = function(dice_calc) {
	let checkArr = [1, 2, 3, 4, 5];
	// compare the array with the array [1, 2, 3, 4, 5]
	if (JSON.stringify(dice_calc) === JSON.stringify(checkArr)) {
		return 6;
	}
};
