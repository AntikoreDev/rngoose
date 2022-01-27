// Random functions
module.exports = {

	// Classic math.random();
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

	// Random int
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

	randomInt(min, max, options){
		return module.exports.int(min, max, options);
	},

	// Random float
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

	randomFloat(min, max, options){
		return module.exports.float(min, max, options);
	},

	bool(options){
		return module.exports.float(-99999, 100000, options) > 0;
	},

	randomBool(options){
		return module.exports.bool(options);
	},

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

	choices(array, amount,  options = { repeat: false }){
		const repeat = options['repeat'] || false;
		const arr = (repeat ? array : array.filter(t => true));

		let list = [];
		for (let i = 0; i < amount; i++){
			const entry = (repeat ? module.exports.choice(arr, options) : module.exports.extract(arr, options));
			list.push(entry);
		}
		return list;
	},

	chance(percent, options){
		return (module.exports.randomFloat(0, 100 - Number.MIN_VALUE, options) < percent);
	},

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

	shuffle(array, options){
		if (array === undefined){
			return module.exports.float(-99999, 100000, options);
		}

		if (!Array.isArray(array))
			TypeError(`Function choice must be provided with a valid array`);

		// Do the shuffle
		const shuffled = array.sort((a, b) => {
			return module.exports.float(-99999, 100000, options);
		});

		return shuffled;
	},

	//Converts a string to a valid seed
	seed(string){
		let length = string.length;
		let seed = "";
		for (let i = 0; i < string.length - 1; i++){
			seed += string.charCodeAt(i);
		}
		return parseInt(seed);
	}
}