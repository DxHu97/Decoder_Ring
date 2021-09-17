// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || shift === null) return false;
    if (encode === false) shift *= -1
    let inputLowerCase = input.toLowerCase();
    let result = [...inputLowerCase].map((letter) => {
      let charNum = letter.charCodeAt();
      if (charNum < 97 || charNum > 122) return String.fromCharCode(charNum);
      let shiftedNum = charNum + shift;
      if (shiftedNum < 97) shiftedNum += 26;
      if (shiftedNum > 122) shiftedNum -= 26;
      return String.fromCharCode(shiftedNum);
    });
    return result.join("");
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
