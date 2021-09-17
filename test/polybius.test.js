// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius test", () => {
  it("should ignore additional symbols and only include spaces and letters", () => {
    const actual = polybius("Hello world!")
    const expected = '3251131343 2543241341'
    expect(actual).to.eql(expected)
  })
  it("should still be a string during encoding", () => {
    const actual = polybius("thinkful")
    const expected = "4432423352125413"
    expect(actual).to.eql(expected)
  })
  it("should have an even number of characters excluding spaces during decoding otherwise return false", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false
  })
  it("should maintain spaces", () => {
    const actual = polybius("Hello world")
    const expected = '3251131343 2543241341'
    expect(actual).to.eql(expected)
  })
  it("should ignore capital letters", () => {
    const actual = polybius("Thinkful")
    const expected = "4432423352125413"
    expect(actual).to.eql(expected)
  })
  it("should display I/J during decoding", () => {
    const actual = polybius("4432423352125413", false)
    const expected = "th(i/j)nkful"
    expect(actual).to.eql(expected)
  })
    it("should convert I/J to 42 during encoding", () => {
    const actual = polybius("thjnkful")
    const expected = "4432423352125413"
    expect(actual).to.eql(expected)
  })
})
