import { floatOptions } from "./types/floatOptions";
import n from "./n"

/**
 * Generates a pseudorandom integer
 * @param {number} min - Min value
 * @param {number} max - Max value
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random value generated
 */
function int(min: number | string  = 1, max: number | string = 6, options: floatOptions): number {

	let n1 = parseInt(min as string), n2 = parseInt(max as string) ;
	

	if (Number.isNaN(n1) || Number.isNaN(n2)) throw RangeError(`One or more values are invalid`);

	// FLoor and ceil min and max values
	n1 = Math.ceil(n1 as number);
	n2 = Math.floor(n2 as number);

	if (n1 >= n2)
		throw RangeError(`Min value must not be bigger or same as max value`);

	// Get the result and parse as int
	const result = Math.floor(n(options) * ((n2 + 1) - n1) + n1);
	return result;
}

export default  int 