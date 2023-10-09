import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{

  constructor() { }

	// Método OnInit que executa na criação do component
	ngOnInit(): void {
		console.log("hello hello")
	}


}
