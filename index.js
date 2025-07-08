class Hero {
  constructor(name, xp, health) {
    this.name = name;
    this.xp = xp;
    this.health = health;
  }

  gainXp(amount) {
    this.xp += amount;
  }

  
  get level() {
    if (this.xp < 1000) return "Iron";
    if (this.xp < 2000) return "Bronze";
    if (this.xp < 5000) return "Silver";
    if (this.xp < 8000) return "Gold";
    if (this.xp < 9000) return "Diamond";
    if (this.xp < 10000) return "Rising";
    if (this.xp <= 10000) return "Immortal";
    return "Effulgent";
  }

  status() {
    return `${this.name} | XP: ${this.xp} | Health: ${this.health} | Level: ${this.level}`;
  }
}

// Usage example
const beowulf = new Hero("Beowulf", 0, 100);

beowulf.gainXp(5100);
console.log(beowulf.status());