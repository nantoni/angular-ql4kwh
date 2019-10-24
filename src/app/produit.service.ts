import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Client } from './models/client';
import { environment } from '../environments/environment';


@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
    public getClients () : Observable<Client[]> {
        return this.http.get<Client[]>(environment.backendClient);
    }
}