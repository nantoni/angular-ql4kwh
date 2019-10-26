import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './models/produit'

@Pipe({
  name: 'produit'
})
export class ProduitPipe implements PipeTransform {

  transform(value: Produit[], filtre: string): any {
    switch
  }

}