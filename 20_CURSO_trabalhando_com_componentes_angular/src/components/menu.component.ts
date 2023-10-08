// Importando component como contrato do angular core
import { Component } from '@angular/core';

// Criando decorator para criar component
@Component({
  // Declarando seletor para uso no HTML
  selector: "menu-component",
  // Declarando template do seletor
  template: "<h2> Marlon </h2>",
  // Declarando estilo do seletor
  styles: ["h2{color:blue}"],
})

// Exportando clsse após criar o component
export class MenuComponent {

}

