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
  creditWithdrawn
  semester

  j=3.0
  k=4.0
  constructor(
    public afstore: AngularFirestore,
    public alertController: AlertController
    ) { }


  async submit() {

   

    if(this.gpax == null || this.gpax == 0 || this.credit == null || 
      this.credit == 0 || this.username == "" || this.year == null || 
      this.major == null || this.withdrawn == null || this.semester == null) {
      this.presentAlertVOID();
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
    } else {

      if(this.withdrawn1 == null || this.withdrawn2 == null || 
        this.withdrawn3 == null || this.withdrawn4 == null) {

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
      creditWithdrawn: (1*this.withdrawn1+2*this.withdrawn2+3*this.withdrawn3+4*this.withdrawn4),
      semester: this.semester

    

   
    })

    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Subtitle',
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
      message: "Exceed maximum credits for your major!",
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

  async getdatafromid() {
    firebase.firestore().collection("userProfile").doc(this.username)
    .get()
    .then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      console.log(doc.data().gpax)
    } else {
      
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  }

  async onButtonClickYes() {
    
    this.buttonClicked = true;
    
  }
  async onButtonClickNo() {
    
    this.buttonClicked = false;
    
  }

 

  async getgrade(gradewant){
    
    firebase.firestore().collection("userProfile").doc(this.username)
    .get()
    .then(function(doc) {
    if (doc.exists) {
      var gpax = doc.data().gpax
      const credittaken = doc.data().credit
      const creditWithdrawn = doc.data().creditWithdrawn
      
      var valueneed = (gradewant *146)-(gpax*(credittaken-creditWithdrawn))
      const gradelist =  [0.0, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0]
      const creditlist =  [5.0, 8.0, 84.0, 6.0, 9.0]
  
      var sum =0.0
      var ggg=0
      var ccc=0
      var count=0
    
      for (let i=0;i<146-34;i++){
        for (let j=0;j<4;j++){
          if  (sum < valueneed){
            sum+= (gradelist[ggg]*creditlist[ccc])
            console.log(sum)
            count+=1
            ccc+=1
            if (ccc ==5){
              ccc=0
            }
            if  (count == 5){
              if (sum < valueneed){
              ggg+=1
              count = 0
              sum=0
              }
            }
          }      
        }
      }  
      console.log('least grade is ',gradelist[ggg])
      console.log(sum)
      console.log('done')
      console.log(valueneed) 
    
    
    }else {
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  })
    
    
  }
}

  




