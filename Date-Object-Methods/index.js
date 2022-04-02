/* 

https://www.codewars.com/kata/540954232a3259755d000039/train/javascript

Friday the 13ths

Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples
fridayTheThirteenths(1999, 2000) 
  // returns "8/13/1999 10/13/2000"
  
fridayTheThirteenths(2014, 2015) 
  // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
  
fridayTheThirteenths(2000)
  // returns "10/13/2000"
*/

function fridayTheThirteenths(start, end) {
	let finalResult = [];
	let startDate = new Date(`${start},01,01`);
	let endDate = new Date(`${end},12,31`);
	let endDateNoSecondArgument = new Date(`${start},12,31`);

	if (end === undefined) {
		for (
			let day = startDate;
			day <= endDateNoSecondArgument;
			day.setDate(day.getDate() + 1)
		) {
			let dayStr = day.toString();
			let dayNum = day.getDate();
			if (dayStr.includes("Fri") && dayNum === 13) {
				const [m, d, y] = [day.getMonth(), day.getDate(), day.getFullYear()];
				resultDate = `${m + 1}/${d}/${y}`;
				finalResult.push(resultDate);
			}
		}
	} else {
		for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
			let dayStr = day.toString();
			let dayNum = day.getDate();
			if (dayStr.includes("Fri") && dayNum === 13) {
				const [m, d, y] = [day.getMonth(), day.getDate(), day.getFullYear()];
				resultDate = `${m + 1}/${d}/${y}`;
				finalResult.push(resultDate);
			}
		}
	}
	return finalResult.join(" ");
}

fridayTheThirteenths(1999, 2000);
// returns "8/13/1999 10/13/2000"

fridayTheThirteenths(2014, 2015);
// returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"

fridayTheThirteenths(2000);
// returns "10/13/2000"
