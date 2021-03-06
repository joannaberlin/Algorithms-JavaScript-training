/* 
https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/

function cakes(recipe, available) {
	const maximumNumber = [];
	for (let ingredient in recipe) {
		if (!available[ingredient]) return 0;
		maximumNumber.push(Math.floor(available[ingredient] / recipe[ingredient]));
	}
	return Math.min(...maximumNumber);
}
