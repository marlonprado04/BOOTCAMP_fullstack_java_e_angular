import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit {

	quantidade: number = 0;

	constructor() { }

	adicionar() {
		this.quantidade += 1;
	}

	subtrair() {
		this.quantidade -= 1;
	}


	// checked -> content -> view


	// Faz a checagem
	ngDoCheck(): void {
		console.log(`ngDoCheck`)
	}

	// Inicia conteúdo
	ngAfterContentInit(): void {
		console.log(`ngAfterContentInit`)
	}

	// Inicia view após conteúdo
	ngAfterViewInit(): void {
		console.log(`ngAfterViewInit`)
	}

	// Após alteração, verifica o conteúdo
	ngAfterContentChecked(): void {
		console.log(`ngAfterContentChecked`)
	}

	// Após verificar conteúdo, verifica view
	ngAfterViewChecked(): void {
		console.log(`ngAfterViewChecked`)
	}

	ngOnInit(): void {
		console.log(`ngOnInit`)

	}

}
