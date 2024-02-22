let array = [1, 2, 3, 4, 5];
let k = 2; //number of elements to rotate

let rotateArray = function(arr, k) {
    let n = arr.length;
    k = k % n; 
    let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
};

console.log(rotateArray(array, k));
