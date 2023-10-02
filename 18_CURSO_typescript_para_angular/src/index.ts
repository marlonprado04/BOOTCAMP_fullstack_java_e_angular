// decorators

function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome
class Funcionario{
}
