import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListeComponent } from "./liste.component";
import { ProduitPipe } from "../../produit.pipe";
import { ProduitService } from "../../produit.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ListeComponent, ProduitPipe],
  providers: [ProduitService]
})
export class ListeModule {}
