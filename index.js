class Hero {
  constructor(name, xp, health) {
    this.name = name;
    this.xp = xp;
    this.health = health;
  }

  gainXp(amount) {
    this.xp += amount;
  }

  takeDamage(amount){
  this.health -= amount; //!this fucntion may recieve the attacker's xp or attack name or both as parameter
  }
  heal(amount){
    this.health += amount;  // add a maxhealth constraint ??
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


const beowulf = new Hero("Beowulf", 0, 100);

beowulf.gainXp(5100);
beowulf.takeDamage(50);
beowulf.heal(25);
console.log(beowulf.status());