import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProduitService } from "./produit.service";
import { ListeComponent } from "./components/liste/liste.component";
import { MoteurComponent } from "./components/moteur/moteur.component";
import { ProduitPipe } from "./produit.pipe";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { CompteComponent } from "./components/compte/compte.component";
import { DetailComponent } from "./components/detail/detail.component";
import { HeaderComponent } from "./components/header/header.component";
import { PanierComponent } from "./components/panier/panier.component";
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
    component: DetailComponent
  },
  {
    path: "liste",
    component: ListeComponent,
    children: [
      {
        path: "detail/:produit",
        component: DetailComponent
      }
    ]
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
    HelloComponent,
    ListeComponent,
    MoteurComponent,
    ProduitPipe,
    AccueilComponent,
    CompteComponent,
    DetailComponent,
    HeaderComponent,
    PanierComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProduitService]
})
export class AppModule {}
