class Champion {
    name: string = "Unknown";
    role: string = "Unknown";
    player: string = "Unknown";
  
    details(): string {
      return `${this.name} (${this.role}) - Played by ${this.player}`;
    }
  }
  
  class ChampionBuilder {
    private champion: Champion;
  
    constructor() {
      this.champion = new Champion();
    }
  
    setName(name: string): ChampionBuilder {
      this.champion.name = name;
      return this; // Permite construção fluente
    }
  
    setRole(role: string): ChampionBuilder {
      this.champion.role = role;
      return this;
    }
  
    setPlayer(player: string): ChampionBuilder {
      this.champion.player = player;
      return this;
    }
  
    build(): Champion {
      return this.champion;
    }
  }
  
  class Team {
    name: string;
    members: Champion[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    addMember(champion: Champion): void {
      this.members.push(champion);
    }
  
    showTeam(): void {
      console.log(`${this.name} Team Composition:`);
      this.members.forEach((member, index) => {
        console.log(`${index + 1}. ${member.details()}`);
      });
    }
  }
  
  class TeamDirector {
    private builder: ChampionBuilder;
  
    constructor(builder: ChampionBuilder) {
      this.builder = builder;
    }
  
    buildIconicPainGamingTeam(): Team {
      const team = new Team("Pain Gaming - 2015");
      team.addMember(
        this.builder
          .setName("Gnar")
          .setRole("Top")
          .setPlayer("Mylon")
          .build()
      );
      team.addMember(
        this.builder
          .setName("Rek'Sai")
          .setRole("Jungle")
          .setPlayer("SirT")
          .build()
      );
      team.addMember(
        this.builder
          .setName("Orianna")
          .setRole("Mid")
          .setPlayer("Kami")
          .build()
      );
      team.addMember(
        this.builder
          .setName("Draven")
          .setRole("ADC")
          .setPlayer("brTT")
          .build()
      );
      team.addMember(
        this.builder
          .setName("Thresh")
          .setRole("Support")
          .setPlayer("Dioud")
          .build()
      );
      return team;
    }
  }
  
  const builder = new ChampionBuilder();
  const director = new TeamDirector(builder);
  
  console.log("Building Pain Gaming's Iconic Team (2015):");
  const iconicTeam = director.buildIconicPainGamingTeam();
  iconicTeam.showTeam();
  