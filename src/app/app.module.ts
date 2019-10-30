import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProduitService } from "./produit.service";
import { MoteurComponent } from "./components/moteur/moteur.component";
import { ProduitPipe } from "./produit.pipe";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgxsModule } from "@ngxs/store";
import { PanierState } from "../../shared/states/panier-state";
import { RouterModule, Routes } from "@angular/router";

//const appRoutes: Routes = [
//{ path: 'detail/:produit', component: DetailComponent },
//];

const appRoutes: Routes = [
  {
    path: "accueil",
    component: AccueilComponent
  },
  {
    path: "detail/:id",
    loadChildren: () => import('./components/detail/detail.module').then(m => m.DetailModule)
  },
  { path: "", redirectTo: "/accueil", pathMatch: "full" },
  { path: "**", redirectTo: "/accueil", pathMatch: "full" },
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([PanierState]),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MoteurComponent,
    ProduitPipe,
    AccueilComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ProduitService]
})
export class AppModule {}
