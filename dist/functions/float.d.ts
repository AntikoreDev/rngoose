import { floatOptions } from './types/floatOptions';
/**
 * Generates a random float
 * @param {number} min - Min value
 * @param {number} max - Max value
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random float value generated
 */
declare function float(min: number, max: number, options: floatOptions): number;
export default float;
