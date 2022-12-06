const Machine = require('../src/Machine');

describe('the vending machine', () => {
    //01. As a customer, I want to see that the vending machine has items, so that I can purchase them.
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        // exercise
        const actual = machine.seeSelections();
        // assert
        expect(actual).toEqual(expected);
    });

});
