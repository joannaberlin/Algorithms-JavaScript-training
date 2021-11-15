/*
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/

function pigIt(str) {
	let finalResult = [];
	let singleWordInArray = str.split(" ");
	for (let word of singleWordInArray) {
		let wordWithoutFirstLetter = word.slice(1, word.length);
		let firstLetter = word.slice(0, 1);
		let result = wordWithoutFirstLetter + firstLetter + "ay";
		finalResult.push(result);
		if (word === "!" || word === "?") {
			let x = finalResult.join(" ");
			return x.slice(0, x.length - 2);
		}
	}
	return finalResult.join(" ");
}
//test
pigIt("Pig latin is cool");
//'igPay atinlay siay oolcay'
pigIt("This is my string");
//'hisTay siay ymay tringsay'
pigIt("Hello world ?");
// elloHay orldway !
