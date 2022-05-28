const infiniteSentence = (word) => {
  return (newWord) => {
    return word + newWord;
    
  };
};

let s1 = infiniteSentence("beginning");
let s2 = s1(4);
console.log(s2());
