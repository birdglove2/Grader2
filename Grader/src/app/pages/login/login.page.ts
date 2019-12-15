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
  creditWithdrawn
  j=3.0
  k=4.0
  constructor(
    public afstore: AngularFirestore,
    public alertController: AlertController
    ) { }


  async submit() {

   

    if(this.gpax == null || this.gpax == 0 || this.credit == null || 
      this.credit == 0 || this.username == "" || this.year == null || 
      this.major == null || this.withdrawn == null) {
      this.presentAlertVOID();
      return null;
    }

    if(this.withdrawn == "no") {
      this.creditWithdrawn = 0;
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
      creditWithdrawn: this.creditWithdrawn

    

   
    })

    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Subtitle',
      message: "You have created the accout!" + " " + "Student ID: " 
      + this.username  + " " + "GPAX: " + this.gpax + " " + "Credits taken:  " 
      + " " + this.credit + " " + "Year: " + this.year + " " + "Major: " 
      + this.major + "Withdrawn?: " + " " + this.withdrawn + "Credits withdrawn: " + " " + this.creditWithdrawn,
      buttons: ['OK']
    });

    await alert.present();
  
  }



 
  ngOnInit() {
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

  async presentAlertCredit() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "Exceed maximum credits for your major!",
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


  async presentAlertType() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
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
    
      while (sum<valueneed){
          if  (sum < valueneed){
            sum+= (gradelist[ggg]*creditlist[ccc])
            //console.log(sum)
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
        
      console.log('least grade is ',gradelist[ggg])
      console.log('sum',sum)
      console.log('done')
      console.log('value need',valueneed) 
      console.log('asldmaldk')
    
    
    }else {
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  })
    
    
  }





  async supergetgrade(){
    const creditt = [1,2,3,4,6,9]
    const numcredit = [9,4,38,0,1,1]
    const numcredit2 = [5,4,28,0,1,1]

    const diffgrade =0.5

    const need = 512
    var summ=0


var cc=0
var countn=0
var counts=0
var pivot=0
var time=1


const gradebound=0
var gradenow=0


var countcredit1 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
var countcredit2 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
var countcredit3 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
var countcredit4 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
var countcredit6 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
var countcredit9 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}

countcredit1[gradebound]= numcredit[0] 
countcredit2[gradebound]= numcredit[1]
countcredit3[gradebound]= numcredit[2]
countcredit4[gradebound]= numcredit[3]
countcredit6[gradebound]= numcredit[4]
countcredit9[gradebound]= numcredit[5]

var superget=''
while (superget!='done'){
  if (summ  < need) {
        summ += (0.5*creditt[cc])
        gradenow=gradebound+0.5*time
        time+=1
  }

  if (cc =0){ 
    if (gradenow in countcredit1 && summ>need){
      counts+=1
      countcredit1[gradenow]=counts
      countcredit1[gradebound] -= counts
  }

  if (cc=1){
    if (gradenow in countcredit2 && summ>need){
      counts+=1
      countcredit2[gradenow]=counts
      countcredit2[gradebound] -= counts
    } 
  }

  if (cc=2){
    if (gradenow in countcredit3 && summ>need){
      counts+=1
      countcredit3[gradenow]= counts
      countcredit3[gradebound] -= counts
    }
  }
  if (cc ==3){
    if (gradenow in countcredit4 && summ>need){
      counts+=1
      countcredit4[gradenow]=counts
      countcredit4[gradebound] -= counts
    }
  }

  if (cc ==4){
    if (gradenow in countcredit6 && summ>need){
      counts+=1
      countcredit6[gradenow]=counts
      countcredit6[gradebound] -= counts
    }  
  }
  if (cc ==5){
    if (gradenow in countcredit9 && summ>need){
      counts+=1
      countcredit9[gradenow]=counts
      countcredit9[gradebound] -= counts
    }
  }



  if (gradenow ==4.0){
          countn+=1

          if (cc ==0){
            if (gradenow in countcredit1){
                countcredit1[gradenow]=countn
                countcredit1[gradebound]=numcredit[0]-countn
            }
          }
          if (cc==1){
            if (gradenow in countcredit2){
                countcredit2[gradenow]=countn
                countcredit2[gradebound]=numcredit[1]-countn
            }
          }

          if (cc ==2){
            if (gradenow in countcredit3){
                countcredit3[gradenow]=countn
                countcredit3[gradebound]=numcredit[2]-countn
            }
          }

          if (cc ==3){
            if (gradenow in countcredit4){
                countcredit4[gradenow]=countn
                countcredit4[gradebound]=numcredit[3]-countn
            }
          }

          if (cc ==4){
            if (gradenow in countcredit6){
                countcredit6[gradenow]=countn
                countcredit6[gradebound]=numcredit[4]-countn
            }
          }

          if (cc ==5){
            if (gradenow in countcredit9){
                countcredit9[gradenow]=countn          
                countcredit9[gradebound]=numcredit[5]-countn      
            }
          }

          
          gradenow =gradebound
          time=1
      
  if (countn == numcredit[pivot]){
      pivot+=1
      countn=0
      cc+=1
  }

  if (summ>=need || cc >5) {
    console.log('1',countcredit1)
    console.log('2',countcredit2)
    console.log('3',countcredit3)
    console.log('4',countcredit4)
    console.log('6',countcredit6)
    console.log('9',countcredit9)
    superget = 'done'
    break
  }
  }
    







 }  
}
}
}
  