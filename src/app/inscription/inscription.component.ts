import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  newUser: Object;
  erreur: Boolean = false;
  constructor(public conne: ConnexionService, public users: UtilisateursService) { }

  ngOnInit() {
    this.newUser = {
      "id": '',
      "pwd": '',
      "nom": '',
      "prenom": '',
      "promo": '',
      "option": '',
      "data_allowed": ''
    }
  }

  inscription() {
    for (let element = 0; element < this.users.utilisateurs.length; element++) {
      if (this.newUser["id"] == this.users.utilisateurs[element]["id"]) {
        this.erreur = true;
      }
    }
    if (!this.erreur) {
      this.users.utilisateurs.push(
        {
          "id": this.newUser["id"],
          "pwd": this.newUser["pwd"],
          "nom": this.newUser["nom"],
          "prenom": this.newUser["prenom"],
          "statut": 1,
          "promo": this.newUser["promo"],
          "option": this.newUser["option"],
          "data_allowed":this.newUser["data_allowed"]})
    }
  }
}
