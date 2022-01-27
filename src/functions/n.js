/**
 * Generates a random float from 0 to 1, like Math.random() does
 * @param {Object} options - Defines the seed and salt to be used
 * @returns {number} Random value
 */
function n(options = { seed: undefined, salt: 1 }){

	// Get options
	const seed = parseInt(options['seed']) 		|| undefined;
	const salt = parseFloat(options['salt']) 	|| 1;

	function seedify(s){
		var mask = 0xffffffff;
		var m_w  = (123456789 + s) & mask;
		var m_z  = (987654321 - s) & mask;
	
		m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
		m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;
	
		var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
		result /= 4294967296;
	  
		return result;
	}

	const random = (seed === undefined ? Math.random() : seedify(seed * salt));
	return random;
}
module.exports = { n }