import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Client } from './models/produit';
import { environment } from './environments/environment';


@Injectable()
export class ProduitService {

  constructor(private http:HttpClient) { }
    public getProduits () : Observable<Client[]> {
        return this.http.get<Client[]>(environment.backendProduit);
    }
}