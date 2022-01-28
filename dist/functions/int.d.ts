import { floatOptions } from "./types/floatOptions";
/**
 * Generates a pseudorandom integer
 * @param {number} min - Min value
 * @param {number} max - Max value
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random value generated
 */
declare function int(min: string | number | undefined, max: string | number | undefined, options: floatOptions): number;
export default int;
