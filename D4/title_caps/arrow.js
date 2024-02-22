let stringArray = ["hello world", "good morning", "have a nice day"];

let convertToTitleCaps = array => {
    return array.map(string => {
        return string.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });
};

let titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);
