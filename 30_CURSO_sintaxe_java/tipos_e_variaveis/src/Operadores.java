public class Operadores {

  public static void main (String[] args){

    int numero = 5;

    // Número fica negativo na impressão
    System.out.println(- numero); 

    // Número volta ao seu valor original
    System.out.println(numero); 

    // Mudando o valor para o valor dele mesmo, negativo
    numero = - numero; 
    
    // Número passou a ser negativo definitivamente
    System.out.println(numero);

    // Isso não faz o número ficar positivo, pois esse símbolo significa soma
    numero = + numero;
    System.out.println(numero);

    // Para mudar o número para positivo, precisamos multiplicar por -1

    numero = numero * -1;
    System.out.println(numero);
  }
  
}
