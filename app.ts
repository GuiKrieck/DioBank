import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

peopleAccount.deposit(20)
companyAccount.deposit(150)
companyAccount.getLoan(50)

peopleAccount.withdraw(5)
companyAccount.withdraw(200)

peopleAccount.getBalance()
companyAccount.getBalance()
