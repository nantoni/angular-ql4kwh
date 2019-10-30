import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { ProduitService } from "../../produit.service";
import { Produit } from "./../../models/produit";

import { Store } from "@ngxs/store";
import { PanierState } from "../../../../shared/states/panier-state";
import { AddProduit } from "../../../../shared/actions/addProduit-action";

@Component({
  selector: "app-liste",
  templateUrl: "./liste.component.html",
  styleUrls: ["./liste.component.css"]
})
export class ListeComponent implements OnInit {
  produits: Produit[] = [];

  @Input() filter: string;

  constructor(private store: Store,private produitService: ProduitService) {}

  ngOnInit() {
    this.produitService.getProduits().subscribe(val => (this.produits = val));
  }

  log(val) {
    console.log(val);
  }

  addProduit(produit: Produit) {
    this.store.dispatch(
      new AddProduit({
        produit
      })
    );
  }

  onProduitClick(produit: Produit) {
    this.addProduit(produit);

    this.store
      .select(state => state.panier.)
      .subscribe(val => this.log(val.length));
  }
}
