const {caesar} = require("../src/caesar");
const expect = require ("chai").expect


describe("Rearranging an input to be shifted by the shift value", ()=> { 
     it("should return false if shift value is not present", ()=> {
           const input = "thinkful" 
           const shift = null
           const actual = caesar(input, null)
           expect(actual).to.be.false
   })
     it("should return false if shift value is equal to 0", ()=> {
    const input = "thinkful" 
    const shift = 0
    const actual = caesar(input, shift, true)
    expect(actual).to.be.false
})
    it("should return false if shift value is less than -25", ()=> {
  const input = "thinkful" 
  const shift = -30
  const actual = caesar(input, shift, true)
  expect(actual).to.be.false
})
    it("should return false if shift value is greater than 25", ()=> {
  const input = "thinkful" 
  const shift = 30
  const actual = caesar(input, shift, true)
  expect(actual).to.be.false
})
    it("should have spaces maintained as well as other symbols", ()=> {
           const input = "This is a secret message!"
           const shift = 8
           const actual = caesar(input, shift, true)
           const expected ='bpqa qa i amkzmb umaaiom!'
           expect(actual).to.eql(expected)     
           
         })
    it("should ignore capital letters", ()=> {
           const input = "BPQA qa I amkzmb umaaiom!"
           const shift = 8
           const actual = caesar(input, shift, false)
           const expected = "this is a secret message!"
          expect(actual).to.eql(expected)

         })
    it("should wrap around the alphabet", ()=> {
           const input = "z"
           const shift = 3
           const actual = caesar(input, shift, true)
           const expected = "c"
           expect(actual).to.eql(expected)
         })
})
  
