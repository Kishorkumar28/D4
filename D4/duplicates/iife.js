let array = [1, 2, 2, 3, 4, 4, 5, 5];

let removeDuplicates = (function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
})(array);

console.log(removeDuplicates);
