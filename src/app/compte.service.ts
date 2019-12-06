import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../../shared/models/user';


@Injectable()
export class CompteService {

  constructor(private http:HttpClient) { }


  public postCompte (user: User) : Observable<User[]> {
      return this.http.post<User>(environment.apiUrl + '/api/client', user);
  }

}