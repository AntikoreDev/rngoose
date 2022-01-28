import float from "./float";
import { floatOptions } from "./types/floatOptions";
/**
 * Generates a random boolean (true/false)
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {boolean} true or false
 */

function bool(options: floatOptions): boolean {
	return float(-99999, 100000, options) > 0;
}

export default { bool }