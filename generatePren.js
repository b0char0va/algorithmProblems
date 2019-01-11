Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
let generateParenthesis = (n) => {
    let result = [];
    let helper = (str, left, right, n) => {
        if (left === n && right === n) {
            result.push(str);
            return;
        } else { 
            if (left < n && right < n) {
               helper(str.concat('('), left+1, right, n);
            }
            if (right < n && left > right) {
                helper(str.concat(')'), left, right+1, n);
            }
        }
    }
    helper('', 0, 0, n);
    return result;
}