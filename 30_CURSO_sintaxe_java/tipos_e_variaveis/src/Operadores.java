public class Operadores {

  public static void main(String[] args) {

    int numero = 5;

    // Número fica negativo na impressão
    System.out.println(-numero);

    // Número volta ao seu valor original
    System.out.println(numero);

    // Mudando o valor para o valor dele mesmo, negativo
    numero = -numero;

    // Número passou a ser negativo definitivamente
    System.out.println(numero);

    // Isso não faz o número ficar positivo, pois esse símbolo significa soma
    numero = +numero;
    System.out.println(numero);

    // Para mudar o número para positivo, precisamos multiplicar por -1

    numero = numero * -1;
    System.out.println(numero);

    //-------------------------------------

    // Incremento
    System.out.println(numero); // 5
    numero++; //6
    System.out.println(numero); //6

    // Decremento
    System.out.println(numero); //6
    numero--; //5
    System.out.println(numero);//5

    // Inversão / negação de boleano
    boolean boleana = true;
    System.out.println(boleana); // true
    System.out.println(!boleana); // false

    //----------------------
    
    // Exemplo de operador ternário
    
    // Variáveis
    int a, b;
    a = 5;
    b = 6;
    String resultado = "";

    // Se o a for igual ao b
    if(a==b){
      resultado = "verdadeiro";
    }else{
      resultado = "falso";
    }
    // Resultado
    System.out.println(resultado);

    // Ao invés disso, podemos 
    resultado = a==b ? "verdadeiro" : "falso";
    System.out.println(resultado);

  }

}
