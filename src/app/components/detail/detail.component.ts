import { Component, OnInit } from "@angular/core";
import { Produit } from "./../../models/produit";

import { Store } from "@ngxs/store";
import { PanierState } from "../../../../shared/states/panier-state";
import { AddProduit } from "../../../../shared/actions/addProduit-action";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  item: N;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.item = this.route.snapshot.params.id;
  }

  addProduit(produit: Produit) {
    this.store.dispatch(new AddProduit(produit));
  }

  onProduitClick(produit: Produit) {
    this.addProduit(produit);
  }
}
