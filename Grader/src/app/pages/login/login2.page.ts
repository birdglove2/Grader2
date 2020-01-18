import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class LoginPage2 implements OnInit {

  username
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

  constructor(public afstore: AngularFirestore,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async submit() {

   

    if(this.gpax == null || this.gpax == 0 || this.credit == null || 
      //this.credit == 0
      this.username == "" || this.year == null || 
      this.major == null || this.withdrawn == null || this.semester == null) {
      console.log('testestest')
    }
  }

}
