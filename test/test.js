import { assert } from "chai";
import { multiply } from "../src/multiply";

describe('Testing the multiply function', () =>{
    it('Tests the return value of multiplying 3,5', () => {
        assert.equal(multiply(3,5), 15, 'The output is wrong')
    })

    it('Tests the return value of multiplying 2,2', () => {
        assert.equal(multiply(2,2), 4, 'The output of multiplying 2 * 2 is 4')
    })
})
