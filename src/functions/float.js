const { n } = require('./n.js');

/**
 * Generates a random float
 * @param {number} min - Min value
 * @param {number} max - Max value
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random float value generated
 */
function float(min, max, options){

	let n1 = 1;
	let n2 = 6;

	if (arguments.length == 1){
		n2 = min;
	}

	if (arguments.length >= 2){
		n1 = min;
		n2 = max;
	}

	if (n1 >= n2)
		throw RangeError(`Min value must not be bigger or same as max value`);

	// Get the result and parse as int
	const result = (n(options) * ((n2) - n1) + n1);
	return result;
}

module.exports = { float }