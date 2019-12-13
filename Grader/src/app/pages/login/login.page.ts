import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id : string
  password : string
  userDoc 
  constructor(private afStore:AngularFirestore) { 
    this.userDoc = afStore.doc(`Users/`);
    this.userDoc.set({
      id: this.id,
      password: this.password
      // Other info you want to add here
    })
  }

  ngOnInit() {
  }

 /* submit() {
    const {id}=this
    this.afStore.doc(`Users/${}`).set({
      id
    })
  } */
}
