abstract class Campeao {
    protected habilidade: Habilidade;
  
    constructor(habilidade: Habilidade) {
      this.habilidade = habilidade;
    }
  
    abstract realizarHabilidade(): void;
  }
  
  // Implementação Concreta de um Campeão
  class CampeaoComHabilidade extends Campeao {
    constructor(habilidade: Habilidade) {
      super(habilidade);
    }
  
    realizarHabilidade(): void {
      console.log(`Campeão realiza habilidade: ${this.habilidade.usarHabilidade()}`);
    }
  }
  
  interface Habilidade {
    usarHabilidade(): string;
  }
  
  class HabilidadeFlash implements Habilidade {
    usarHabilidade(): string {
      return "Flash: Teleporta uma curta distância.";
    }
  }
  
  class HabilidadeCura implements Habilidade {
    usarHabilidade(): string {
      return "Cura: Restaura a saúde de si mesmo ou de um aliado.";
    }
  }
  
  class HabilidadeUltimativa implements Habilidade {
    usarHabilidade(): string {
      return "Ultimativa: Causa dano em área muito poderoso.";
    }
  }
  
  const habilidadeFlash = new HabilidadeFlash();
  const habilidadeCura = new HabilidadeCura();
  const habilidadeUltimativa = new HabilidadeUltimativa();
  
  // Campeões com habilidades diferentes
  const campeao1 = new CampeaoComHabilidade(habilidadeFlash);
  const campeao2 = new CampeaoComHabilidade(habilidadeCura);
  const campeao3 = new CampeaoComHabilidade(habilidadeUltimativa);
  
  console.log("Testando o padrão Bridge com Campeões e Habilidades:");
  campeao1.realizarHabilidade();  // Campeão com Flash
  campeao2.realizarHabilidade();  // Campeão com Cura
  campeao3.realizarHabilidade();  // Campeão com Ultimativa
  