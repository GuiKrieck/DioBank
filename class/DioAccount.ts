export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
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

  getBalance = (): void => {
    console.log(this.balance)
  }


  changeValidateStatus = ():void =>{
    this.status = !this.status;
  } 
  
  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida, entre em contato com o banco')
  }
}
