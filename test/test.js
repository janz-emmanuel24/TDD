import { assert } from "chai";
import { multiply } from "../src/multiply";

describe('Testing the multiply function', () =>{
    it('Tests the return value of multiplying 3,5', () => {
        assert.equal(multiply(3,5), 15, 'The output is wrong')
    })

    it('Tests the return value of multiplying 2,2', () => {
        assert.equal(multiply(2,2), 4, 'The output of multiplying 2 * 2 is 4')
    })

    it('Tests the return value of multiplying 3,3', () => {
        assert.equal(multiply(3,3), 9, 'The output of multiplying 3 * 3 is wrong')
    })

    it('Tests the return value of multiplying 4,4', () => {
        assert.equal(multiply(4,4), 9, 'The output of multiplying 4 * 4 is wrong')
    })
})
