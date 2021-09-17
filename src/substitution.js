// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split('')
    if (!alphabet || alphabet.length < 26) return false
    const alphabetSplit = alphabet.split('')
    let alphabetSize = new Set(alphabetSplit)
    if(alphabetSize.size < 26) return false  
    const inputLowerCase = input.toLowerCase()
    let encodedInput = ""
    if (encode){
      for(let i = 0; i < inputLowerCase.length; i++){
        if(inputLowerCase[i] === " ") {
          encodedInput += inputLowerCase[i]
        } else {
       let letter = inputLowerCase[i]
       let num = letters.findIndex((element) => element === letter)
       encodedInput += alphabet[num]
}
}
return encodedInput 

  }
    if (!encode){
      for(let i = 0; i < inputLowerCase.length; i++){
        if(inputLowerCase[i] === " ") {
          encodedInput += inputLowerCase[i]
        } else {
        let letter = inputLowerCase[i]
        let num = alphabetSplit.findIndex((element)=> element === letter); 
        encodedInput += letters[num]
        }
      }
          return encodedInput

    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
