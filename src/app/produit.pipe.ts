import { Pipe, PipeTransform } from "@angular/core";
import { Produit } from "./models/produit";

@Pipe({
  name: "produit"
})
export class ProduitPipe implements PipeTransform {
  transform(produits: Produit[], filtre: string): any {
    switch (filtre) {
      case "priceAsc": {
        return produits.filter(produit => produit.prix < Number.MAX_SAFE_INTEGER)
        break;
      }
      case "priceDesc": {
        break;
      }
      case "sizeAsc": {
        break;
      }
      case "sizeDesc": {
        break;
      }
      default: {
        break;
      }
    }
  }
}