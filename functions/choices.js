const { choice } = require("./choice.js");
const { extract } = require("./extract.js");

/**
 * Returns an array of random values from a given array
 * @param {Object} array - Array to get the items from
 * @param {number} amount - Expected length of the returned array
 * @param {Object} options - Defines the seed and salt to be used, and if values must or must not be repeated
 * @returns {Object} Array of objects
 */
function choices(array, amount, options = { repeat: false }){
	const repeat = options['repeat'] || false;
	const arr = (repeat ? array : array.filter(t => true));

	amount = Math.max(1, amount);

	let list = [];
	for (let i = 0; i < amount; i++){
		const entry = (repeat ? choice(arr, options) : extract(arr, options));
		if (entry != undefined){
			list.push(entry);
		}
	}
	return list;
}

module.exports = { choices }