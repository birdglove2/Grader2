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

  username: string = ""
  gpax: number = 0
  credit: number = 0
  year
  major

  constructor(
    public afstore: AngularFirestore,
    public alertController: AlertController
    ) { }


  async submit() {

   

    if(this.gpax == null || this.gpax == 0 || this.credit == null || 
      this.credit == 0 || this.username == "" || this.year == null || this.major == null) {
      this.presentAlertVOID();
      return null;
    }

    if(typeof this.gpax != "number" || typeof this.credit != "number") {
      this.presentAlertType();
      return null;
    }

    

    if(this.gpax > 4 || this.gpax < 0) {
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
        return null;
      }
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

    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Subtitle',
      message: "You have created the accout!" + " " + "Student ID: " + this.username  + " " + "GPAX: " 
      + this.gpax + " " + "Credits taken:  " + " " + this.credit + " " + "Year: " + this.year + " " + "Major: " + this.major,
      buttons: ['OK']
    });

    await alert.present();
  
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

 
  async presentAlertVOID() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "Please fill in all the information",
      buttons: ['OK']
    });

    await alert.present();
  }


  async presentAlertType() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "Enter number for GPAX or Credit",
      buttons: ['OK']
    });

    await alert.present();
  }

  async getdatafromid() {
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


}

