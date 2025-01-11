import { FabricaDeCampeoes} from "./abstractFactory";
import { FabricaCentralizada } from "./singleton";

export type FuncaoCampeao = "Mago" | "Atirador" | "Lutador";

export interface Campeao {
  nome: string;
  funcao: FuncaoCampeao; // Função do Campeão (Mago, Atirador, etc)
  habilidade(): string;
}

// Princípio da Responsabilidade Única (SRP - Single Responsibility Principle):
// Cada classe representa **um tipo específico de campeão** e é responsável 
// apenas por definir os atributos e o comportamento associado a essa função.
// Exemplo: a classe `Mago` apenas define o comportamento de um mago.
export class Mago implements Campeao {
  nome: string;
  funcao: FuncaoCampeao = "Mago"; // Responsabilidade: Definir a função do campeão como "Mago".

  constructor(nome: string) {
    this.nome = nome; // Responsabilidade: Configurar o nome do campeão.
  }

  habilidade(): string {
    return `${this.nome} conjura um feitiço poderoso!`; // Responsabilidade: Definir o que acontece ao usar uma habilidade.
  }
}

// A mesma aplicação do SRP se aplica às classes Atirador e Lutador:
export class Atirador implements Campeao {
  nome: string;
  funcao: FuncaoCampeao = "Atirador";

  constructor(nome: string) {
    this.nome = nome;
  }

  habilidade(): string {
    return `${this.nome} dispara um tiro preciso à distância!`;
  }
}

export class Lutador implements Campeao {
  nome: string;
  funcao: FuncaoCampeao = "Lutador";

  constructor(nome: string) {
    this.nome = nome;
  }

  habilidade(): string {
    return `${this.nome} salta na batalha com força bruta!`;
  }
}

// Princípio da Aberto/Fechado (OCP - Open/Closed Principle):
// A classe FabricaDeCampeoes está **aberta para extensão** (podemos adicionar novos campeões criando novas classes)
// e **fechada para modificação** (não precisamos alterar o código da fábrica para os campeões existentes).
class FabricaCampeoes implements FabricaDeCampeoes {
  private fabricaCentralizada: FabricaCentralizada;

  constructor() {
    this.fabricaCentralizada = FabricaCentralizada.getInstancia();
  }

  criarCampeao(funcao: FuncaoCampeao, nome: string): Campeao {
    const fabrica = this.fabricaCentralizada[`getFabrica${funcao}`]();

    if (!fabrica) {
      throw new Error(`Função ${funcao} não é suportada.`);
    }

    return fabrica.criar(nome); 
  }
}

// Princípio da Substituição de Liskov (LSP - Liskov Substitution Principle):
// Pode substituir uma instância de uma classe concreta (Mago, Atirador, Lutador) por outra classe concreta que implementa a mesma interface Campeao.
// Exemplo no código: Todas as classes de campeão implementam o método `habilidade()`, garantindo o mesmo contrato.

// Princípio da Segregação de Interface (ISP - Interface Segregation Principle):
// A interface `Campeao` define apenas os métodos necessários para um campeão funcionar no sistema:
// `nome`, `funcao` e `habilidade`. Não força nenhuma classe a implementar métodos desnecessários.

// Princípio da Inversão de Dependência (DIP - Dependency Inversion Principle):
// O método `criarCampeao` da classe FabricaDeCampeoes depende da abstração `Campeao` e não 
// das implementações concretas (Mago, Atirador, Lutador). Assim, o sistema é mais flexível e desacoplado.

// Exemplo de uso:
const fabricaCampeoes = new FabricaCampeoes()

const mago = fabricaCampeoes.criarCampeao("Mago", "Lux");
const atirador = fabricaCampeoes.criarCampeao("Atirador", "Caitlyn");
const lutador = fabricaCampeoes.criarCampeao("Lutador", "Darius");

console.log(mago.habilidade()); // Lux conjura um feitiço poderoso!
console.log(atirador.habilidade()); // Caitlyn dispara um tiro preciso à distância!
console.log(lutador.habilidade()); // Darius salta na batalha com força bruta!
