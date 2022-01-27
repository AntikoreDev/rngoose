const { int } = require("./int.js");

/**
 * Returns a random value from a given array
 * @param {Object} array - Array to get the value from
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {*} Random value from the array
 */
function choice(array, options){
	if (array === undefined || !Array.isArray(array))
		throw TypeError(`Function choice must be provided with a valid array`);

	// Get the length
	const len = array.length;

	// Return undefined if there is no length or only 1 entry
	if (len == 0) return undefined;
	if (len == 1) return array[0];

	const entry = array[
		int(0, len - 1, options)
	];

	return entry;
}

module.exports = { choice }