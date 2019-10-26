import { Pipe, PipeTransform } from "@angular/core";
import { Produit } from "./models/produit";

@Pipe({
  name: "produit"
})
export class ProduitPipe implements PipeTransform {
  transform(produits: Produit[], filtre: string): any {
    console.log(filtre);
    switch (filtre) {
      case "priceAsc": {
        return produits.sort((a, b) => {
          return parseFloat(a.prix) < parseFloat(b.prix) ? -1 : parseFloat(a.prix) > parseFloat(b.prix) ? 1 : 0;
        });
        break;
      }
      case "priceDesc": {
        return produits.sort((a, b) => {
          return parseFloat(a.prix) > parseFloat(b.prix) ? -1 : parseFloat(a.prix) < parseFloat(b.prix) ? 1 : 0;
        });
        break;
      }
      case "sizeAsc": {
        return produits.sort((a, b) => {
          return parseFloat(a.taille) < parseFloat(b.taille) ? -1 : parseFloat(a.taille) > parseFloat(b.taille) ? 1 : 0;
        });
        break;
      }
      case "sizeDesc": {
        return produits.sort((a, b) => {
          return parseFloat(a.taille) > parseFloat(b.taille) ? -1 : parseFloat(a.taille) < parseFloat(b.taille) ? 1 : 0;
        });
        break;
      }
      default: {
        return produits;
        break;
      }
    }
  }
}
