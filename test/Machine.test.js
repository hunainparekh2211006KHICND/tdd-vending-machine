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

    //02. As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
    it('should return how much money I deposited',()=>{
        //setup
        const machine = new Machine();
        const expected = "You have deposited Rs 100";
        //exercise
        const myDepositMoney = machine.deposit(100);
        //assert
        expect(myDepositMoney).toEqual(expected);
    });

    //03. As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
    it('should return the total amount of i deposited when I add additional money',()=>{
        //setup
        const machine = new Machine();
        const expected = "You have deposited Rs 150";
        //exercise
        machine.deposit(100);
        const myDepositMoney = machine.deposit(50);
        //assert
        expect(myDepositMoney).toEqual(expected);
    });

    //04. As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
    it('should return unavailable when I make another choice',()=>{
        //setup
        const machine = new Machine();
        const expected = "The item you selected is unavailable";
        //exercise
        const UnexpectedItem = machine.selectItem('colddrink');
        //assert
        expect(UnexpectedItem).toEqual(expected);
    });

});
