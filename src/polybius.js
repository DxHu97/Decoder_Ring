// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const coordinate = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    if (!encode) {
      const array = Array.from(input.toLowerCase());

      if (input.split(" ").join("").length % 2 !== 0) return false;
      //returns false if number of characters is not even
      else {
        const decodeArray = [];
        for (let i = 0; i < array.length; i++) {
          const iArray = array[i];
          if (iArray === " ") decodeArray.push(iArray);
          //if the iteration is a space, push it into the array as is
          else {
            const numToLetter = {};

            for (let letter in coordinate) {
              const num = coordinate[letter];
              if (numToLetter[num]) {
                numToLetter[num] = `(${numToLetter[num]}/${letter})`; //i/j
              } else {
                numToLetter[num] = letter;
              }
            }
            console.log(array);
            const totalNum = iArray + array[i + 1]; //Numbers are two digits so
            i += 1; //skip a number before repeating iteration
            decodeArray.push(numToLetter[totalNum]);
          }
        }
        return decodeArray.join("");
      }
    }
    if (encode) {
      const array = Array.from(input.toLowerCase());

      return array
        .map((char) => {
          if (char === " ") {
            return char; //returns spaces
          } else {
            return coordinate[char];
          }
        })
        .join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };