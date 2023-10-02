//Interfaces são como types

// Criando tipo robot
type robot = {
    readonly name: string | number;
    id: number;
}

// Criando uma interface robot
interface robot2 {
    id: number;
    name: string;
    sayHello(): string;
}


// Criando um robo usando o type
let robo: robot = {
    name: "Megamen",
    id: 1
}



// Criando um robo a partir da interface
let robo2: robot2 = {
    id: 1,
    name: "Pluto",

    sayHello(): string {
        return `Hello ${this.name}`
    }
}

// Criando classe pessoa a partir da interface robot2
class Pessoa implements robot2 {
    id: number;
    name: string;

    // Criando método construtor da classe pessoa
    constructor(id:number, name:string){
        this.name = name;
        this.id = id;
    }

    // Criando método exigido pela interface
    sayHello(): string {
        return `Hello ${this.name}`
    }

}

// Criando pessoa nova
const p = new Pessoa(1, "Marlon");
console.log(p.sayHello());

