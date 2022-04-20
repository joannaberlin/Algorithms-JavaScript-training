/*
https://www.codewars.com/kata/586538146b56991861000293/train/javascript

If you can read this...

Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

function to_nato(words) {
	const alphabet = {
		A: "Alfa",
		B: "Bravo",
		C: "Charlie",
		D: "Delta",
		E: "Echo",
		F: "Foxtrot",
		G: "Golf",
		H: "Hotel",
		I: "India",
		J: "Juliett",
		K: "Kilo",
		L: "Lima",
		M: "Mike",
		N: "November",
		O: "Oscar",
		P: "Papa",
		Q: "Quebec",
		R: "Romeo",
		S: "Sierra",
		T: "Tango",
		U: "Uniform",
		V: "Victor",
		W: "Whiskey",
		X: "Xray",
		Y: "Yankee",
		Z: "Zulu",
		"!": "!",
		".": ".",
		",": ",",
		"?": "?",
	};
	let separateChars = words.split("");
	let filtered = separateChars.filter((word) => word !== " " && word !== "");
	let result = "";
	for (let word of filtered) {
		let key = word.toUpperCase();
		for (const property in alphabet) {
			if (property === key) {
				result += alphabet[property] + " ";
			}
		}
	}
	return result.slice(0, -1);
}

to_nato("If you, can read");
//"India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
to_nato("Did not see that coming");
//"Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf")
to_nato("go for it!");
//"Golf Oscar Foxtrot Oscar Romeo India Tango !");
