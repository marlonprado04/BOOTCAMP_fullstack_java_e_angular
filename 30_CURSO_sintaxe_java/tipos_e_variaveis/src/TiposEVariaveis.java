public class TiposEVariaveis {
  public static void main(String[] args) {

    // String
    String meuNome = "Marlon";
    System.out.println("Meu nome é: " + meuNome);

    // Int
    int minhaIdade = 23;
    System.out.println("Minha idade é: " + minhaIdade);

    // Double
    double meuPeso = 75.5;
    System.out.println("Meu peso é: " + meuPeso);

    // Constantes
    final byte NUMERO_ESTADOS_BRASIL = 27;
    System.out.println("O número de estados do Brasil é: " + NUMERO_ESTADOS_BRASIL);


    // qual o resultado das expressoes abaixo?
    String concatenacao = "?";

    concatenacao = 1 + 1 + 1 + "1";

    System.out.println(concatenacao);

    concatenacao = 1 + "1" + 1 + 1;

    System.out.println(concatenacao);

    concatenacao = 1 + "1" + 1 + "1";

    System.out.println(concatenacao);

    concatenacao = "1" + 1 + 1 + 1;

    System.out.println(concatenacao);

    concatenacao = "1" + (1 + 1 + 1);
  }
}
