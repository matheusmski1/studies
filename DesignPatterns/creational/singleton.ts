import { FabricaDeAtirador, FabricaDeLutador, FabricaDeMago, FabricaMago } from "./abstractFactory";
import { Atirador, Lutador } from "./factory";

export class FabricaCentralizada {
    private static instancia: FabricaCentralizada;
  
    private fabricaMago: FabricaDeMago;
    private fabricaAtirador: FabricaDeAtirador;
    private fabricaLutador: FabricaDeLutador;
  
    private constructor() {
      // Instanciar as fábricas específicas uma única vez
      this.fabricaMago = new FabricaMago();
      this.fabricaAtirador = {
        criar: (nome: string) => new Atirador(nome),
      };
      this.fabricaLutador = {
        criar: (nome: string) => new Lutador(nome),
      };
    }
  
    // Método para obter a instância única
    static getInstancia(): FabricaCentralizada {
      if (!this.instancia) {
        this.instancia = new FabricaCentralizada();
      }
      return this.instancia;
    }
  
    // Métodos para acessar as fábricas específicas
    getFabricaMago(): FabricaDeMago {
      return this.fabricaMago;
    }
  
    getFabricaAtirador(): FabricaDeAtirador {
      return this.fabricaAtirador;
    }
  
    getFabricaLutador(): FabricaDeLutador {
      return this.fabricaLutador;
    }
  }
  