// decorators

// Função decorator minLength que verifica o comprimento mínimo da propriedade
function minLength(length: number) {
    return (target: any, key: string) => {
        // Armazena o valor original da propriedade em _value
        let _value = target[key];

        // Define um getter personalizado que retorna o valor armazenado em _value
        const getter = () => _value;

        // Define um setter personalizado que verifica o comprimento mínimo
        const setter = (value: string) => {
            if (value.length < length) {
                // Lança um erro se o comprimento do valor for menor que o especificado
                throw new Error(`Tamanho menor do que ${length}.`);
            } else {
                // Caso contrário, atualiza o valor em _value
                _value = value;
            };
        };

        // Substitui a definição da propriedade original com getter e setter personalizados
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
};

// Aplicando o decorator apiVersion à classe Api
class Api {
    // Aplicando o decorator minLength à propriedade name da classe Api
    @minLength(3)
    name: string;

    constructor(name: string) {
        // Inicializa a propriedade name com o valor passado no construtor
        this.name = name;
    }
}

// Criando nova API
const api = new Api("Produtos");

console.log(api.name);
