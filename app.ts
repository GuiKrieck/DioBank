import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const specialAccount: SpecialAccount = new SpecialAccount('Guilherme', 30)

console.log("------PEOPLE ACCOUNT------")
peopleAccount.deposit(20)
peopleAccount.withdraw(5)
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())
peopleAccount.getName()
console.log("")

console.log("------COMPANY ACCOUNT------")
companyAccount.deposit(150)
companyAccount.getLoan(50)
companyAccount.withdraw(200)
companyAccount.changeValidateStatus()
companyAccount.deposit(50)
companyAccount.getLoan(100)
console.log(companyAccount.getBalance())
console.log("")

console.log("------SPECIAL ACCOUNT------")
specialAccount.deposit(100)
specialAccount.withdraw(110)
console.log(specialAccount.getBalance())
specialAccount.getAccountNumber()