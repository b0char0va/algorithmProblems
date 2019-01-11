//reverse in place
const reverseWords = function(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
};

console.log(reverseWords("	a b"));