// Rotate a given array given number of times. Last item moves to first index during rotation.
function solution(arr, k) {
    let previous = arr[0];
    let temp;
    let first = arr[0];
    for(let j = 0; j < k; j++){
        for(let i = 0; i <= arr.length-1; i++) {
            if(i === arr.length-1) {
                temp = first;
                arr[0] = previous;
            }else{
                temp = arr[i+1];
                arr[i+1] = previous;
                previous = temp;
            }
        }
    }
    return arr;
}

console.log(solution([1,2,3], 2));