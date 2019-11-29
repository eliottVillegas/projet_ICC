import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connecte:boolean;
  access:boolean;
  id:String;
  constructor() {
    this.connecte = false;
    this.access = false;
  }
}
