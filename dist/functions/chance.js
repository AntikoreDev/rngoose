"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const float_1 = __importDefault(require("./float"));
/**
 * Returns true at a given chance
 * @param {number} percent - Chance of returning true
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {boolean} If chance met
 */
function chance(percent, options) {
    return ((0, float_1.default)(0, 100 - Number.MIN_VALUE, options) < percent);
}
exports.default = { chance };
//# sourceMappingURL=chance.js.map