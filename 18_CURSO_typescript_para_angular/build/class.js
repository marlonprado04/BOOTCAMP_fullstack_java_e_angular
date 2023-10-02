"use strict";
// Classes
class Character {
    // Constructor for create a class
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    // Method to attack
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
//----------------------------------------------
// Subclass
// On creation of subclass:
// Character: superclass
// Magician: subclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        // Calling super to invoke the parent class's constructor and pass values 
        super(name, stregth, skill);
        // Pass magicpoint to attribute of class
        this.magicPoints = magicPoints;
        // Trying acess parents class attributes according with data modifiers
        //this.name; // Dont work because is private
        this.stregth; // Its work because is protected
        this.skill; // Its work because is protected
    }
}
// Create new character magician
const c2 = new Magician("Gandalf", 110, 60, 80);
