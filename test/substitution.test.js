// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect

describe("substitution test", () => {
  it("should include spaces, letters, and special characters for input", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
    const expected = "message"
      expect(actual).to.eql(expected)
  })
    it("should maintain spaces", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'elp xhm xf mbymwwmfj dne'
      expect(actual).to.eql(expected)
  })
    it("should ignore capital letters", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'elp xhm xf mbymwwmfj dne'
      expect(actual).to.eql(expected)
  })
    it("should have an alphabet parameter that must be a string of exactly 26 characters, otherwise return false", () => {
    const actual = substitution("thinkful", "short")
      expect(actual).to.be.false
  })
    it("should have unique characters in alphabet parameter, otherwise return false", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
      expect(actual).to.be.false
  })
})