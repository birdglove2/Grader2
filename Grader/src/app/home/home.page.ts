import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable }     from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;
  userDoc: string = ""
  db
  firebase
  reference: firebase.database.Reference
  alertController: any;
  username: any;
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
  

 /* async get2() {
    this.afstore.doc<any>('userProfile/birdandrampai').get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data()
    });
    
   
    })
  
    
  }*/
 /* async get3() {
  this.afstore.doc<any>('userProfile/birdandrampai').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

  }*/

  async get4() {
      const snapshot = await firebase.firestore().collection('userProfile').get()
      console.log(snapshot.docs.map(doc => doc.data()));
      return snapshot.docs.map(doc => doc.data());
      
  }
  
  async Alert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: this.snapshot,
      buttons: ['OK']
      
    });

    await alert.present();
  }
}



