let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(array);
