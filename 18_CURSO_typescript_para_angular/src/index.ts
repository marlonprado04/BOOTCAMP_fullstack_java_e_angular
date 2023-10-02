// decorators

// Injeta a versão da API dinâmicamente quando chamado
function apiVersion (version: string){
    return (target: any) => { 
        Object.assign(target.prototype, {__version: version})
    }
}

function minLength(length:number){
    return (target:any, key:string) => {
        console.log(target[key]);
    }
}

// Chamando decorator acima da classe Api
@apiVersion("1.10")
class Api{
    @minLength(3)
    name:string;

    constructor(name:string){
        this.name = name;
    }
}

// Criando nova API
const api = new Api("Produtos");

// Imprimindo propriedade injetada via decorator
console.log(api.name);