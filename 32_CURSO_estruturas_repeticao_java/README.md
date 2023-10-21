# Estruturas de Repetição em Java

## Índice

- [Estruturas de Repetição em Java](#estruturas-de-repetição-em-java)
  - [Índice](#índice)
  - [Antes de começar](#antes-de-começar)
  - [Estruturas de repetição](#estruturas-de-repetição)
    - [For](#for)
    - [For em Arrays](#for-em-arrays)
    - [Break e Continue](#break-e-continue)
    - [While](#while)
    - [Do while](#do-while)
  - [Referências, links e materiais de apoio](#referências-links-e-materiais-de-apoio)

## Antes de começar

- [x]  Criar pasta referente ao curso
- [x]  Adicionar link da pasta nos atributos do curso
- [x]  Adicionar arquivos e links adicionais ao repositório (pdf, pptx, etc)

## Estruturas de repetição

Laços de repetição, também conhecidos como laços de iteração ou simplesmente loops, são comandos que permitem iteração de código, ou seja, que comandos presentes no bloco sejam repetidos diversas vezes.

### For

O comando **`for`** (na tradução literal para a língua portuguesa “para”) permite que uma variável contadora, seja testada e incrementada a cada iteração, sendo essas informações definidas na chamada do comando. O comando **for** recebe como entrada uma variável contadora, a condição para continuar a execução e o valor de incrementação.

```java
//estrutura do controle de fluxo for

for (bloco de inicialização; expressão booleana de validação; bloco de atualização)
{
     // comando que será executado até que a 
     // expressão de validação torne-se falsa 
}
```

Vamos imaginar que Joãozinho precisa contar 20 carneiros antes de dormir:

- Exemplo

    ```java
    // ExemploFor.java
    public class ExemploFor {
     public static void main(String[] args) {
      for(int carneirinhos = 1 ; carneirinhos <=20; carneirinhos ++) {
       System.out.println(carneirinhos + " - Carneirinho(s)");
      }
     }
    }
    ```

- **For position**

    1. 1.int carneirinhos = 1`;` -> O programa entende que a variável carneirinhos, começa com o valor igual a 1 e isso acontece somente uma vez;
    2. 2.carneirinhos `< = 20;` -> O programa verifica se a variável carneirinhos, ainda é menor que 20;
    3. 3.O programa começa a executar o algoritmo, no nosso caso, imprimir a quantidade de carneirinhos em contagem;
    4. 4.carneirinhos `++` -> O programa aumenta em mais 1, o valor da variável carneirinhos;
    5. 5.O fluxo é finalizado, quando a variável carneirinhos for igual a 20.

- Exemplo

    ```java
    // Outras estruturas
    
    //estrutura 1
    for(int carneirinhos = 1 ; carneirinhos <=20; carneirinhos ++) {
         System.out.println(carneirinhos + " - Carneirinho(s)");
    }
    
    //estrutura 2
    //o que importa é somente o bloco condicional
    int carneirinhos = 1;
    for( ; carneirinhos <=20; ) {
         System.out.println(carneirinhos + " - Carneirinho(s)");
         carneirinhos ++;
    }
    
    //for( somente 1x ; deve ser uma expresão boolean; acontecerá a cada final da execução ) { }
    ```

### For em Arrays

Também usamos o controle de fluxo **`for`** , para interagir sobre arrays e coleções:

- Exemplo

    ```java
    // ExemploFor.java
    public class ExemploFor {
    public static void main(String[] args) {
     String alunos[] = { "FELIPE", "JONAS", "JULIA", "MARCOS" };
    
     for (int x=0; x<alunos.length; x++) {
      System.out.println("O aluno no indice x=" + x + " é " + alunos[x]);
     }
    
    }
    }
    ```

Também podemos usar o ForEach.

O uso do **`for / each`** está fortemente relacionado, com um cenário onde contenha um array ou coleção, e assim , a interação é baseada nos elementos da coleção.

- Exemplo

    ```java
    // ExemploFor.java
    public class ExemploFor {
    public static void main(String[] args) {
     String alunos [] =  {"FELIPE","JONAS","JULIA","MARCOS"};
     
            //Forma abreviada
     for(String aluno : alunos) {
       System.out.println(alunos);
     }
    
    }
    }
    ```

### Break e Continue

**Break** significa quebrar, parar, frear, interromper. E é isso que se faz, quando o Java encontra esse comando pela frente. **Continue**, como o nome diz, ele 'continua' o laço. O comando **`break`** interrompe o laço, já o **`continue`** interrompe somente a iteração atual.

- Exemplo

    ```java
    // class ExemploBreakContinue.java
    public class ExemploBreakContinue {
     public static void main(String[] args) {
     
     for(int numero = 1; numero <=5; numero ++){
      if(numero==3)
       break;
      
      System.out.println(numero);
      
     }
     //Qual a saída no console ?
    
        }
    }
    ```

- Exemplo 2

    ```java
    // class ExemploBreakContinue.java
    public class ExemploBreakContinue {
     public static void main(String[] args) {
     
     for(int numero = 1; numero <=5; numero ++){
      if(numero==3)
       continue;
      
      System.out.println(numero);
      
     }
     //Qual a saída no console ?
    
        }
    }
    
    ```

### While

O laço **`while`** (na tradução literal para a língua portuguesa “enquanto”) determina que, enquanto uma condição for válida, o bloco de código será executado. O laço **`while`**, testa a condição antes de executar o código, logo, caso a condição seja inválida no primeiro teste o bloco nem será executado.

A estrutura é:

- Exemplo

    ```java
    //estrutura do controle de fluxo while
    
    while (expressão booleana de validação)
    {
         // comando que será executado até que a 
         // expressão de validação torne-se falsa 
    }
    ```

Pegando o exemplo:

Joãozinho recebeu R$ 50,00 de mesada e foi em uma loja de doces gastar todo o seu dinheiro, logo, enquanto o valor dos doces não igualar a R$ 50,00 ele foi adicionando itens no carrinho.

O código seria:

- Código

    ```java
    // ExemploWhile.java
    import java.util.concurrent.ThreadLocalRandom;
    public class ExemploWhile {
    public static void main(String[] args) {
     double mesada = 50.0;
            while(mesada>0) {
                Double valorDoce = valorAleatorio();
                if(valorDoce > mesada)
                    valorDoce = mesada;
    
                System.out.println("Doce do valor: " + valorDoce + " Adicionado no carrinho");
                mesada = mesada - valorDoce;
            }
            System.out.println("Mesada:" + mesada);
            System.out.println("Joãozinho gastou toda a sua mesada em doces");
            
            /*
            * Não se preocupe quanto a formatação de valores
            * Iremos explorar os recursos de formatação em breve !!
            */
       }
       private static double valorAleatorio() {
     return ThreadLocalRandom.current().nextDouble(2, 8);
       }
    }
    ```

### Do while

O laço **`do / while`** (na tradução literal para a língua portuguesa “faça…enquanto”), assim como o laço while, considera que, enquanto uma determinada condição for válida, o bloco de código será executado. Entretanto, **`do / while`** testa a condição após executar o código, sendo assim, mesmo que a condição seja considerada inválida, no primeiro teste o bloco será executado pelo menos uma vez.

A estrutura de sintaxe do controle de repetição **`do / while`** é exibida abaixo:

- Exemplo

    ```java
    //estrutura do controle de fluxo do while
    
    do
    {
    // comando que será executado até que a
    // expressão de validação torne-se falsa
    }
    while (expressão booleana de validação);
    ```

Joãozinho resolveu ligar para o seu amigo, dizendo que hoje se entupiu de comer docinhos:

- Exemplo

    ```java
    // ExemploDoWhile.java
    
    import java.util.Random;
    public class ExemploDoWhile {
    public static void main(String[] args) {
     public static void main(String[] args) {
      System.out.println("Discando...");
      
      do {
       //excutando repetidas vezes até alguém atender
       System.out.println("Telefone tocando");
      
      }while(tocando());
      
      System.out.println("Alô !!!");
     }
     private static boolean tocando() {
      boolean atendeu = new Random().nextInt(3)==1;
      System.out.println("Atendeu? " + atendeu);
      //negando o ato de continuar tocando
      return ! atendeu;
     }
    }
    ```

## Referências, links e materiais de apoio

A apresentação utilizada no curso está disponível abaixo:

[04 - DIO - Trilha - Java Básico - Controle de Fluxo - Introdução.pptx.pdf](./for_readme/04_-_DIO_-_Trilha_-_Java_Bsico_-_Controle_de_Fluxo_-_Introduo.pptx.pdf)

Todo código desenvolvido pelo professor em aula está disponível [neste link](https://github.com/digitalinnovationone/trilha-java-basico)
