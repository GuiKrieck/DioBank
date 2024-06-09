import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      let newBalance: number = this.getBalance()
      newBalance += value
      this.setBalance(newBalance)
      console.log(`Emprestimo realizado com sucesso!`)
    }
  }
}
