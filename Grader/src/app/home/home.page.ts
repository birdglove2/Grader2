import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userDoc: string = ""
  db
  firebase
  reference: firebase.database.Reference
  constructor(

    public afstore: AngularFirestore

  ) {}

  async test() {

  this.afstore.doc<any>('userProfile/birdandrampai').set({
    name: 'Jky',
    email: 'sdcom',
 
  })

}

 /* getdata(){
  this.reference=firebase.database().ref('/example')
  this.db.list(this.reference).subscribe(subject=>{
    this.test=subject;
    console.log("subject"+subject);
  });  
}*/

 /* async get(){
    return this.afstore
  }*/

}
