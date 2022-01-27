const { float } = require("./float.js");

/**
 * Generates a random boolean (true/false)
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {boolean} true or false
 */
function bool(options){
	return float(-99999, 100000, options) > 0;
}

module.exports = { bool }