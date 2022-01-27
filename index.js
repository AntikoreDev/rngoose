const { n 		} = require("./functions/n.js");
const { int 	} = require("./functions/int.js");
const { float 	} = require("./functions/float.js");
const { bool 	} = require("./functions/bool.js");
const { chance 	} = require("./functions/chance.js");
const { choice 	} = require("./functions/choice.js");
const { choices } = require("./functions/choices.js");
const { shuffle } = require("./functions/shuffle.js");
const { extract } = require("./functions/extract.js");
const { seed 	} = require("./functions/seed.js");

// Export stuff
module.exports = {
	n, int, float, bool, choice, choices, chance, extract, shuffle, seed
}

