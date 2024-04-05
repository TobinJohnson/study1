class Account {
    constructor(first, second) {
        this.firstName = first;
        this.secondName = second;
        var fullName = this.firstName + " " + this.secondName
        this.balance = 0;
        console.log(`Account for ${this.firstName} created`)
    }
    Deposit(amount) {
        if (amount > 0)
            this.balance = this.balance + amount
        console.log(`Amount of ${amount} is added to ${this.firstName}'s account`)
    }
    Withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount
            console.log(`Amount of ${amount} is withdrawn from ${this.firstName}'s account`)
        }
        else
            return "No sufficient funds"
    }
    BalanceCheck() {
        return `The balance in ${this.firstName}'s account  is  ${this.balance}`;
    }
    MoneyTransfer(amount, CreditAccount) {
        if (this.balance > amount && amount > 0) {
            this.balance -= amount
            CreditAccount.Deposit(amount)
            console.log(`Amount transferred from ${this.firstName}'s account`)
        }
        else
            console.log("InSufficient funds")
    }
}
const account1 = new Account("Tobin", "Johnson")
const account2 = new Account("Robin", "Johnson")
account1.Deposit(100)
console.log(account1.BalanceCheck())
account1.Withdraw(5)
console.log(account1.BalanceCheck())
account1.MoneyTransfer(20, account2)
console.log(account1.BalanceCheck())
console.log(account2.BalanceCheck())
console.log(account1)
console.log(account2)
