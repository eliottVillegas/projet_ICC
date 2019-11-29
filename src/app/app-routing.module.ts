import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './edition/edition.component';
import { AuthGuard } from './services/auth.guard';
import { RgpdComponent } from './rgpd/rgpd.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'etudiant',component:EtudiantComponent, canActivate:[AuthGuard]},
  {path:'connexion',component:ConnexionComponent},
  {path:'edition',component:EditionComponent, canActivate:[AuthGuard]},
  {path:'rgpd',component:RgpdComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'statistiques',component:StatistiquesComponent, canActivate:[AuthGuard]},
  //mauvaise route
  {path:'**',component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
