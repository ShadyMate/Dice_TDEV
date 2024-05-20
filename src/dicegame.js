// StringCalculator.js
function Dice() {}
Dice.prototype.add = function(dice_calc) {
	// Filter odd numbers from dice_calc
    let oddNumbers = dice_calc.filter(n => n % 2 === 1);
    
    // Sum the odd numbers and subtract the count of odd numbers
    let result = oddNumbers.reduce((acc, n) => acc + n, 0) - oddNumbers.length;
    
    return result;
};
