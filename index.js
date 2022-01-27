const { n } 					= require("./functions/n.js");
const { int, randomInt } 		= require("./functions/int.js");
const { float, randomFloat } 	= require("./functions/float.js");
const { bool, randomBool } 		= require("./functions/bool.js");
const { chance } 				= require("./functions/chance.js");
const { choice } 				= require("./functions/choice.js");
const { choices } 				= require("./functions/choices.js");
const { shuffle } 				= require("./functions/shuffle.js");
const { extract } 				= require("./functions/extract.js");
const { seed } 					= require("./functions/seed.js");

module.exports = {
	
	n, int, float, bool, choice, choices, chance, extract, shuffle, seed,

	randomInt, randomFloat, randomBool
}

