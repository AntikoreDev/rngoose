"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const float_1 = __importDefault(require("./float"));
/**
 * Shuffles an array if given, if not, returns a random float from -99999 and 100000 (That can be used in non-array sort functions)
 * @param {Array} array - Array to be used
 * @param {Object} options - Defines the seed and salt to be used, and if the array should be shuffled in place or not
 * @returns {number|Object} Random number / shuffled array
 */
function shuffle(array, options) {
    const inplace = options['inplace'];
    if (array === undefined) {
        return (0, float_1.default)(-99999, 100000, options);
    }
    if (!Array.isArray(array))
        TypeError(`Function choice must be provided with a valid array`);
    const arr = (inplace ? array : array.filter(t => true));
    // Do the shuffle
    const shuffled = arr.sort((a, b) => {
        return (0, float_1.default)(-99999, 100000, options);
    });
    return shuffled;
}
exports.default = shuffle;
//# sourceMappingURL=shuffle.js.map