import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = [];

  menuType:string = "admin";

  constructor() {
    this.produtos = ["banana",
      "maça",
      "laranja"]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push("Tequila")
  }

  remover(index:number) {
    this.produtos.splice(index, 1)
  }
}
