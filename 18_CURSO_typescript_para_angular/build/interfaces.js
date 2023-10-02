"use strict";
//Interfaces são como types
// Criando um robo usando o type
let robo = {
    name: "Megamen",
    id: 1
};
// Criando um robo a partir da interface
let robo2 = {
    id: 1,
    name: "Pluto",
    sayHello() {
        return `Hello ${this.name}`;
    }
};
// Criando classe pessoa a partir da interface robot2
class Pessoa {
    // Criando método construtor da classe pessoa
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    // Criando método exigido pela interface
    sayHello() {
        return `Hello ${this.name}`;
    }
}
// Criando pessoa nova
const p = new Pessoa(1, "Marlon");
console.log(p.sayHello());
