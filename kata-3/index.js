//moving Zeros to the end of an array

var moveZeros = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.push(arr.splice(i, 1)[0]);
		}
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 0) {
				arr.push(arr.splice(i, 1)[0]);
			}
		}
	}
	return arr;
};
