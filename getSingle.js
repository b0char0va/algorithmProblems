//Given an array where every element occurs three times, except one element which occurs only once. Find the element that occurs once. Expected time complexity is O(n) and O(1) extra space.
// Examples :

// Input: arr[] = {12, 1, 12, 3, 12, 1, 1, 2, 3, 3}
// Output: 2


const getSingle = (arr) => {
	let one = 0;
	let two = 0;
	for(let i = 0; i < arr.length; i++) {
		if ((one & (1 << arr[i])) === 0 && (two & (1 << arr[i])) === 0) {
			one |= (1 << arr[i]);
		} else if ((one & (1 << arr[i])) !== 0 && (two & (1 << arr[i])) === 0) {
			one ^= (1 << arr[i]);
			two |= (1 << arr[i]);
		}
	}
	return one.toString(2).length-1;
}

console.log(getSingle([12, 2, 2, 12, 3, 12, 1, 2, 3, 3]));