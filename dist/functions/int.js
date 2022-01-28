"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const n_1 = __importDefault(require("./n"));
/**
 * Generates a pseudorandom integer
 * @param {number} min - Min value
 * @param {number} max - Max value
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random value generated
 */
function int(min = 1, max = 6, options) {
    let n1 = parseInt(min), n2 = parseInt(max);
    if (Number.isNaN(n1) || Number.isNaN(n2))
        throw RangeError(`One or more values are invalid`);
    // FLoor and ceil min and max values
    n1 = Math.ceil(n1);
    n2 = Math.floor(n2);
    if (n1 >= n2)
        throw RangeError(`Min value must not be bigger or same as max value`);
    // Get the result and parse as int
    const result = Math.floor((0, n_1.default)(options) * ((n2 + 1) - n1) + n1);
    return result;
}
exports.default = int;
//# sourceMappingURL=int.js.map