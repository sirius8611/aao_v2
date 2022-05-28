/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let lastVoweIndex = function (word) {
  let letters = word.split("");
  return letters.reduce((lastVowelIndex, currentLetter, currentIndex) => {
    return "aeiou".includes(currentLetter) ? currentIndex : lastVowelIndex;
  }, 0);
};

let repeatEnding = function (word) {
  return word + word.slice(lastVoweIndex(word), word.length);
};

let repeatWord = function (word) {
  return word + word;
};

let translateWord = function (word) {
  if (word.length >= 3) {
    let lastLetter = word[word.length - 1];
    if ("aeiou".includes(lastLetter)) {
      return repeatWord(word);
    } else {
      return repeatEnding(word);
    }
  } else {
    return word;
  }
};

let repeatingTranslate = function (sentence) {
  return sentence
    .split(" ")
    .map((word) => translateWord(word))
    .join(" ");
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = repeatingTranslate;
} catch (e) {
  module.exports = null;
}
