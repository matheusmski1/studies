// Definindo a interface para Observer
interface Observer {
    update(event: { type: string; dragonType: string }): void;
  }
  
  class DragonEvent {
    private observers: Observer[] = []; // Lista de observers
  
    // Método para registrar um observer
    subscribe(observer: Observer): void {
      this.observers.push(observer);
    }
  
    // Método para remover um observer
    unsubscribe(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(event: { type: string; dragonType: string }): void {
      this.observers.forEach(observer => observer.update(event));
    }
  
    dragonDefeated(dragonType: string): void {
      console.log(`O dragão ${dragonType} foi derrotado!`);
      this.notify({ type: "DragonDefeated", dragonType });
    }
  }
  
  // Classe de jogador que reage aos eventos
  class Player implements Observer {
    constructor(private name: string) {}
  
    update(event: { type: string; dragonType: string }): void {
      if (event.type === "DragonDefeated") {
        console.log(`${this.name} foi notificado: O dragão ${event.dragonType} foi derrotado!`);
      }
    }
  }
  
  // Criando o evento de dragão e os jogadores
  const dragonEvent = new DragonEvent();
  
  const player1 = new Player("Ahri");
  const player2 = new Player("Yasuo");
  
  // Inscrevendo os jogadores no evento
  dragonEvent.subscribe(player1);
  dragonEvent.subscribe(player2);
  
  // Dragão é derrotado
  dragonEvent.dragonDefeated("Infernal");
  
  // Removendo um jogador e derrotando outro dragão
  dragonEvent.unsubscribe(player2);
  dragonEvent.dragonDefeated("Mountain");
  