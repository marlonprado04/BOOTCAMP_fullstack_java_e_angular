public class Usuario {
  public static void main(String[] args) {

    // Criando nova smarttv
    SmartTv smartTv = new SmartTv();

    System.out.println("A TV está ligada? " + smartTv.ligada);
    System.out.println("Qual canal atual? " + smartTv.canal);
    System.out.println("Qual volume atual? " + smartTv.volume);

    // -----------------------------------

    smartTv.ligar();

    System.out.println("TV ligada (depois de ligar)? " + smartTv.ligada);

    // ----------------------------------

    smartTv.aumentarVolume();
    smartTv.aumentarVolume();
    smartTv.aumentarVolume();

    System.out.println("Novo volume (mais alto): " + smartTv.volume);

    // -------------------------------------

    smartTv.diminuirVolume();
    smartTv.diminuirVolume();
    smartTv.diminuirVolume();
    smartTv.diminuirVolume();
    smartTv.diminuirVolume();

    System.out.println("Novo volume (mais baixo): " + smartTv.volume);

    // ------------------------------------

    smartTv.aumentarCanal();
    smartTv.aumentarCanal();

    System.out.println("Canal aumentado para: " + smartTv.canal);

    // -----------------------------

    smartTv.diminuirCanal();
    smartTv.diminuirCanal();
    smartTv.diminuirCanal();
    smartTv.diminuirCanal();

    System.out.println("Canal diminuido para: " + smartTv.canal);

    // ------------------------

    smartTv.mudarCanal(50);
    System.out.println("Canal mudado para: " + smartTv.canal);

  }
}
