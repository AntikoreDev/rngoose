import { floatOptions } from "./types/floatOptions";
interface choiceOptions extends floatOptions {
    repeat?: boolean;
}
/**
 * Returns an array of random values from a given array
 * @param {Object} array - Array to get the items from
 * @param {number} amount - Expected length of the returned array
 * @param {Object} options - Defines the seed and salt to be used, and if values must or must not be repeated
 * @returns {Object} Array of objects
 */
declare function choices(array: Array<any>, amount: number, options?: choiceOptions): any[];
declare const _default: {
    choices: typeof choices;
};
export default _default;
