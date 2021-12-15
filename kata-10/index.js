/*
https://www.codewars.com/kata/5412509bd436bd33920011bc
Usually when you buy something, you're asked whether your credit card number, phone number or answer to 
your most secret question is still correct. However, since someone could look over your shoulder, you 
don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

function maskify(cc) {
	// if (cc.length > 4) {
	//   let cut1 = cc.slice(- 4);
	//   let cut2 = cc.slice(0, - 4)
	//   let hashtag =  "#";
	//   let replaced = cut2.replace(cut2, hashtag.repeat(cut2.length))
	//     return replaced + cut1
	// } else {
	//     return cc
	// }

	// if (cc.length < 4) return cc
	// return '#'.repeat(cc.length - 4) + cc.slice(-4)

	return cc.slice(-4).padStart(cc.length, "#");
}

maskify("4556364607935616");
//'############5616'
maskify("1");
//'1'
maskify("11111");
//'#1111'
