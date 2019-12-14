import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';

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


  async test() {

    if(this.gpax > 4 || this.gpax <0) {
      return null;
    }

    if(this.major == "ice") {
      if(this.credit > 146 || this.credit < 0)
        return null;
    }

    else if(this.major == "adme") {
      if(this.credit > 147 || this.credit < 0)
        return null;
    }

    else if(this.major == "aero") {
      if(this.credit > 146 || this.credit < 0)
        return null;
    }

    else if(this.major == "nanob") {
      if(this.credit > 147 || this.credit < 0)
        return null;
    }

    else if(this.major == "nanom") {
      if(this.credit > 147 || this.credit < 0)
        return null;
    }

    else if(this.major == "ai") {
      if(this.credit > 135 || this.credit < 0)
        return null;
    }

    this.afstore.doc<any>('userProfile/'+this.username).set({
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: this.username,
      buttons: ['OK']
    });

    await alert.present();
  }

}
