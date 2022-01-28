import { floatOptions } from "./types/floatOptions";
/**
 * Returns a random value from a given array and removes it from the array.
 * @param {Object} array - Array to get the value from
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {*} Random value from the array
 */
declare function extract(array: any[], options: floatOptions): any;
export default extract;
