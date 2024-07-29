import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from "./PageConnexion/PageConnextion.component";
import { PageInscriptionComponent } from './PageInscription/PageInscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CardSectionComponent } from "./card-section/card-section.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageConnexionComponent,
    PageInscriptionComponent,
    FormulaireComponent,
    DashboardComponent,
    CardSectionComponent,
    CommonModule,
    FormsModule
],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
