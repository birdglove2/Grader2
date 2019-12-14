import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(public afstore: AngularFirestore,
    public alertController: AlertController) { }
    username
    gpax
    fillall:boolean = false;
  ngOnInit() {
  }

  async fetch() {

    if(this.username != "" && this.gpax != null) {
    
      this.fillall = true;
    }

    if(this.username == "" || this.gpax == null) {
      this.presentAlertVOID();
      return null;
    }

  }

  

  async getdatafromid() {

    

    if(this.fillall == false) {
      this.presentAlertfetch();
    }

    
    


    firebase.firestore().collection("userProfile").doc(this.username)
    .get()
    .then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
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

  async presentAlertfetch() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "Please fill in all the information and click fetch",
      buttons: ['OK']
    });

    await alert.present();
  }

}
