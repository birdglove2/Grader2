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
  doc: any;
  fillall:boolean = false;
  constructor(public afstore: AngularFirestore,
    public alertController: AlertController) { }
    username
    gpax
    
  ngOnInit() {
  }

  async fetch() {

    if(this.username == "" || this.gpax == null) {
      this.presentAlertVOID();
      return null;
    }

    else {

      firebase.firestore().collection("userProfile").doc(this.username).get().then((doc)  => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.fillall = true;
        } else {
          
          console.log("No such document!");
          this.presentAlertUsername();
          

    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
      
    }

    
  }

  
  async getdatafromid() {

    if(this.fillall == false) {
      this.presentAlertfetch();
    }
    

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

  async presentAlertUsername() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "Student ID does not exist",
      buttons: ['OK']
    });

    await alert.present();
  }
  
}
