// decorators

// Injeta a versão da API dinâmicamente quando chamado
function apiVersion (version: string){
    return (target: any) => { 
        Object.assign(target.prototype, {__version: version})
    }
}

// Chamando decorator acima da classe Api
@apiVersion("1.10")
class Api{}

// Criando nova API
const api = new Api();

// Imprimindo propriedade injetada via decorator
console.log(api.__version);