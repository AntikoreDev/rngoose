import float from "./float";
import { floatOptions } from "./types/floatOptions";

/**
 * Returns true at a given chance
 * @param {number} percent - Chance of returning true
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {boolean} If chance met
 */
function chance(percent: number, options: floatOptions){
	return (float(0, 100 - Number.MIN_VALUE, options) < percent);
}

export default { chance }