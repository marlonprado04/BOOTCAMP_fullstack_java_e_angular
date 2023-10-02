"use strict";
// Classes
class Character {
    // Constructor for create a class
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    // Methor to attack
    attack() {
        console.log(`Attack with ${this.stregth} points!`);
    }
}
// Create new character
const c1 = new Character("Marlon", 10, 4);
// Print character informations
console.log(c1);
// Print character attack
c1.attack();
