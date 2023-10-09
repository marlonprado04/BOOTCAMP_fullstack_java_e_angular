import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

	// Inputando valor do nome
	@Input() nome:string = "";

  constructor() {
		console.log(`Construtor ${this.nome}`);
	}

	// Método OnInit que executa na criação do component
	ngOnInit(): void {
		console.log(`OnInit ${this.nome}`);
	}

	// Método OnChanges qie executa nas mudanças
	// É uma interface sendo implementada na classe
	ngOnChanges(): void {
		console.log(`OnChange ${this.nome}`);
	}

}
