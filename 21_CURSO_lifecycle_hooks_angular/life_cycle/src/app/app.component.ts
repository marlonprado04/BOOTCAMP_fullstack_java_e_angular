import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life_cycle';

	// Propriedade para informar se componente filho está vivo ou não
	// Via atributo *ngIf do componente filho
	isAliveCheckSample:boolean = true;

	// Função para alterar variável que desabilita elemento
	// filho para false
	disposeCheckSample():void{
		this.isAliveCheckSample = false;
	}

}
