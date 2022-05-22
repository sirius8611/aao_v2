/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let lastVoweIndex = function (word) {
  let letters = word.split("");
  return letters.reduce((lastVowelIndex, currentLetter, currentIndex) => {
    return "aeiou".includes(currentLetter) ? currentIndex : lastVowelIndex;
  }, 0);
};

let removeLastVowel = function (word) {
  let letters = word.split("");
  letters.splice(lastVoweIndex(word), 1);
  return letters.join("");

  // alternative with slice
  //   let vowelIndex = lastVoweIndex(word);
  //   return word.slice(0, vowelIndex) + word.slice(vowelIndex + 1, word.length);
};

let hipsterfy = function (sentence) {
  return sentence
    .split(" ")
    .map((word) => removeLastVowel(word))
    .join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hipsterfy;
} catch (e) {
  module.exports = null;
}
