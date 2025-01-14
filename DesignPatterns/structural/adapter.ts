interface Player {
    name: string;
    role: string;
    region: string;
  }
  
  interface ExternalPlayerData {
    playerName: string;
    position: string;
    server: string;
  }
  
  class PlayerAdapter implements Player {
    name: string;
    role: string;
    region: string;
  
    constructor(externalData: ExternalPlayerData) {
      this.name = externalData.playerName;
      this.role = this.mapRole(externalData.position);
      this.region = this.mapRegion(externalData.server);
    }
  
    private mapRole(position: string): string {
      const roleMap: { [key: string]: string } = {
        top: "Top",
        jungle: "Jungle",
        mid: "Mid",
        adc: "ADC",
        support: "Support",
      };
      return roleMap[position.toLowerCase()] || "Unknown";
    }
  
    // Método para mapear servidor para região
    private mapRegion(server: string): string {
      const regionMap: { [key: string]: string } = {
        "br1": "Brazil",
        "na1": "North America",
        "euw1": "Europe West",
        "kr": "Korea",
      };
      return regionMap[server.toLowerCase()] || "Unknown";
    }
  }
  
  // Dados externos simulados
  const externalPlayers: ExternalPlayerData[] = [
    { playerName: "Mylon", position: "top", server: "br1" },
    { playerName: "SirT", position: "jungle", server: "br1" },
    { playerName: "Kami", position: "mid", server: "br1" },
    { playerName: "brTT", position: "adc", server: "br1" },
    { playerName: "Dioud", position: "support", server: "br1" },
  ];
  
  // Adaptando os dados para o formato esperado
  const adaptedPlayers: Player[] = externalPlayers.map(
    (externalData) => new PlayerAdapter(externalData)
  );
  
  // Exibindo os jogadores adaptados
  console.log("Adapted Players:");
  adaptedPlayers.forEach((player) => {
    console.log(`${player.name} (${player.role}) - Region: ${player.region}`);
  });
  