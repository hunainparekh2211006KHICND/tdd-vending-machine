const Machine = require('../src/Machine');

describe('the vending machine', () => {
    //01. As a customer, I want to see that the vending machine has items, so that I can purchase them.
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 75}];
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
        const UnexpectedItem = machine.selectItem(5);
        //assert
        expect(UnexpectedItem).toEqual(expected);
    });

    //05. As a customer, I want to see a message if my deposit is insufficient, so that I know to add more money.
    it('should return deposit is insufficient when I purchase something',()=>{
        //setup
        const machine = new Machine();
        const expected = "Your deposit is insufficient.  Please add Rs 20 for this item";
        //exercise
        machine.deposit(50);
        machine.deposit(20);
        machine.deposit(10);
        const myPurchase = machine.selectItem(0);
        //assert
        expect(myPurchase).toEqual(expected);
    });

    //06. As a customer, I want to receive change, so that I don’t pay more than the item costs.
    it('should be return change as per excepted amount',()=>{
        //setup
        const machine = new Machine();
        const expected = {item: 'crisps', change: [20, 10]};
        //exercise
        machine.deposit(100);
        machine.deposit(20);
        machine.deposit(10);
        const myPurchase = machine.selectItem(0);
        //assert
        expect(myPurchase).toEqual(expected);
    });

    //07. As a customer, I want to receive my money back when I push the cancel button, so that I can change my mind.
    it('should return my money if I change my mind',()=>{
        //setup
        const machine = new Machine();
        const expected = {change: [100, 20, 10]};
        //exercise
        machine.deposit(100);
        machine.deposit(20);
        machine.deposit(10);
        const cancelPurchase = machine.cancel();
        //assert
        expect(cancelPurchase).toEqual(expected);
    });

    //08. As a customer, I want to know if the vending machine can make change, so that I can cancel my choice if it can't make change.
    // I made changes in accutall list for unexpected change return from machine
    it('should return it able to change or not when I purchase something',()=>{
        //setup
        const machine = new Machine();
        const expected = "Cannot return proper change.  Please choose another item or cancel the transaction";
        //exercise
        machine.deposit(50);
        machine.deposit(20);
        machine.deposit(20);
        machine.deposit(10);
        const cancelPurchase = machine.selectItem(2);
        //assert
        expect(cancelPurchase).toEqual(expected);
    });
});
