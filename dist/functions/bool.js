"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const float_1 = __importDefault(require("./float"));
/**
 * Generates a random boolean (true/false)
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {boolean} true or false
 */
function bool(options) {
    return (0, float_1.default)(-99999, 100000, options) > 0;
}
exports.default = { bool };
//# sourceMappingURL=bool.js.map