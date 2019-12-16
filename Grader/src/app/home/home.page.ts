import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable }     from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;
  
  userDoc: string = ""
  db
  firebase
  reference: firebase.database.Reference
  alertController: any;
  username: any;
  constructor(

    public afstore: AngularFirestore

  ) {}

  


  async test() {

  this.afstore.doc<any>('userProfile/birdandrampai').set({
    name: 'Jky',
    email: 'sdcom',
 
  })

}

 /* getdata(){
  this.reference=firebase.database().ref('/example')
  this.db.list(this.reference).subscribe(subject=>{
    this.test=subject;
    console.log("subject"+subject);
  });  
}*/

 /* async get(){
    return this.afstore
  }*/
  

 /* async get2() {
    this.afstore.doc<any>('userProfile/birdandrampai').get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data()
    });
    
   
    })
  
    
  }*/
 /* async get3() {
  this.afstore.doc<any>('userProfile/birdandrampai').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

  }*/

  async get4() {
      const snapshot = await firebase.firestore().collection('userProfile').get()
      console.log(snapshot.docs.map(doc => doc.data()));
      return snapshot.docs.map(doc => doc.data());
      
  }
  
  async Alert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: this.snapshot,
      buttons: ['OK']
      
    });

    await alert.present();
  }
  async getid() {
    const events = await firebase.firestore().collection('userProfile')
    events.get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        console.log(tempDoc)
      })
  }
  
  async supergetgrade(){
    const creditt = [1,2,3,4,6,9]
    //const numcredit = [9,4,38,0,1,1]
    const numcredit = [5,4,28,0,1,1]
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

    var sss=''
    while (sss!='done'){

      if (summ  < need) {
        summ = summ+ (0.5*creditt[cc])
        gradenow=gradebound+(0.5*time)
        time = time+1
      }

      if (cc == 0){ 
        for (let key in countcredit1) {
          if(key == ''+gradenow && summ> need) {
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

        if (cc ==0){
          for (let key in countcredit1) {
            if(key == ''+gradenow) {
              countcredit1[gradenow]=countn
              countcredit1[gradebound]=numcredit[0]-countn
            }
          }
        }
        if (cc==1){
          for (let key in countcredit2) {
            if(key == ''+gradenow) {
              countcredit2[gradenow]=countn
              countcredit2[gradebound]=numcredit[1]-countn
            }
          }
        }
        if (cc ==2){
          for (let key in countcredit3) {
            if(key ==  ''+ gradenow ) {
              countcredit3[gradenow]=countn
              countcredit3[gradebound]=numcredit[2]-countn
            }
          }
        }
        if (cc ==3){
          for (let key in countcredit4) {
            if(key == ''+gradenow) {
              countcredit4[gradenow]=countn
              countcredit4[gradebound]=numcredit[3]-countn  
            }
          }
        }

        if (cc ==4){
          for (let key in countcredit6) {
            if(key == ''+gradenow) {
              countcredit6[gradenow]=countn
              countcredit6[gradebound]=numcredit[4]-countn
            }
          }
        }

        if (cc ==5){
          for (let key in countcredit9) {
            if(key == ''+gradenow ) {
              countcredit9[gradenow]=countn          
              countcredit9[gradebound]=numcredit[5]-countn     
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




}



