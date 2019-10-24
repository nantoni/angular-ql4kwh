import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProduitService } from './produit.service';
import { ListeComponent } from './components/liste/liste.component';
import { MoteurComponent } from './components/moteur/moteur.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ListeComponent, MoteurComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProduitService ]
})
export class AppModule { }
