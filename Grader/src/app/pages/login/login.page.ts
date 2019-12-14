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

  constructor(
    public afstore: AngularFirestore,
    public alertController: AlertController
    ) { }


  async test() {

    this.afstore.doc<any>('userProfile/'+this.username).set({
      gpax: this.gpax,
      credit: this.credit,
      year: this.year,

   
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
