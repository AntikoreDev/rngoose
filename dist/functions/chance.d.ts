import { floatOptions } from "./types/floatOptions";
/**
 * Returns true at a given chance
 * @param {number} percent - Chance of returning true
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {boolean} If chance met
 */
declare function chance(percent: number, options: floatOptions): boolean;
declare const _default: {
    chance: typeof chance;
};
export default _default;
