// const distributeCandies = (array) => {
// 	let sortedArray = array.sort(sortedNumber);
// 	let count = 1;
// 	for(let i = 0; i < sortedArray.length && count < sortedArray.length/2; i++){
// 		if(sortedArray[i] < sortedArray[i+1]) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// const sortedNumber = (a,b) => {
// 	return a-b;	
// }

// console.log(distributeCandies([1,1,2,2,3,3]));
// console.log(distributeCandies([1,1,2,3]));
var binaryGap = function(N) {
    let binary = convertToBinary(N);
    let maxGap = 0;
    let gap = 0;
    for(let i = 0; i < binary.length; i++) {
    	if(binary[i] === '1') {
    		for(let j = i+1; j < binary.length; j++){
    			if(binary[j] === '0') {
    				gap++;
    			} else if (binary[j] === '1') {
    				if(gap > maxGap) {
    					maxGap = gap;
    				}
    				break;
    			}
    		}
    		gap = 0;
    	}
    }
    return maxGap;
}


function convertToBinary(N) {
    let bin = '';
    while(N >= 2) {
        bin = N % 2 + bin;
        N = Math.floor(N / 2);
    }
    return N+bin;
}
console.log(convertToBinary(1610612737));
console.log(binaryGap(1610612737));
console.log('0000000000000000000000000000'.length);