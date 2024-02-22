let words = ["level", "hello", "racecar", "world", "madam"];

let palindromes = function(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}

console.log(palindromes(words)); 
