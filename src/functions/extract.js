const { int } = require('./int.js');

/**
 * Returns a random value from a given array and removes it from the array.
 * @param {Object} array - Array to get the value from
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {*} Random value from the array
 */
function extract(array, options){
	if (array === undefined || !Array.isArray(array))
		throw TypeError(`Function choice must be provided with a valid array`);

	// Get the length
	const len = array.length;

	// Return undefined if there is no length or only 1 entry
	if (len == 0) return undefined;
	if (len == 1) return array[0];

	const idx = int(0, len - 1, options);
	const entry = array[idx];
	
	array.splice(idx, 1);

	return entry;
}

module.exports = { extract }