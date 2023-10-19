public class MinhaClasse {
  public static void main(String[] args) {
    // Chamando método para juntar nomes e atribuindo à variável nome
    String nome = nomeCompleto("Marlon", "Prado");

    // Imprimindo variável nome
    System.out.println(nome);
  }

  // Método para juntar nomes
  public static String nomeCompleto(String primeiroNome, String segundoNome) {
    return primeiroNome.concat(" ").concat(segundoNome);
  }
}
