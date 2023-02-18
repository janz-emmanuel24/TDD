import { assert } from "chai";
import { multiply } from "../src/multiply";

describe('Testing the multiply function', () =>{
    it('Tests the return value of multiplying two numbers', () => {
        assert.equal(multiply(3,5), 15, 'The output is wrong')
    })
})
