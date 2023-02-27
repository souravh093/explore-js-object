const first = {a: 2, b: 9, c: 4, d: 5};
const second = {a: 2, b: 3, c: 4, d: 5};
const third = second;
// if (third === second) {
//     console.log("There are same");
// }else {
//     console.log("different");
// }

// don't use the method compare object or array
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if (firstString === secondString) {
//     console.log("same");
// }else {
//     console.log('Direct');
// }

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    }else {
        return false;
    }
}

const showComparison = compareObject(first, second);
console.log(showComparison);
