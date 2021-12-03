/*
16+18=214

For this kata you will have to forget how to add two numbers.

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

function add(num1, num2) {
	let num1Text = num1.toString().split("");
	let num2Text = num2.toString().split("");
	if (num1Text.length > num2Text.length) {
		let howManyZeros = num1Text.length - num2Text.length;
		let zeros = "0".repeat(howManyZeros);
		let splitZeros = zeros.toString().split("");
		let arr = [];
		num2Text = splitZeros.concat(num2Text);
	}
	if (num1Text.length < num2Text.length) {
		let howManyZeros = num2Text.length - num1Text.length;
		let zeros = "0".repeat(howManyZeros);
		let splitZeros = zeros.toString().split("");
		num1Text = splitZeros.concat(num1Text);
	}
	let digits1 = num1Text.map(Number);
	let digits2 = num2Text.map(Number);
	let sum = digits1.map(function (num, index) {
		return num + digits2[index];
	});
	let sumText = sum.join("");
	let result = parseFloat(sumText);
	return result;
}
add(1001, 1);
//1
add(2, 11);
// //13
add(122, 81);
// //1103
add(49999, 49999);
//818181818
add(38810, 1383);
//391193
add(1236, 30977);
//31111013
add(0, 0);
//0
