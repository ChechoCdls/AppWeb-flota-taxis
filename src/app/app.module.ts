import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Mapa
import { AgmCoreModule } from '@agm/core';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from "../config/firebase.config";
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDevNnn-7oi6Ymo_KThSFhi-2WzfOd3-cc'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
