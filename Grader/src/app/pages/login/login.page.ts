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
  withdrawn6
  withdrawn9
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
    this.withdrawn6 = null;
    this.withdrawn9 = null;
  
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
    //const numcredit = [9,4,38,0,1,1]
    const numcredit = [5,4,28,0,1,1]
    const need = 512
    var summ=0


    var cc=0
    console.log('first cc',cc)
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
    console.log('first',countcredit3)


    var sss=''
    while (sss!='done'){

      if (summ  < need) {
        summ = summ+ (0.5*creditt[cc])
        gradenow=gradebound+(0.5*time)
        console.log('gradeup')
        time = time+1
      }

      if (cc ==0){ 
        console.log('not yet')
        for (let key in countcredit1) {
          if(key == ''+gradenow && summ> need) {
        //if (gradenow in countcredit1 && summ>need){
            counts+=1
            countcredit1[gradenow]=counts
            countcredit1[gradebound] -= counts
          }
        }
      }
      if (cc==1){
        for (let key in countcredit2) {
          if(key == ''+gradenow && summ> need) {
            counts+=1
            countcredit2[gradenow]=counts
            countcredit2[gradebound] -= counts
          }
        } 
      }
      if (cc==2){
        for (let key in countcredit3) {
          if(key == ''+gradenow && summ> need) {
            console.log('countssss')
            counts+=1
            countcredit3[gradenow]= counts
            countcredit3[gradebound] -= counts
          }
        }
      }
      if (cc ==3){
        for (let key in countcredit4) {
          if(key == ''+gradenow && summ> need) {
            counts+=1
            countcredit4[gradenow]=counts
            countcredit4[gradebound] -= counts
          }
        }
      }
      if (cc ==4){
        for (let key in countcredit6) {
          if(key == ''+gradenow && summ> need) {
            counts+=1
            countcredit6[gradenow]=counts
            countcredit6[gradebound] -= counts
          }
        }  
      }
      if (cc ==5){
        for (let key in countcredit9) {
          if(key == ''+gradenow && summ> need) {
            counts+=1
            countcredit9[gradenow]=counts
            countcredit9[gradebound] -= counts
          }
        }
      }

      if (gradenow ==4.0){
        countn+=1
        console.log('gradenow =4.0')
        console.log('cc=',cc)

        if (cc ==0){
          for (let key in countcredit1) {
            if(key == ''+gradenow) {
              countcredit1[gradenow]=countn
              countcredit1[gradebound]=numcredit[0]-countn
              console.log('countcredit1',countcredit1)
            }
          }
        }
        if (cc==1){
          for (let key in countcredit2) {
            if(key == ''+gradenow) {
              countcredit2[gradenow]=countn
              countcredit2[gradebound]=numcredit[1]-countn
              console.log('countcredit2',countcredit2)
            }
          }
        }
        if (cc ==2){
          console.log('sum',summ)
          for (let key in countcredit3) {
            if(key ==  ''+ gradenow ) {
              console.log('gradenowwwww',''+gradenow)
              countcredit3[gradenow]=countn
              countcredit3[gradebound]=numcredit[2]-countn
              console.log('countnnnnnnn',countn)
              console.log('check')
              console.log('countcredit3',countcredit3)
            }
          }
        }
        if (cc ==3){
          for (let key in countcredit4) {
            if(key == ''+gradenow) {
              countcredit4[gradenow]=countn
              countcredit4[gradebound]=numcredit[3]-countn  
              console.log('countcredit4',countcredit4)
            }
          }
        }

        if (cc ==4){
          for (let key in countcredit6) {
            if(key == ''+gradenow) {
              countcredit6[gradenow]=countn
              countcredit6[gradebound]=numcredit[4]-countn
              console.log('countcredit6',countcredit6)
            }
          }
        }

        if (cc ==5){
          for (let key in countcredit9) {
            if(key == ''+gradenow ) {
              countcredit9[gradenow]=countn          
              countcredit9[gradebound]=numcredit[5]-countn     
              console.log('countcredit9',countcredit9) 
            }
          }
        }  
        gradenow =gradebound
        time=1
      }

      if (countn == numcredit[pivot]){
        pivot+=1
        countn=0
        cc+=1
        console.log(numcredit[pivot-1])
        console.log('supercheckkkkkk')
        console.log(gradenow)
      }

      

      if (summ>=need || cc >5) {
        console.log('this is grade')
        console.log('1',countcredit1)
        console.log('2',countcredit2)
        console.log('3',countcredit3)
        console.log('4',countcredit4)
        console.log('6',countcredit6)
        console.log('9',countcredit9)
        sss = 'done'
        break
      } 
    }
  }



 async ss(){
   var alist = [1,2,3,4,5]
   if (2 in alist){
     console.log('2 is in alist')
   }
   console.log('sadsads',alist[1])
   var ss=''
  while (ss!='done'){
    console.log('เบรค')
    ss='done'
    break
    


  
    }
  }

 /* async ss3(){
    var dictionary={'A':1, 'B':2, 'C':3}
    Object.entries(dictionary).forEach(([key, value]) => 
      console.log(key, value););

    console.log(Object.keys(dictionary))
    if ('A' in Object.keys(dictionary)){
      console.log('yes')
    }
    } */

    async ss3(){

      var dictionary={4.0:1, 'B':2, 'C':3}
      
      
      for (let key in dictionary) {
         if(key == ''+4.0) {

         
         console.log("yes kuay")
         console.log(key)

         }
        
        let value = dictionary[key];
        console.log(key, value)
        
    }



    }

    
  
 
}

  