import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login.page';

import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  doc: any;
  fillall:boolean = false;


  constructor(public afstore: AngularFirestore,
    public alertController: AlertController,
    private router : Router) { }

    user
    username
    gpaxDesired
    gpax
    credit
    year
    major
    withdrawn
    creditWithdrawn

    
   

  ngOnInit() {
  }

  async fetch() {

    if(this.gpaxDesired > 4 || this.gpaxDesired < 0) {
      this.presentAlertGPAX();
      return null;
    }

    if(this.username == "" || this.gpaxDesired == null) {
      this.presentAlertVOID();
      return null;
    }

    else {

      firebase.firestore().collection("userProfile").doc(this.username).get().then((doc)  => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.gpax = doc.data().gpax;
          this.credit = doc.data().gpax;
          this.year = doc.data().year;
          this.major = doc.data().major;
          this.withdrawn = doc.data().withdrawn
          this.creditWithdrawn = doc.data().creditWithdrawn;
          this.fillall = true;
          this.user = {
            username: this.username,
            gpax: this.gpax,
            gpaxDesired: this.gpaxDesired,
            credit: this.credit,
            year: this.year,
            major: this.major,
            withdrawn: this.withdrawn,
            creditWithdrawn: this.creditWithdrawn
      
          }
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
      return null;

    } else {

    

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }

    }

    this.router.navigate(['calculated'], navigationExtras);
    

    }
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
