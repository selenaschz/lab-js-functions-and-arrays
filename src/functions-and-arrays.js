// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    }else {
        return number2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    let longestWord;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (longestWord === undefined || word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    } 
    
    if (numbers.length === 1) {
        return numbers[0];
    }
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (typeof number !== 'number') {
            return 'The elements of array aren\'t numbers';
        }
        total += number;
    }
        

    return total; 
}

console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = sumNumbers (numbers);
    const average = sum / numbers.length;
    return average;
}

console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, searchWord) {
    if (words.length === 0) {
        return null;
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word === searchWord) {
            return true;
        }
    }
    return false;
}
