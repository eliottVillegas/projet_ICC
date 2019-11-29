import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  data_allowed:Boolean;
  constructor(public users:UtilisateursService,public conne:ConnexionService) { }

  ngOnInit() {
  }

  edition(){
    for(let element = 0; element<this.users.utilisateurs.length; element++) {
      if (this.conne.id == this.users.utilisateurs[element]["id"]) {
        if(this.data_allowed){
          this.users.utilisateurs[element]["data_allowed"] = 1;
        }
        else {
          this.users.utilisateurs[element]["data_allowed"] = 0;
        }
      }
    }
  }
}
