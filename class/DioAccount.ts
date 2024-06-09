export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): void => {
    console.log(this.name)
  }

  getAccountNumber = ():void =>{
    console.log(this.accountNumber)
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Deposito realizado com sucesso!`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(this.balance >= value){
        this.balance -= value
        console.log(`Saque realizado com sucesso!`)
      }else {
        console.log('Saldo insuficiente para saque')
      }
    }
  }

  setBalance = (value:number): void => {
    this.balance = value
  }
  
  getBalance = (): number => {
    return this.balance
  }


  changeValidateStatus = ():void =>{
    this.status = !this.status;
  } 
  
  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    console.log('Conta inválida, entre em contato com o banco')
    return false
  }
}
