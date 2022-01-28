import { floatOptions } from "./types/floatOptions";
/**
 * Generates a random float from 0 to 1, like Math.random() does
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random value
 */
declare function n(options?: floatOptions): number;
export default n;
