/**
 * Converts an string into a seed
 * @param {string} string - String to be converted into seed 
 * @returns {number} Number that can be used as seed
 */
function seed(string){

	if (string === undefined){
		return Math.abs(new Date().getTime() | 0);
	}

	let length = string.length;
	let seed = "";

	for (let i = 0; i < length - 1; i++){
		seed += string.charCodeAt(i);
	}

	seed = seed.toString();
	let parsed = parseInt(seed);

	while (parsed === Infinity){
		seed = seed.substring(0, seed.length - 2);
		parsed = parseInt(seed);
	}
	return Math.max(1, parsed);
}

module.exports = { seed }