import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  userDoc: string = ""
  username: string = ""
  gpax: number = 0.0
  credit: number = 0.0
  year
  major

  constructor(
    public afstore: AngularFirestore,
    public alertController: AlertController
    ) { }


  async submit() {

    if(this.gpax > 4 || this.gpax <0) {
      this.presentAlertGPAX();
      return null;
    }

    if(this.major == "ice") {
      if(this.credit > 146 || this.credit < 0) {
        this.presentAlertCredit();
        return null;
      }
    }

    else if(this.major == "adme") {
      if(this.credit > 147 || this.credit < 0) {
        this.presentAlertCredit();
        return null;
      }
    }

    else if(this.major == "aero") {
      if(this.credit > 146 || this.credit < 0) {
        this.presentAlertCredit();
        return null;
      }
    }

    else if(this.major == "nanob") {
      if(this.credit > 147 || this.credit < 0) {
        this.presentAlertCredit();
      }
        return null;
    }

    else if(this.major == "nanom") {
      if(this.credit > 147 || this.credit < 0) {
        this.presentAlertCredit();
        return null;
      }
    }

    else if(this.major == "ai") {
      if(this.credit > 135 || this.credit < 0) {
        this.presentAlertCredit();
        return null;
      }
    }

    this.afstore.doc<any>('userProfile/'+this.username).set({
      username:this.username,
      gpax: this.gpax,
      credit: this.credit,
      year: this.year,
      major: this.major,

   
    })
  
  }
  /*async get(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: this.afstore,
      buttons: ['OK']
    });

  }*/

  ngOnInit() {
  }

  async presentAlertGPAX() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "Exceed maximum GPAX!",
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertCredit() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "Exceed maximum credits for your major!",
      buttons: ['OK']
    });

    await alert.present();
  }
  async getdatafromid() {
    const snapshot = await firebase.firestore().collection('userProfile').get()
    const collection = {};
    snapshot.forEach(doc => {
        collection[this.username] = doc.data();
    });
    console.log(collection)
    return collection;
  }

  async getMarker() {
    const snapshot = await firebase.firestore().collection('userProfile').where('id','==',this.username).get()
    const collection = {};
    snapshot.forEach(doc => {
        collection[doc.id] = doc.data();
    });
    console.log(snapshot)
    return collection;
}

async get5() {
  const collection2={}
  const snapshot= await firebase.firestore().collection('userProfile.' + this.username).get()
  snapshot.forEach(doc=> {
    collection2[doc.id]=doc.data
  })
      
        //console.log(subDoc.data());
        console.log(collection2)
    }

  async get6() {
      const events = await firebase.firestore().collection('userProfile').where('uid', '==', 'kuy6');
      events.get().then((querySnapshot) => {
          const tempDoc = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          console.log(tempDoc)
        })
    }    
    
    //this.afstore.doc<any>('userProfile/'+this.username)


    async get7(){
      let userRef = this.afStore.collection('userProfile').ref.where('uid', '==', 'kuy6');
        userRef.get().then((result) => {
        result.forEach(doc => {
        console.log(doc.data());
        //added benefit of getting the document id / key
        console.log(doc.id)
        })
      })     
    }  
    

   //async get8() { 
    //this.userDoc = afstore.doc<any>('userProfile/kuy6');
    //console.log(this.userDoc)
  //}
  async getMarker2() {
    const snapshot = await firebase.firestore().collection('userProfile').where('username','==','kuy6').get()
    const collection = {};
    snapshot.forEach(doc => {
        collection[doc.id] = doc.data();
    });
    console.log(collection)
    return collection;
  }

  async get9() {
    firebase.firestore().collection("userProfile").doc(this.username)
    .get()
    .then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  }
}