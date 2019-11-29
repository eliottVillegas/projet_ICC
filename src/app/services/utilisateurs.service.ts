import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  utilisateurs:Array<object>;
  constructor(private http:HttpClient) { 
    this.http.get<Array<object>>("/assets/utilisateurs.json").subscribe(
      user=>{
        this.utilisateurs=user;
      }
    )
  }
}
