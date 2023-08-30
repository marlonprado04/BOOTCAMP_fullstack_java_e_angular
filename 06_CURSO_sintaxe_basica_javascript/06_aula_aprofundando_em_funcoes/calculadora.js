// Calculadora com métodos nativos do JS

function calculadora() {
  // Variável para receber a operação
  const operacao = Number(
    prompt(
      "Digite a operação: \n\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação(**)"
    )
  );

  if (!operacao || operacao >= 7) {
    alert("Operação inválida");
    calculadora();
  } else {
    // Variáveis para armazenar valores e resultado
    let n1 = Number(prompt("Insira o 1º valor: "));
    let n2 = Number(prompt("Insira o 2º valor: "));
    let resultado;

    if (!n1 || !n2) {
      alert("Valores inválidos!");
      calculadora();
    } else {
      // Declarando funções de operação
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisao() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = Number(
          prompt("Deseja realizar uma nova operação? \n 1 - Sim \n 2 - Não")
        );

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Obrigado por usar a nossa calculadora!");
        } else {
          alert("Digite uma opção válida");
          novaOperacao();
        }
      }

      // Selecionando a operação de acordo com valor digitado
      switch (parseInt(operacao)) {
        case 1:
          soma();
          break;
        case 2:
          subtracao();
          break;
        case 3:
          multiplicacao();
          break;
        case 4:
          divisao();
          break;
        case 5:
          divisaoInteira();
          break;
        case 6:
          potenciacao();
          break;
        default:
          alert("Operação inválida");
          calculadora();
      }
    }
  }
}

calculadora();
