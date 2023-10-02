//Interfaces são como types

// Criando tipo robot
type robot ={ 
    readonly name: string | number;
    id:number;
}

// Criando um robo usando o type
let robo: robot = { 
    name:"Megamen",
    id:1
}

// Criando uma interface robot
interface robot2 {
    id: number;
    name:string;
}

// Criando um robo a partir da interface
let robo2: robot2 = {
    id:1,
    name:"Pluto"
}




