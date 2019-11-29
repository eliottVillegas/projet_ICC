import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';
import { UtilisateursService } from '../services/utilisateurs.service' 

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  image:string;
  constructor(public conne:ConnexionService, public users:UtilisateursService) {
    this.image="https://eisti.fr/sites/all/themes/eisti/assets/images/logo.gif";
   }

  ngOnInit() {
  }

}
