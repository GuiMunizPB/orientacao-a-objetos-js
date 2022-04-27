class BankAccount {
    constructor( agency, number, type) {
        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance;
    }

    withdraw(value) {
        if (value > this._balance) {
            return "Denied Operation"
        }
        this._balance = this._balance - value;

        return this._balance;
    }

    deposite(value) {
        this._balance = this._balance + value;
        return this._balance;
    }
}

class CurrentAccount extends BankAccount {
    constructor( agency, number, balance, creditCard) {
        super( agency, number, balance);
        this.type ='current';
        this._creditCard = creditCard;
    }

    get creditCard() {
        return this._creditCard
    }

    set creditCard(value) {
        this._creditCard = value;
    }
}

class SavingsAccount extends BankAccount{
    constructor( agency, number) {
        super( agency, number);
        this.type ='Savings';
    }
}

class UniversityAccount extends BankAccount {
    constructor( agency, number) {
        super( agency, number);
        this.type ='University';
    }

    withdraw(value) {
        if(value >500){
            return 'Denied Operation'
        }

        this._balance = this._balance - value;
    }
}