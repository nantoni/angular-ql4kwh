import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListeComponent } from "./liste.component";
import { ProduitPipe } from "../../produit.pipe";
import { ProduitService } from "../../produit.service";
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  imports: [CommonModule,
  declarations: [ListeComponent, ProduitPipe],
  providers: [ProduitService],
  exports: [RouterModule]
})
export class ListeModule {}

