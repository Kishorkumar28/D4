let stringArray = ["this is a test", "hello world", "javascript is awesome"];

let titleCapsArray = (function(stringArray) {
    let titleCapsArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let words = stringArray[i].split(' ');
        for (let j = 0; j < words.length; j++) {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
        }
        titleCapsArray.push(words.join(' '));
    }
    return titleCapsArray;
})(stringArray);

console.log(titleCapsArray);
