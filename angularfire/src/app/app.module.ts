import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';


// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBklIelG92hYJFwEddbLhkstr5kJDyQLLU',
  authDomain: 'buildingappswithangularf-ec768.firebaseapp.com',
  databaseURL: 'https://buildingappswithangularf-ec768.firebaseio.com',
  projectId: 'buildingappswithangularf-ec768',
  storageBucket: 'buildingappswithangularf-ec768.appspot.com',
  messagingSenderId: '162080680727'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
