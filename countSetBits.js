const hammingWeight = function(n) {
    let result = 0;

    for(let i = 0; i < 32; i++) {
        if((n & (1 << i)) !== 0) {
            result++;
        }
    }
    return result;
};
console.log(hammingWeight(00000000000000000000000000011101));