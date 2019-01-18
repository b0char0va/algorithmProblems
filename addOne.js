//Write a program to add one to a given number. The use of operators like ‘+’, ‘-‘, ‘*’, ‘/’, ‘++’, ‘–‘ …etc are not allowed.
// Examples:
// Input:  12
// Output: 13
const addOne = (a) => {
	let i = 0;
	while((a & (1 << i)) !== 0) {
		a ^= (1 << i);
		i++;
	}
	a |= (1 << i);
	return a;
}
console.log(addOne(2147483646));

