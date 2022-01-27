const { n } = require('./n.js');

/**
 * Generates a pseudorandom integer
 * @param {number} min - Min value
 * @param {number} max - Max value
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random value generated
 */
function int(min, max, options){

	let n1 = 1;
	let n2 = 6;

	if (arguments.length == 1){
		n2 = min;
	}

	if (arguments.length >= 2){
		n1 = min;
		n2 = max;
	}

	if (Number.isNaN(parseInt(n1)) || Number.isNaN(parseInt(n2))){
		throw RangeError(`One or more values are invalid`);
	}

	// FLoor and ceil min and max values
	n1 = Math.ceil(n1);
	n2 = Math.floor(n2);

	if (n1 >= n2)
		throw RangeError(`Min value must not be bigger or same as max value`);

	// Get the result and parse as int
	const result = Math.floor(n(options) * ((n2 + 1) - n1) + n1);
	return result;
}

randomInt = int;
module.exports = { int, randomInt }