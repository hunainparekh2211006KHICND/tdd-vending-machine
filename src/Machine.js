module.exports = class Machine {
    constructor() {
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        this.exceptedMoney = [10,20,50,100,500];
        this.money = 0;
    }
    seeSelections() {
        return this.items;
    }

    deposit(money){
        let excepted = this.exceptedMoney.find(x => x === money);
        if(excepted !== undefined){
            this.money+= excepted;
            return "You have deposited Rs "+this.money;
        }
        else{
            return "We are excepted money like 10,20,50,100 or 500";
        }
    }

    selectItem(code){
        let expectedItem = this.items.find(key => key.hasOwnProperty(code));
        if(expectedItem === undefined){
            return "The item you selected is unavailable";
        }
    }
};