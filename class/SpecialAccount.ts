import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number) : void => {
        if (this.validateStatus()){
            const valueToAdd: number = 10;
            let newBalance: number = this.getBalance()
            newBalance += value + valueToAdd
            this.setBalance(newBalance)
            console.log(`Deposito Realizado com Sucesso!`)
        }
    }
}