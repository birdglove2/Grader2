import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userDoc: string = ""
  constructor(

    public afstore: AngularFirestore

  ) {}

  async test() {

  this.afstore.doc<any>('userProfile/we45tfgy8ij').set({
    name: 'Jorge Vergara',
    email: 'j@javebratt.com',
 
  })

}

  
}
