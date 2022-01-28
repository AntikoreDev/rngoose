import float from './float';
import { floatOptions } from './types/floatOptions';
interface shuffleOption extends floatOptions{
	inplace: boolean
}
/**
 * Shuffles an array if given, if not, returns a random float from -99999 and 100000 (That can be used in non-array sort functions)
 * @param {Array} array - Array to be used
 * @param {Object} options - Defines the seed and salt to be used, and if the array should be shuffled in place or not
 * @returns {number|Object} Random number / shuffled array
 */
function shuffle(array: Array<any>, options: shuffleOption): number|Object{
	const inplace = options['inplace'] 

	if (array === undefined){
		return float(-99999, 100000, options);
	}

	if (!Array.isArray(array))
		TypeError(`Function choice must be provided with a valid array`);


	const arr = (inplace ? array : array.filter(t => true));

	// Do the shuffle
	const shuffled = arr.sort((a, b) => {
		return float(-99999, 100000, options);
	});

	return shuffled;
}

export default  shuffle 