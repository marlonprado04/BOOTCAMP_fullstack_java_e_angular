// Classes

class Character {
    name: string;
    stregth: number;
    skill: number;

    // Passing age as optional information
    age?:number

    // Constructor for create a class
    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    // Method to attack
    attack(): void {
        console.log(`Attack with ${this.stregth} points!`);
    }
}

// Create new character
const c1 = new Character("Marlon", 10, 4);

// Print character informations
console.log(c1);

// Print character attack
c1.attack();
