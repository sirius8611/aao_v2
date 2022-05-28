function removeFromArray(location, arr) {
  if (["FRONT", "BACK"].includes(location)) {
    if (location === "FRONT") {
      arr.shift();
    } else if (location === "BACK") {
      arr.pop();
    }
  } else {
    console.log("ERROR");
  }
}

testArray = [0, 1, 2, 3, 4];

// removeFromArray("FRONT", testArray);
// console.log(testArray); // [1,2,3,4]

// removeFromArray("BACK", testArray);
// console.log(testArray); // [1,2,3]

// removeFromArray("MIDDLE", 4, testArray); // "ERROR"
// console.log(testArray); // [1,2,3]

function popper(array, num) {
  popped = [];
  for (let i = 0; i < num; i++) {
    popped.push(array.pop());
  }
  return popped;
}

// let arr1 = ["a", "b", "c", "d", "e"];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

function rotateRight(array, num) {
  rotated = array.slice();
  for (let i = 0; i < num; i++) {
    rotated.unshift(rotated.pop());
  }
  return rotated;
}

// let arr = ["a", "b", "c", "d", "e"];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ["wombat", "koala", "opossum", "kangaroo"];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

function rotate(array, num) {
  if (num < 0) {
    for (let i = 0; i < num * -1; i++) {
      array.push(array.shift());
    }
  } else {
    for (let i = 0; i < num; i++) {
      array.unshift(array.pop());
    }
  }
}

// let arr = ["a", "b", "c", "d", "e"];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ["wombat", "koala", "opossum", "kangaroo"];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

function initials(str) {
  let upper = str.toUpperCase().split(" ");
  let initials = [];
  for (let i = 0; i < upper.length; i++) {
    initials.push(upper[i][0]);
  }
  return initials.join("");
}

// console.log(initials("anna paschall")); // 'AP'
// console.log(initials("Mary La Grange")); // 'MLG'
// console.log(initials("brian crawford scott")); // 'BCS'
// console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > words[longest].length) {
      longest = i;
    }
  }
  return words[longest];
}

// console.log(longestWord("where did everyone go")); // 'everyone'
// console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
// console.log(longestWord("")); // ''

function shortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= words[shortest].length) {
      shortest = i;
    }
  }
  return words[shortest];
}

// console.log(shortestWord("what a wonderful life")); // 'a'
// console.log(shortestWord("the quick brown fox jumps")); // 'fox'
// console.log(shortestWord("do what you enjoy")); // 'do'

function reverse(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
}

function reverseSentence(sentence) {
  let words = sentence.split(" ");
  return reverse(words).join(" ");
}

// console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
// console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'

function containsWord(sentence, word) {
  let words = sentence.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words.includes(word.toLowerCase())) {
      return true;
    }
  }
  return false;
}
// console.log(containsWord("sounds like a plan", "like")); // true
// console.log(containsWord("They are great", "they")); // true
// console.log(containsWord("caterpillars are great animals", "cat")); // false
// console.log(containsWord("Cast the net", "internet")); // false

function removeVowels(word) {
  for (let i = 0; i < "aeiou".length; i++) {
    word = word.toLowerCase().split("aeiou"[i]).join("");
  }
  return word;
}

function abbreviateWords(sentence) {
  let words = sentence.slice().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = removeVowels(words[i]);
    }
  }
  return words;
}

// console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
// console.log(abbreviateWords("she sends an excellent message ")); // she snds an xcllnt mssg

function snakeToCamel(sentence) {
  let pascalCase = [];
  let words = sentence.split("_");
  for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i][0].toUpperCase();
    let restOfWord = words[i].slice(1).toLowerCase();
    words[i] = firstLetter + restOfWord;
    pascalCase.push(words[i]);
  }
  return pascalCase.join("");
}

// console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
// console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
// console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
// console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'

function lastVowelIndex(str) {
  let lowerStr = str.toLowerCase();
  for (let i = str.length - 1; i > 0; i--) {
    if ("aeiou".includes(lowerStr[i])) return i;
  }
  return null;
}

function hipsterfy(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    letters.splice(lastVowelIndex(words[i]), 1).join("");
    words[i] = letters.join("");
  }
  return words;
}

// console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
// console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
// console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'

function repeatingTranslate(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 3) {
      if ("aeiou".includes(word[word.length - 1].toLowerCase())) {
        word = word + word;
      } else {
        let vowelIndex = lastVowelIndex(word);
        word = word + word.slice(vowelIndex, word.length);
      }
      words[i] = word;
    }
  }
  return words.join(" ");
}

// console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"

function firstVowel(str) {
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) return i;
  }
  return null;
}

function consonantCancel(sentence) {
  let words = sentence.slice().split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word
      .split("")
      .splice(firstVowel(words[i]), word.length)
      .join("");
  }
  return words.join(" ");
}

// console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
// console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

function sameCharCollapse(str) {
  let collapsed = str;
  let notCollapsed = true;

  while (notCollapsed) {
    notCollapsed = false;

    for (let i = 0; i < collapsed.length - 1; i++) {
      if (collapsed[i] === collapsed[i + 1]) {
        collapsedArr = collapsed.split("");
        collapsedArr.splice(i, 2);
        collapsed = collapsedArr.join("");
        notCollapsed = true;
      }
    }
  }
  return collapsed;
}

// console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// // because zzzxaaxy -> zxaaxy -> zxxy -> zy
// console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// // because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
