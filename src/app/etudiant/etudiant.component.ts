import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {EtudiantService} from '../services/etudiant.service';
import {UtilisateursService} from '../services/utilisateurs.service';
import {ConnexionService} from '../services/connexion.service';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  id:number=-1
  access:Boolean=false;
  constructor(public etudiants:EtudiantService, private route: ActivatedRoute,public users:UtilisateursService,public conne:ConnexionService){
  }
  ngOnInit() {
  }
}
