import { Component, OnInit } from '@angular/core';

import { Store } from "@ngxs/store";
import { PanierState } from "../../../../shared/states/panier-state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  compteurPanier: number = 0;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(state => state.panier.panier)
      .subscribe(val => this.compteurPanier = val.length);
  }

}