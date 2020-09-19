import { compute } from "./compute";

describe('compute', () => {
    // define as many tests as there are execution paths for all methods of the component
    // a test or spec is defined by it() function
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        // assert that result is zero
        expect(result).toBe(0);
     });
    it('should return number incremented by 1 if input is positive', () => {
        const result = compute(4);

        expect(result).toBe(5);
     })

});