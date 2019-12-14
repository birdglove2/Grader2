import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userDoc: string = ""
  username: string = ""
  gpax: number = 0.0
  credit: number = 0.0
  year

  constructor(
    public afstore: AngularFirestore
    ) { }


  async test() {

    this.afstore.doc<any>('userProfile/'+this.username).set({
      gpax: this.gpax,
      credit: this.credit,
      year: this.year,

   
    })
  
  }

  ngOnInit() {
  }

}
