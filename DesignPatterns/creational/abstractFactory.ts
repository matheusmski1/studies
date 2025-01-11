import {Atirador, Campeao, FuncaoCampeao, Lutador, Mago} from './factory'

export interface  FabricaDeCampeoes {
   criarCampeao(tipo: FuncaoCampeao, nome: string): Campeao;
  }

export interface FabricaDeMago {
    criar(nome: string): Campeao;
  }

export interface FabricaDeAtirador {
    criar(nome: string): Campeao;
  }
export interface FabricaDeLutador {
    criar(nome: string): Campeao;
  }

export class FabricaMago implements FabricaDeMago{
    criar(nome: string): Campeao {
        return new Mago(nome)
    }
}

export class FabricaAtirador implements FabricaDeAtirador{
    criar(nome: string): Campeao {
      return new Atirador(nome)
  }
}

export class FabricaLutador implements FabricaDeLutador{
    criar(nome: string): Campeao {
      return new Lutador(nome)
  }
}


const fabricaMago = new FabricaMago()
const mago = fabricaMago.criar("Orianna")