/*
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

Write a function that takes in a string of one or more words, and returns 
the same string, but with all five or more letter words reversed (Just 
like the name of this Kata). Strings passed in will consist of only 
letters and spaces. Spaces will be included only when more than one word 
is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef 
sroirraw" spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(words) {
	// *** Solution 1 ***
	// let result;
	// if (string.length < 5) {
	//   return string;
	// } else if (!string.includes(' ') && string.length >= 5) {
	//     let splitString = string.split("");
	//     let reverseArray = splitString.reverse();
	//     return reverseArray.join("");
	// } else {
	//   let stringIntoArray = string.split(" ");
	//   for (let string of stringIntoArray) {
	//     if (string.length >= 5) {
	//     let splitString = string.split("");
	//     let reverseArray = splitString.reverse();
	//     let reverseString = reverseArray.join("");
	//     let index = stringIntoArray.indexOf(string);
	//     stringIntoArray.splice(index, 1, reverseString);
	//     result = stringIntoArray.join(" ");
	//     } else {
	//       result = stringIntoArray.join(" ");
	//     }
	//   }
	// } return result;

	// *** Solution 2 ***
	return words
		.split(" ")
		.map(function (word) {
			return word.length > 4 ? word.split("").reverse().join("") : word;
		})
		.join(" ");

	// *** Solution 3 ***
	//   let strArr = str.split(' ');
	// for (let i = 0; i < strArr.length; i++) {
	//   if (strArr[i].length >= 5)
	//     strArr[i] = strArr[i].split('').reverse().join('');
	// }
	// return strArr.join(' ');
}

spinWords("Hey fellow warriors warriors");
//"Hey wollef sroirraw"
spinWords("This is another test");
//"This is rehtona test"
spinWords("Welcome");
//"emocleW"
spinWords("This is a test");
//"This is a test"
spinWords("Test");
//"This is a test"
