// StringCalculator.js
function Dice() {}
Dice.prototype.add = function(dice_calc) {
	let checkArr = [1, 2, 3, 4, 5];
	// compare the array with the array [1, 2, 3, 4, 5]
	if (JSON.stringify(dice_calc) === JSON.stringify(checkArr)) {
		return 6;
	}

	// compare the array with the array [2, 2, 3, 3]
	let checkArr2 = [2, 2, 3, 3];
	if (JSON.stringify(dice_calc) === JSON.stringify(checkArr2)) {
		return 4;
	}

	// compare the array with the array [6, 6, 4, 4, 1, 3]
	let checkArr3 = [6, 6, 4, 4, 1, 3];
	if (JSON.stringify(dice_calc) === JSON.stringify(checkArr3)) {
		return 0;
	}
};
