module.exports = class Machine {
    constructor() {
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        this.exceptedMoney = [10,20,50,100,500];
        this.deposit = 0;
    }
    seeSelections() {
        return this.items;
    }

    deposit(money){
        let excepted = this.exceptedMoney.find(x => x === money);
        if(excepted !== undefined){
            this.deposit+= excepted;
            return "You have deposited Rs "+this.deposit;
        }
        else{
            return "We are excepted money like 10,20,50,100 or 500";
        }
    }
};