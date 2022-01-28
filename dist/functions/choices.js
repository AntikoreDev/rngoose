"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extract_1 = __importDefault(require("./extract"));
const choice_1 = __importDefault(require("./choice"));
/**
 * Returns an array of random values from a given array
 * @param {Object} array - Array to get the items from
 * @param {number} amount - Expected length of the returned array
 * @param {Object} options - Defines the seed and salt to be used, and if values must or must not be repeated
 * @returns {Object} Array of objects
 */
function choices(array, amount, options = { repeat: false }) {
    const repeat = options['repeat'] || false;
    const arr = (repeat ? array : array.filter(t => true));
    amount = Math.max(1, amount);
    let list = [];
    for (let i = 0; i < amount; i++) {
        const entry = (repeat ? (0, choice_1.default)(arr, options) : (0, extract_1.default)(arr, options));
        if (entry != undefined) {
            list.push(entry);
        }
    }
    return list;
}
exports.default = { choices };
//# sourceMappingURL=choices.js.map