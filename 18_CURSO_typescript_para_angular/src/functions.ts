// Functions em TS não são tão diferentes de JS

// Mas em TS, podemos tipar os atributos e a saída
function addNumber(x:number, y:number): number{
    return x + y;
}

// Se formos associar essa função à uma variável, a variável precisa ser do tipo da saída da função
let soma : number = addNumber(4, 5);

console.log(soma);

// ----------------------------

// Funções multi tipos

// Em typescript também podemos adicionar um "or" no tipo

function CallToPhone(phone: number | string): number | string {
    return phone;
}

console.log(CallToPhone("11121"), CallToPhone(131313));

// ----------------------------

// async

// Funções async retornam promises, precisamos tipar o retorno da função de acordo

async function getDatabase(id: number): Promise<string>{
    return "Marlon";
}