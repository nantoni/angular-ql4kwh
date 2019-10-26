import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitService } from '../../produit.service';
import { Produit } from './../../models/produit';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  produits : Produit[] = [];

  constructor(private produitService : ProduitService) { }

  ngOnInit() {
        this.produitService.getProduits().subscribe(val => this.produits = val);
  }

}
