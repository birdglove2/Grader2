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
    gradelist =  [0.0, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0]
    creditlistICE =  [9.0, 8.0, 114.0, 0.0, 6.0, 9.0]
    creditlistADME = [8.0,4.0,135.0,0.0,0.0,0.0]
    creditlistAERO = [8.0,18.0,108.0,12.0,0.0,0.0]
    creditlistNANOb = [10.0, 4.0, 129.0, 4.0,0.0,0.0]
    creditlistNANOm = [9.0,2.0,132.0,4.0,0.0,0.0]
    creditlistAI = [4.0,2.0,123.0,0.0,6.0,0.0]
    creditICE = 146
    creditADME = 147
    creditAERO = 146
    creditNANOb = 147
    creditNANOm = 147
    creditAI = 135
    creditlist
    totalcredit

    
   

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
          

          if(doc.data().major == "ICE") {
            this.creditlist = this.creditlistICE
            this.totalcredit = this.creditICE
          }
          if(doc.data().major == "ADME") {
            this.creditlist = this.creditlistADME
            this.totalcredit = this.creditADME
          }
          if(doc.data().major == "AERO") {
            this.creditlist = this.creditlistAERO
            this.totalcredit = this.creditAERO
          }
          if(doc.data().major == "NANOb") {
            this.creditlist = this.creditlistNANOb
            this.totalcredit = this.creditNANOb
          }
          if(doc.data().major == "NANOm") {
            this.creditlist = this.creditlistNANOm
            this.totalcredit = this.creditNANOm
          }
          if(doc.data().major == "AI") {
            this.creditlist = this.creditlistAI
            this.totalcredit = this.creditAI
          }

          var gpax = doc.data().gpax
          const credittaken = doc.data().credit
          const creditWithdrawn = doc.data().creditWithdrawn
    
          var valueneed = (this.gpaxDesired * this.totalcredit)-(gpax*(credittaken-creditWithdrawn))
          

          var sum =0.0
          var ggg=0
          var ccc=0
          var count=0
          var getout=0
    while (getout != 1) {
        if (sum>= valueneed){
          console.log('final bounded grade is ',this.gradelist[ggg])
          console.log(this.creditlist)
          getout=1
          break
        }
        if  (sum < valueneed){
          sum+= (this.gradelist[ggg]*this.creditlist[ccc])
          console.log(sum)
          count+=1
          ccc+=1

          if (ccc ==6){
            ccc=0
          }

          if  (count == 6){
            if (sum < valueneed){
              ggg+=1
              count = 0
              sum=0
            }
          }
        }      
      
    }  
    console.log('least grade is ',this.gradelist[ggg])
    console.log(sum)
    console.log('done')
    console.log(valueneed) 
  
        } else {
          
          console.log("No such document!");
          this.presentAlertUsername();
          

    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });




  firebase.firestore().collection("userProfile").doc(this.username)
  .get()
  .then(function(doc) {
  if (doc.exists) {
    
  
  }else {
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
})


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
