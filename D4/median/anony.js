let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let median = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let n = mergedArray.length;
    let midIndex = Math.floor(n / 2);
    if (n % 2 === 0) {
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        return mergedArray[midIndex];
    }
};

console.log(median(arr1, arr2));
