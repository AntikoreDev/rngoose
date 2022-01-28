import { floatOptions } from './types/floatOptions';
interface shuffleOption extends floatOptions {
    inplace: boolean;
}
/**
 * Shuffles an array if given, if not, returns a random float from -99999 and 100000 (That can be used in non-array sort functions)
 * @param {Array} array - Array to be used
 * @param {Object} options - Defines the seed and salt to be used, and if the array should be shuffled in place or not
 * @returns {number|Object} Random number / shuffled array
 */
declare function shuffle(array: Array<any>, options: shuffleOption): number | Object;
export default shuffle;
