let stringArray = ["this is a test", "hello world", "javascript is awesome"];

let titleCapsArray = (function(stringArray) {
    return stringArray.map(function(sentence) {
        return sentence.split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });
})(stringArray);

console.log(titleCapsArray);
