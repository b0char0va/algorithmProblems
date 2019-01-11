// return the first recurring character, given a string
const recurringChar = (str) => {
	let checker = 0;
	for(let i = 0; i < str.length; i++) {
		let val = str.charCodeAt(i)- 65; 
		if((checker & (1 << val)) > 0) {
			return str[i];
		} 
		checker |= (1 << val);	
	}
	return null;
}

console.log(recurringChar('ABCBC'));