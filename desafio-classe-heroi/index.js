class Hero {
  #name;
  #age;
  #archetype;
  #attack;

  static #archetypeData = {
    warrior: "Sword Slash",
    mage: "Fireball",
    archer: "Arrow Shot",
    wizard: "Lightning Bolt",
    rogue: "Backstab"
  };

  constructor(name, age, archetype) {
    this.#name = name;
    this.#age = age;
   
 let sanitizedArchetype = archetype.toLowerCase()
    //Validation, asign archtype and attack
    if (Hero.#archetypeData[sanitizedArchetype]) {
       
      this.#archetype = sanitizedArchetype;
      this.#attack = Hero.#archetypeData[sanitizedArchetype];
    } else {
      throw new Error(`Unknown archetype: ${archetype}`);
    }
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  get archetype() {
    return this.#archetype;
  }

  get attackType() {
    return this.#attack;
  }

  attack() {
    console.log(`${this.#name}, class ${this.#archetype}, attacked using ${this.#attack}.`);
  }
}

const hero1 = new Hero("Beowaulf",34,"Warrior");
hero1.attack();
