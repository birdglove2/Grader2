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
  static username: string;
  [x: string]: any;

  checker:boolean = false;
  buttonClicked: boolean = false; 
  gpax: number = 0
  credit: number = 0
  year
  major
  withdrawn
  withdrawn1
  withdrawn2
  withdrawn3
  withdrawn4
  withdrawn6
  withdrawn9
  creditWithdrawn
  semester
  credit1
  credit2
  credit3
  credit4
  credit6
  credit9
  j=3.0
  k=4.0
  constructor(
    public afstore: AngularFirestore,
    public alertController: AlertController
    ) { }

    gotChar(eve) {
      this.checker = eve.target.value > 0 && eve.target.value != null ? true : false ;
    }
   
    gotChange(eve) {
     console.log(eve.target.value);
     this.checker = eve.target.value > 0 && eve.target.value != null ? true : false;
    }


  async submit() {

   

    if(this.gpax == null || this.gpax == 0 || this.credit == null || 
      this.credit == 0 || this.username == "" || this.year == null || 
      this.major == null || this.withdrawn == null || this.semester == null) {
      this.presentAlertVOID();
      return null;
    }

    if(this.credit > 0) {
      if(this.credit1 == null || this.credit2 == null || this.credit3 == null ||
        this.credit4 == null || this.credit6 == null || this.credit9 == null) {
      this.presentAlertVOID();
      return null;
      }

      if(this.credit1 < 0 || this.credit2 < 0 || this.credit3 < 0 ||
        this.credit4 < 0 || this.credit6 < 0 || this.credit9 < 0) {
      this.presentAlertCredit();
      return null;
      }
    } else {

      this.presentAlertCredit();

    }

    if(this.credit != 1*this.credit1+2*this.credit2+3*this.credit3+4*this.credit4+6*this.credit6+
      9*this.credit9) {
        this.presentAlertCredit();
        return null;

      }

    if(this.username.length != 10) {
      this.presentAlertUsername();
      return null;
    }
    
   

    if(this.withdrawn == "no") {
      this.withdrawn1 = 0;
      this.withdrawn2 = 0;
      this.withdrawn3 = 0;
      this.withdrawn4 = 0;
      this.withdrawn6 = 0;
      this.withdrawn9 = 0;
    } else {

      if(this.withdrawn1 == null || this.withdrawn2 == null || 
        this.withdrawn3 == null || this.withdrawn4 == null || 
        this.withdrawn6 == null || this.withdrawn9 == null) {

          this.presentAlertVOID();
          return null;
        }


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
      gpax: this.gpax,
      credit: this.credit,
      year: this.year,
      major: this.major,
      withdrawn: this.withdrawn,
      withdrawn1: this.withdrawn1,
      withdrawn2: this.withdrawn2,
      withdrawn3: this.withdrawn3,
      withdrawn4: this.withdrawn4,
      withdrawn6: this.withdrawn6,
      withdrawn9: this.withdrawn9,
      creditWithdrawn: (1*this.withdrawn1+2*this.withdrawn2+3*this.withdrawn3
                        +4*this.withdrawn4+6*this.withdrawn6+9*this.withdrawn9),
      semester: this.semester,
      credit1: this.credit1,
      credit2: this.credit2,
      credit3: this.credit3,
      credit4: this.credit4,
      credit6: this.credit6,
      credit9: this.credit9

    

   
    })

    const alert = await this.alertController.create({
      header: 'Success!',
      subHeader: '',
      message: "You have created the accout!" + " " + "Student ID: " 
      + this.username  + " " + "GPAX: " + this.gpax + " " + "Credits taken:  " 
      + " " + this.credit + " " + "Year: " + this.year + " " + "Major: " 
      + this.major + " " + "Withdrawn?: " + " " + this.withdrawn + " " + "Semester: " + " " + this.semester,
      buttons: ['OK']
    });

    await alert.present();

    this.username = null;
    this.gpax = null;
    this.withdrawn = null;
    this.major = null;
    this.year = null,
    this.semester = null;
    this.credit = null;
    this.withdrawn1 = null;

    this.withdrawn2 = null;
    this.withdrawn3 = null;
    this.withdrawn4 = null;
    this.withdrawn6 = null;
    this.withdrawn9 = null;
    this.credit1 = null;
    this.credit2 = null;
    this.credit3 = null;
    this.credit4 = null;
    this.credit6 = null;
    this.credit9 = null;
    
  }



 
  ngOnInit() {
  }

  async presentAlertGPAX() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: "Exceed maximum GPAX!",
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertCredit() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: "Credits is not match for your major!",
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertUsername() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: "Please enter student ID",
      buttons: ['OK']
    });

    await alert.present();
  }
 
  async presentAlertVOID() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: "Please fill in all the information",
      buttons: ['OK']
    });

    await alert.present();
  }


  async presentAlertType() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: "Enter number for GPAX or Credit",
      buttons: ['OK']
    });

    await alert.present();
  }


}

  