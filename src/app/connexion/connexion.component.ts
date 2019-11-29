import { Component, OnInit } from '@angular/core';
import { User } from '../interface/identification';
import { ConnexionService } from '../services/connexion.service';
import { UtilisateursService} from '../services/utilisateurs.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  identification:User;
  validate:Boolean=true;
  constructor(public conne:ConnexionService, public users:UtilisateursService) {

  }

  ngOnInit() {
    this.identification = {
      id:'',
      pwd:''
    }
  }

  authentification(){
    this.conne.connecte = false;
    for(let element = 0; element<this.users.utilisateurs.length; element++) {
      if ( (this.identification.id == this.users.utilisateurs[element]["id"]) && (this.identification.pwd == this.users.utilisateurs[element]["pwd"])){
        this.conne.connecte = true;
        this.conne.id = this.identification.id;
        this.conne.access = (this.users.utilisateurs[element]["statut"]);
        this.validate = false;
      }
    }
  
  }

}
