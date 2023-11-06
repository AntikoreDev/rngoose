# rngoose
<div align="center">
	<a href = "https://github.com/AntikoreDev/rngoose" onClick = "return false"><img alt = "Repo size" src = "https://img.shields.io/github/repo-size/AntikoreDev/rngoose?style=for-the-badge"></a>
	<a href = "https://github.com/AntikoreDev/rngoose/pulls"><img alt = "Pull Requests" src = "https://img.shields.io/github/issues-pr/AntikoreDev/rngoose?style=for-the-badge"></a>
	<a href = "https://github.com/AntikoreDev/rngoose/issues"><img alt = "Issues" src = "https://img.shields.io/github/issues/AntikoreDev/rngoose?style=for-the-badge"></a>
	<a href = "https://github.com/AntikoreDev/rngoose/graphs/contributors"><img alt = "Contributors" src = "https://img.shields.io/github/contributors/AntikoreDev/rngoose?style=for-the-badge"></a>
	<a href = "https://github.com/AntikoreDev/rngoose/stargazers"><img alt = "Stars" src = "https://img.shields.io/github/stars/AntikoreDev/rngoose?style=for-the-badge"></a>
	<a href = "https://github.com/AntikoreDev/rngoose/blob/main/LICENSE"><img alt = "License" src = "https://img.shields.io/github/license/AntikoreDev/rngoose?style=for-the-badge"></a>
	<a href = "https://github.com/AntikoreDev/rngoose/blob/main/LICENSE"><img alt = "License" src = "https://img.shields.io/github/license/AntikoreDev/rngoose?style=for-the-badge"></a>
	<a href = "https://github.com/AntikoreDev/rngoose"><img alt="npm" src="https://img.shields.io/npm/dt/rngoose?style=for-the-badge"></a>
</div>

rngoose is a package to provide better and easier rng functions into JS. Allows for seeds and other stuff.

## Installation
You can install rngoose in your node.js projects. As an example:
```
npm i rngoose
yarn add rngoose
```

## How to use
All you have to do is require the package `rngoose`. In this documentation we will be importing it with the name random in all examples.
```js
const random = require("rngoose");

const number = random.int();
console.log(number); // Returns any number between 1 and 6 (inclusive)
```

## Functions
### Random Integer
```js
// Returns a random number between 1 and 6, just like a die.
const die = random.int(); 		

// Returns a random number between 1 and 100.
const score = random.int(100); 

// Returns a random number between 3 and 6.
const items = random.int(3, 6); 

// Returns a number between 1 and 100, using the seed 150 and salt 1.5. When using seeds, the result number is always the same for the same seed. This is useful to generate worlds for example. Salt acts as a modifier for the seed, when you have different random generators with the same min, max and seed, you sometimes want to be different between them but still keeping the seed features, that's where salt comes in.
const seeded = random.int(1, 100, { seed: 150, salt: 1.5 }); 

console.log(die);
console.log(score);
console.log(items);
console.log(seeded);
```

### Random Floats
Acts the same way as random integers, but with floating points
```js
// Returns a random float number between 1 and 6, just like a die.
const die = random.float(); 		

// Returns a random float number between 1 and 100.
const score = random.float(100); 

// Returns a random float number between 3 and 6.
const items = random.float(3, 6); 

// You got the point
const seeded = random.float(1, 100, { seed: 150, salt: 1.5 }); 

console.log(die);
console.log(score);
console.log(items);
console.log(seeded);
```

### Classic Random
Returns a random float between 0 and 1, just like Math.random() function does, with the slight difference you can pass seed and salt for rngoose one
```js
const rdm = random.n();
const seeded = random.n({ seed: 656525 });

console.log(rdm);
console.log(seeded);
```

### Random Bool
Returns true or false randomly
```js
const isMemeBad = random.bool();
if (isMemeBad){
	console.log("So bad");
}else{
	console.log("Not that bad");
}
```

### Random Choice
Returns a random value inside an array
```js
const list = ["Tomato", "Banana", "Apple", "Pepe", "Pepe?"];

const entry = random.choice(list);
console.log(entry);
```

### Random List of Choices
Returns an array of random choices inside the array
```js
const list = ["Tomato", "Banana", "Apple", "Pepe", "Pepe?"];

// Get 3 random values from the array "list"
const entry = random.choices(list, 3);
console.log(entry);

// Get 3 random values from the array "list", but they can be repeated
const entry2 = random.choices(list, 3, { repeat: true });
console.log(entry2);

// Get 2 random values from the array "list", allowing to repeat and with seed 1500
const entry3 = random.choices(list, 2, { repeat: true, seed: 1500 });
console.log(entry3);
```

### Extract Function
Same as choice but removing the entry from the original array
```js
const list = ["Tomato", "Banana", "Apple", "Pepe", "Pepe?"];

// Get 3 random values from the array "list"
const entry = random.extract(list);
console.log(entry);
console.log(list);
```

### Chance Function
I don't think I need to explain this one, is just self explanatory
```js
if (random.chance(1)){
	console.log("Woah, you got some good luck right there!");
}
```

### Shuffle Function
Shuffles an array and returns the shuffled array
```js
const list = ["Tomato", "Banana", "Apple", "Pepe", "Pepe?"];

// Shuffles
const shuffled = random.shuffle(list);
console.log(shuffled);
console.log(list);

const shuffleHelp = random.shuffle(); // Returns a random float between -99999 and 100000. You can use this to shuffle other type of arrays that have a sort function.
console.log(shuffleHelp);
```


### Seed Function
Converts an string into a integer that can be used as seed. Note that this may not have the result you expect with very long strings. Recommended to always put small strings if possible. If no string is provided, then it will return a random seed from current time (This is the most common way to generate seeds out of nothing)
```js
// Generates a seed out of the name "Antikore"
const name = "Antikore";
const seed = random.seed(name);

// Returns a random number between 0 and 100, based on the seed
const coolness = random.int(0, 100, { seed: seed });

console.log(coolness); // B)
```
## Contribute
You can freely contribute to this project by creating pull request, however, you must verify your code works properly before. Remember that this repository is licensed under GNU General Public License v3.0

## Support me
If you want to support me and my work, consider to [Buy me a coffee](ko-fi.com/antikore) ✨☕
