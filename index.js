// Random functions
module.exports = {

	/**
	 * Generates a random float from 0 to 1, like Math.random() does
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {number} Random value
	 */
	n(options = { seed: undefined, salt: 1 }){

		// Get options
		const seed = parseInt(options['seed']) 		|| undefined;
		const salt = parseFloat(options['salt']) 	|| 1;

		Math.seed = function (s){
			var mask = 0xffffffff;
			var m_w  = (123456789 + s) & mask;
			var m_z  = (987654321 - s) & mask;
		
			m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
			m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;
		
			var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
			result /= 4294967296;
		  
			return result;
		}

		const random = (seed === undefined ? Math.random() : Math.seed(seed * salt));
		return random;
	},

	/**
	 * Generates a random integer
	 * @param {number} min - Min value
	 * @param {number} max - Max value
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {number} Random value generated
	 */
	int(min, max, options){

		let n1 = 1;
		let n2 = 6;

		if (arguments.length == 1){
			n2 = min;
		}

		if (arguments.length >= 2){
			n1 = min;
			n2 = max;
		}

		if (Number.isNaN(parseInt(n1)) || Number.isNaN(parseInt(n2))){
			throw RangeError(`One or more values are invalid`);
		}

		// FLoor and ceil min and max values
		n1 = Math.ceil(n1);
		n2 = Math.floor(n2);

		if (n1 >= n2)
			throw RangeError(`Min value must not be bigger or same as max value`);

		// Get the result and parse as int
		const result = Math.floor(module.exports.n(options) * ((n2 + 1) - n1) + n1);
		return result;
	},

	/**
	 * Generates a random integer
	 * @param {number} min - Min value
	 * @param {number} max - Max value
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {number} Random value generated
	 */
	randomInt(min, max, options){
		return module.exports.int(min, max, options);
	},

	/**
	 * Generates a random float
	 * @param {number} min - Min value
	 * @param {number} max - Max value
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {number} Random float value generated
	 */
	float(min, max, options){

		let n1 = 1;
		let n2 = 6;

		if (arguments.length == 1){
			n2 = min;
		}

		if (arguments.length >= 2){
			n1 = min;
			n2 = max;
		}

		if (n1 >= n2)
			throw RangeError(`Min value must not be bigger or same as max value`);

		// Get the result and parse as int
		const result = (module.exports.n(options) * ((n2) - n1) + n1);
		return result;
	},

	/**
	 * Generates a random float
	 * @param {number} min - Min value
	 * @param {number} max - Max value
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {number} Random float value generated
	 */
	randomFloat(min, max, options){
		return module.exports.float(min, max, options);
	},

	/**
	 * Generates a random boolean (true/false)
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {boolean} true or false
	 */
	bool(options){
		return module.exports.float(-99999, 100000, options) > 0;
	},

	/**
	 * Generates a random boolean (true/false)
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {boolean} true or false
	 */
	randomBool(options){
		return module.exports.bool(options);
	},

	/**
	 * Returns a random value from a given array
	 * @param {Object} array - Array to get the value from
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {*} Random value from the array
	 */
	choice(array, options){
		if (array === undefined || !Array.isArray(array))
			throw TypeError(`Function choice must be provided with a valid array`);

		// Get the length
		const len = array.length;

		// Return undefined if there is no length or only 1 entry
		if (len == 0) return undefined;
		if (len == 1) return array[0];

		const entry = array[
			module.exports.randomInt(0, len - 1, options)
		];

		return entry;
	},

	/**
	 * Returns an array of random values from a given array
	 * @param {Object} array - Array to get the items from
	 * @param {number} amount - Expected length of the returned array
	 * @param {Object} options - Defines the seed and salt to be used, and if values must or must not be repeated
	 * @returns {Object} Array of objects
	 */
	choices(array, amount,  options = { repeat: false }){
		const repeat = options['repeat'] || false;
		const arr = (repeat ? array : array.filter(t => true));

		amount = Math.max(1, amount);

		let list = [];
		for (let i = 0; i < amount; i++){
			const entry = (repeat ? module.exports.choice(arr, options) : module.exports.extract(arr, options));
			if (entry != undefined){
				list.push(entry);
			}
		}
		return list;
	},

	/**
	 * Returns true at a given chance
	 * @param {number} percent - Chance of returning true
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {boolean} If chance met
	 */
	chance(percent, options){
		return (module.exports.randomFloat(0, 100 - Number.MIN_VALUE, options) < percent);
	},

	/**
	 * Returns a random value from a given array and removes it from the array.
	 * @param {Object} array - Array to get the value from
	 * @param {Object} options - Defines the seed and salt to be used
	 * @returns {*} Random value from the array
	 */
	extract(array, options){
		if (array === undefined || !Array.isArray(array))
			throw TypeError(`Function choice must be provided with a valid array`);

		// Get the length
		const len = array.length;

		// Return undefined if there is no length or only 1 entry
		if (len == 0) return undefined;
		if (len == 1) return array[0];

		const idx = module.exports.randomInt(0, len - 1, options);
		const entry = array[idx];
		
		array.splice(idx, 1);

		return entry;
	},

	/**
	 * Shuffles an array if given, if not, returns a random float from -99999 and 100000 (That can be used in non-array sort functions)
	 * @param {Object} array - Array to be used
	 * @param {Object} options - Defines the seed and salt to be used, and if the array should be shuffled in place or not
	 * @returns {number|Object} Random number / shuffled array
	 */
	shuffle(array, options = { inplace: false }){
		const inplace = options['inplace'] || false;

		if (array === undefined){
			return module.exports.float(-99999, 100000, options);
		}

		if (!Array.isArray(array))
			TypeError(`Function choice must be provided with a valid array`);


		const arr = (inplace ? array : array.filter(t => true));

		// Do the shuffle
		const shuffled = arr.sort((a, b) => {
			return module.exports.float(-99999, 100000, options);
		});

		return shuffled;
	},

	/**
	 * Converts an string into a seed
	 * @param {string} string - String to be converted into seed 
	 * @returns {number} Number that can be used as seed
	 */
	seed(string){

		if (string === undefined){
			return Math.abs(new Date().getTime() | 0);
		}

		let length = string.length;
		let seed = "";

		for (let i = 0; i < length - 1; i++){
			seed += string.charCodeAt(i);
		}

		seed = seed.toString();
		let parsed = parseInt(seed);

		while (parsed === Infinity){
			seed = seed.substring(0, seed.length - 2);
			parsed = parseInt(seed);
		}
		return Math.max(1, parsed);
	}
}