// Tipos de função

// Função declarativa

function funcao() {
  console.log("Sou uma mensagem de função declarativa.");
}

funcao()

// ----------------------

// Expressão de função

var funcao = function funcao (){
  console.log("Sou uma mensagem de função de expressão nomeada");
}

funcao();

var funcao = function (){
  console.log("Sou uma mensagem de função de expressão não nomeada");
}

funcao();

// ------------------

// Arrow function

var funcao = () => { 
  console.log("Sou uma arrow function");
}

funcao();