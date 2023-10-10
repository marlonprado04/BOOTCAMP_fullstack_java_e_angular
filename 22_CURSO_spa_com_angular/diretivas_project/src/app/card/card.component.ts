import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = [];

  constructor() {
    this.produtos = ["banana",
      "maça",
      "laranja"]
  }

  ngOnInit(): void {
  }

}
