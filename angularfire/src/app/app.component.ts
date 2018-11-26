import { Component } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfire';
  items: Observable<any[]>; 
/*
  constructor(private db:AngularFireDatabase){
  //  console.log(this.db.object('connected').valueChanges());
    console.log(this.db.database.ref('connected').orderByValue());
    console.log(this.db.object('connected').query);
    this.items=this.db.list('connected');
    console.log();

  }

*/
constructor(private db: AngularFirestore)
  {
    this.items = this.db.collection('connected').valueChanges();
    this.items.subscribe(console.log);
  }
  
}
