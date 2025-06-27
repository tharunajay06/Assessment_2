/*Question 1 */

function mostRepeatedChar(str) {
    let maxCount = 0;
    let maxChar = '';
    let counts = {};

    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
        if (counts[char] > maxCount) {
            maxCount = counts[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(mostRepeatedChar("aabbbcc")); 

/*Question 2 */
function findUniqueElements(arr1, arr2) {
    let result = [];
    for (let num of arr1) {
        if (!arr2.includes(num)) {
            result.push(num);
        }
    }
    for (let num of arr2) {
        if (!arr1.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
/*Question 3 */
console.log(findUniqueElements([1, 2, 3], [2, 4, 5])); 
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord("JavaScript is powerful"));

/*Question 4 */
function chain(value) {
    return {
        add(num) {
            value += num;
            return this;
        },
        subtract(num) {
            value -= num;
            return this;
        },
        result() {
            return value;
        }
    };
}
console.log(chain(5).add(2).subtract(1).result());

/*Question 5 

Hoisting means print or run the code before the declaration. For example
*/
console.log(hoistedVar); 
var hoistedVar = 10;

/*
If i print the variable before declaration, it will print undefined.
*/

hoistedFunc(); // "I am hoisted!"
function hoistedFunc() {
    console.log("I am hoisted!");
}
/*
But if i call the function before declaration, it will print the function.
*/


