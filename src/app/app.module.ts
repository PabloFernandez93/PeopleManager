import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonenAdministrationComponent } from './personen-administration/personen-administration.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonenAdministrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
