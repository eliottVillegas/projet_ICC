import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ConnexionService } from './services/connexion.service';
import { EditionComponent } from './edition/edition.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    FooterComponent,
    TopbarComponent,
    EtudiantComponent,
    EditionComponent,
    RgpdComponent,
    InscriptionComponent,
    StatistiquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
