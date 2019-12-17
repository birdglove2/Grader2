import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login.page';

import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


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
    withdrawn = null
    withdrawn1 = null
    withdrawn2 = null
    withdrawn3 = null
    withdrawn4 = null
    withdrawn6 = null
    withdrawn9 = null
    credit1
    credit2
    credit3
    credit4
    credit6
    credit9
    


    semester = null
    creditWithdrawn = null
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
          this.credit = doc.data().credit;
          this.year = doc.data().year;
          this.major = doc.data().major;
          this.withdrawn = doc.data().withdrawn
          this.creditWithdrawn = doc.data().creditWithdrawn;
          this.withdrawn1 = doc.data().withdrawn1
          this.withdrawn2 = doc.data().withdrawn2
          this.withdrawn3 = doc.data().withdrawn3
          this.withdrawn4 = doc.data().withdrawn4
          this.withdrawn6 = doc.data().withdrawn6
          this.withdrawn9 = doc.data().withdrawn9
          this.semester = doc.data().semester
          this.credit1 = doc.data().credit1
          this.credit2 = doc.data().credit2
          this.credit3 = doc.data().credit3
          this.credit4 = doc.data().credit4
          this.credit6 = doc.data().credit6
          this.credit9 = doc.data().credit9

          this.fillall = true;
          
          const credittakenlist = [this.credit1*1, this.credit2*2, this.credit3*3, this.credit4*4, this.credit6*6, this.credit9*9]


          const cw1 = this.withdrawn1 *1
          const cw2 = this.withdrawn2 *2
          const cw3 = this.withdrawn3 *3
          const cw4 = this.withdrawn4 *4
          const cw6 = this.withdrawn6 *6
          const cw9 = this.withdrawn9 *9


          const withdrawnlist = [cw1,cw2,cw3,cw4,cw6,cw9]



          if(doc.data().major == "ICE") {
            console.log('ice done')
            this.creditlist = this.creditlistICE
            this.totalcredit = this.creditICE
            console.log('ice',this.creditlist)
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

          console.log('before',this.creditlist)
          for(let i=0;i<=5;i++){
            this.creditlist[i] = this.creditlist[i] + withdrawnlist[i] - credittakenlist[i]
          }
          console.log('credit+withdrawn-credittaken',this.creditlist)
          console.log('withdrawnlist',withdrawnlist)
          console.log('credittakenkist',credittakenlist)


          var gpax = doc.data().gpax
          const credittaken = doc.data().credit
          const creditWithdrawn = doc.data().creditWithdrawn
    
          var valueneed = (this.gpaxDesired * this.totalcredit)-(gpax*(credittaken-creditWithdrawn))
          console.log('valueneed',valueneed)
          

          var sum =0.0
          var ggg=0
          var ccc=0
          var count=0
          var getout=0

          var numcredit = [0.0 , 0.0 , 0.0 , 0.0 , 0.0]
          numcredit[0]= this.creditlist[0]/1
          numcredit[1]= this.creditlist[1]/2
          numcredit[2]= this.creditlist[2]/3
          numcredit[3]= this.creditlist[3]/4
          numcredit[4]= this.creditlist[4]/6
          numcredit[5]= this.creditlist[5]/9
          console.log('numcredit',numcredit)

          const maxsum1 = numcredit[0]*4.0*1
          const maxsum2 = numcredit[1]*4.0*2
          const maxsum3 = numcredit[2]*4.0*3
          const maxsum4 = numcredit[3]*4.0*4
          const maxsum6 = numcredit[4]*4.0*6
          const maxsum9 = numcredit[5]*4.0*9

          const maxvalue = maxsum1 + maxsum2 + maxsum3 + maxsum4 + maxsum6 +maxsum9

          const leastgradeposs = (gpax*(credittaken-creditWithdrawn))/this.totalcredit
          const maxgradeposs = ((gpax*(credittaken-creditWithdrawn))+maxvalue) /this.totalcredit
          console.log('max grade possible = ',maxgradeposs)
          console.log('least grade poss = ',leastgradeposs)
          

    if(valueneed<=maxvalue && this.gpaxDesired >= leastgradeposs){

    while (getout != 1) {
        if (sum>= valueneed){
          var finalbound = this.gradelist[ggg]
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


    //new

          


      
          var creditt = [1,2,3,4,6,9]
          /*if (numcredit[0] == 0.0){
            creditt[0]=0
          }
          if (numcredit[1] == 0.0){
            creditt[1]=0
          }
          if (numcredit[2] == 0.0){
            creditt[2]=0
          }
          if (numcredit[3] == 0.0){
            creditt[3]=0
          }
          if (numcredit[4] == 0.0){
            creditt[4]=0
          }
          if (numcredit[5] == 0.0){
            creditt[5]=0
          }
          console.log('credit',creditt)*/

          //const numcredit = [5,4,28,0,1,1]
          /*var numcredit = [0.0 , 0.0 , 0.0 , 0.0 , 0.0]
          numcredit[0]= this.creditlist[0]/1
          numcredit[1]= this.creditlist[1]/2
          numcredit[2]= this.creditlist[2]/3
          numcredit[3]= this.creditlist[3]/4
          numcredit[4]= this.creditlist[4]/6
          numcredit[5]= this.creditlist[5]/9
          console.log('numcredit',numcredit)*/

          const need = valueneed
          

          var cc=0
          var countn=0
          var counts=0
          var pivot=0
          var time=1
      
          console.log('final bound',finalbound)
          var gradenow=0
          if (finalbound==0 || finalbound ==1){
            var gradebound =0
          }
          else if (finalbound ==4){
            var gradebound = 3.5

          }
          else{
            var gradebound = finalbound -0.5
          }

          const sum1 = numcredit[0]*gradebound*1
          const sum2 = numcredit[1]*gradebound*2
          const sum3 = numcredit[2]*gradebound*3
          const sum4 = numcredit[3]*gradebound*4
          const sum6 = numcredit[4]*gradebound*6
          const sum9 = numcredit[5]*gradebound*9

          var summ = sum1 + sum2 + sum3 + sum4 + sum6 + sum9
          console.log('sum1',sum1)
          console.log('sum2',sum2)
          console.log('sum3',sum3)
          console.log('sum4',sum4)
          console.log('sum6',sum6)
          console.log('sum9',sum9)
          
          console.log('sumbound',summ)
          console.log('gradebound',gradebound)
      
      
          var countcredit1 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
          var countcredit2 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
          var countcredit3 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
          var countcredit4 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
          var countcredit6 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
          var countcredit9 = { 0.0 :0 , 1.0 :0 , 1.5 :0 , 2.0 :0 , 2.5 :0 , 3.0:0 , 3.5:0, 4.0:0}
      
          countcredit1[gradebound]= numcredit[0] 
          countcredit2[gradebound]= numcredit[1]
          countcredit3[gradebound]= numcredit[2]
          countcredit4[gradebound]= numcredit[3]
          countcredit6[gradebound]= numcredit[4]
          countcredit9[gradebound]= numcredit[5]

          /*const maxsum1 = numcredit[0]*4.0*1
          const maxsum2 = numcredit[1]*4.0*2
          const maxsum3 = numcredit[2]*4.0*3
          const maxsum4 = numcredit[3]*4.0*4
          const maxsum6 = numcredit[4]*4.0*6
          const maxsum9 = numcredit[5]*4.0*9

          const maxvalue = maxsum1 + maxsum2 + maxsum3 + maxsum4 + maxsum6 +maxsum9
          console.log('maxvalue',maxvalue)*/
      
          var sss=''
          while (sss!='done'){

            if (summ  < need && numcredit[cc]!=0.0) {
              summ = summ+ (0.5*creditt[cc])
              console.log(creditt)
              console.log(creditt[cc])
              console.log('numcredit',numcredit)
              gradenow=gradebound+(0.5*time)
              console.log('super error gradebound',gradebound)
              console.log('super error gradenow',gradenow)
              time = time+1

           // }else if (summ < need && numcredit[cc]==0.0){
                //gradenow=gradebound+(0.5*time)
                //console.log('super error gradebound 2 ',gradebound)
               // console.log('super error gradenow 2 ',gradenow)
                //summ = summ +0
                //time = time +1
             //   cc+=1
                
            }

            //if(gradenow!=4){
            if (cc == 0 && numcredit[0]!=0.0){ 
              for (let key in countcredit1) {
                if(key == ''+gradenow && summ> need) {
                  counts+=1
                  countcredit1[gradenow]=counts
                  countcredit1[gradebound] -= counts
                }
              }
            }
            if (cc==1 && numcredit[1]!=0.0){
              for (let key in countcredit2) {
                if(key == ''+gradenow && summ> need) {
                  counts+=1
                  countcredit2[gradenow]=counts
                  countcredit2[gradebound] -= counts
                }
              } 
            }
            if (cc==2 && numcredit[2]!=0.0){
              for (let key in countcredit3) {
                if(key == ''+gradenow && summ> need) {
                  counts+=1
                  countcredit3[gradenow]= counts
                  countcredit3[gradebound] -= counts
                }
              }
            }
            if (cc ==3 && numcredit[3]!=0.0){
              for (let key in countcredit4) {
                if(key == ''+gradenow && summ> need) {
                  console.log('errorr')
                  console.log('gradenow',gradenow)
                  counts+=1
                  countcredit4[gradenow]=counts
                  countcredit4[gradebound] -= counts
                }
              }
            }
            if (cc ==4 && numcredit[4]!=0.0){
              for (let key in countcredit6) {
                if(key == ''+gradenow && summ> need) {
                  counts+=1
                  countcredit6[gradenow]=counts
                  countcredit6[gradebound] -= counts
                }
              }  
            }
            if (cc ==5 && numcredit[5]!=0.0 ){
              for (let key in countcredit9) {
                if(key == ''+gradenow && summ> need) {
                  counts+=1
                  countcredit9[gradenow]=counts
                  countcredit9[gradebound] -= counts
                }
              }
            }
            //}
            if (gradenow ==4.0){
              countn+=1
      
              if (cc ==0){
                for (let key in countcredit1) {
                  if(key == ''+gradenow) {
                    countcredit1[gradenow]=countn
                    countcredit1[gradebound]=numcredit[0]-countn
                  }
                }
              }
              if (cc==1 && numcredit[1]!=0.0){
                for (let key in countcredit2) {
                  if(key == ''+gradenow) {
                    countcredit2[gradenow]=countn
                    countcredit2[gradebound]=numcredit[1]-countn
                  }
                }
              }
              if (cc ==2 && numcredit[2]!=0.0){
                for (let key in countcredit3) {
                  if(key ==  ''+ gradenow ) {
                    countcredit3[gradenow]=countn
                    countcredit3[gradebound]=numcredit[2]-countn
                  }
                }
              }
              if (cc ==3 && numcredit[3]!=0.0){
                for (let key in countcredit4) {
                  if(key == ''+gradenow) {
                    countcredit4[gradenow]=countn
                    countcredit4[gradebound]=numcredit[3]-countn  
                    console.log('error 22')
                  }
                }
              }
              console.log('cc now =',cc)
              console.log(summ)
              if (cc ==4 && numcredit[4]!=0.0){
                console.log('game')
                for (let key in countcredit6) {
                  if(key == ''+gradenow) {
                    countcredit6[gradenow]=countn
                    countcredit6[gradebound]=numcredit[4]-countn
                    console.log('error 6')
                  }
                }
              }
      
              if (cc ==5 && numcredit[5]!=0.0){
                for (let key in countcredit9) {
                  if(key == ''+gradenow ) {
                    countcredit9[gradenow]=countn          
                    countcredit9[gradebound]=numcredit[5]-countn     
                    console.log('error 7')
                  }
                }
              }  
              gradenow =gradebound
              time=1
            }
      
            if (countn == numcredit[pivot] || numcredit[cc]==0.0){
              pivot+=1
              countn=0
              cc+=1
            }
      
            //dict นับว่าในเครดิต มี A กี่ตัว B กี่ตัว ...
            if (summ>=need || cc >5) {
              console.log('this is grade')
              console.log('1',countcredit1)
              console.log('2',countcredit2)
              console.log('3',countcredit3)
              console.log('4',countcredit4)
              console.log('6',countcredit6)
              console.log('9',countcredit9)
              sss = 'done'
              break
            } 
          }

      //list นับว่าในเครดิต มี A กี่ตัว B กี่ตัว ... convert from dict!!
          var countgradeC1 = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          var countgradeC2 = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] 
          var countgradeC3 = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          var countgradeC4 = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          var countgradeC6 = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          var countgradeC9 = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
 
      
          //Credit1
          for (let key in countcredit1) {
            if (key==''+0.0){
              countgradeC1[0]= countcredit1[key]
            }
            if (key==''+1.0){
              countgradeC1[1]= countcredit1[key]
            }
            if (key==''+1.5){
              countgradeC1[2]= countcredit1[key]
            }
            if (key==''+2.0){
              countgradeC1[3]= countcredit1[key]
            }
            if (key==''+2.5){
              countgradeC1[4]= countcredit1[key]
            }
            if (key==''+3.0){
              countgradeC1[5]= countcredit1[key]
            }
            if (key==''+3.5){
              countgradeC1[6]= countcredit1[key]
            }
            if (key==''+4.0){
              countgradeC1[7]= countcredit1[key]
            }
            
          }
      
      
          //Credit2
          for (let key in countcredit2) {
            if (key==''+0.0){
              countgradeC2[0]= countcredit2[key]
            }
            if (key==''+1.0){
              countgradeC2[1]= countcredit2[key]
            }
            if (key==''+1.5){
              countgradeC2[2]= countcredit2[key]
            }
            if (key==''+2.0){
              countgradeC2[3]= countcredit2[key]
            }
            if (key==''+2.5){
              countgradeC2[4]= countcredit2[key]
            }
            if (key==''+3.0){
              countgradeC2[5]= countcredit2[key]
            }
            if (key==''+3.5){
              countgradeC2[6]= countcredit2[key]
            }
            if (key==''+4.0){
              countgradeC2[7]= countcredit2[key]
            }
            
          }
      
          //Credit3
          for (let key in countcredit3) {
            if (key==''+0.0){
              countgradeC3[0]= countcredit3[key]
            }
            if (key==''+1.0){
              countgradeC3[1]= countcredit3[key]
            }
            if (key==''+1.5){
              countgradeC3[2]= countcredit3[key]
            }
            if (key==''+2.0){
              countgradeC3[3]= countcredit3[key]
            }
            if (key==''+2.5){
              countgradeC3[4]= countcredit3[key]
            }
            if (key==''+3.0){
              countgradeC3[5]= countcredit3[key]
            }
            if (key==''+3.5){
              countgradeC3[6]= countcredit3[key]
            }
            if (key==''+4.0){
              countgradeC3[7]= countcredit3[key]
            }
            
          }
      
          //Credit4
          for (let key in countcredit4) {
            if (key==''+0.0){
              countgradeC4[0]= countcredit4[key]
            }
            if (key==''+1.0){
              countgradeC4[1]= countcredit4[key]
            }
            if (key==''+1.5){
              countgradeC4[2]= countcredit4[key]
            }
            if (key==''+2.0){
              countgradeC4[3]= countcredit4[key]
            }
            if (key==''+2.5){
              countgradeC4[4]= countcredit4[key]
            }
            if (key==''+3.0){
              countgradeC4[5]= countcredit4[key]
            }
            if (key==''+3.5){
              countgradeC4[6]= countcredit4[key]
            }
            if (key==''+4.0){
              countgradeC4[7]= countcredit4[key]
            }
            
          }
      
          //Credit6
          for (let key in countcredit6) {
            if (key==''+0.0){
              countgradeC6[0]= countcredit6[key]
            }
            if (key==''+1.0){
              countgradeC6[1]= countcredit6[key]
            }
            if (key==''+1.5){
              countgradeC6[2]= countcredit6[key]
            }
            if  (key==''+2.0){
              countgradeC6[3]= countcredit6[key]
            }
            if (key==''+2.5){
              countgradeC6[4]= countcredit6[key]
            }
            if (key==''+3.0){
              countgradeC6[5]= countcredit6[key]
            }
            if (key==''+3.5){
              countgradeC6[6]= countcredit6[key]
            }
            if (key==''+4.0){
              countgradeC6[7]= countcredit6[key]
            }
            
          }
      
          //Credit9
          for (let key in countcredit9) {
            if (key==''+0.0){
              countgradeC9[0]= countcredit9[key]
            }
            if (key==''+1.0){
              countgradeC9[1]= countcredit9[key]
            }
            if (key==''+1.5){
              countgradeC9[2]= countcredit9[key]
            }
            if (key==''+2.0){
              countgradeC9[3]= countcredit9[key]
            }
            if (key==''+2.5){
              countgradeC9[4]= countcredit9[key]
            }
            if (key==''+3.0){
              countgradeC9[5]= countcredit9[key]
            }
            if (key==''+3.5){
              countgradeC9[6]= countcredit9[key]
            }
            if (key==''+4.0){
              countgradeC9[7]= countcredit9[key]
            }
            
          }
          
          console.log('listgrade1',countgradeC1)
          console.log('listgrade2',countgradeC2)
          console.log('listgrade3',countgradeC3)
          console.log('listgrade4',countgradeC4)
          console.log('listgrade6',countgradeC6)
          console.log('listgrade9',countgradeC9)

      console.log('for credit 1')
      for (let e=0; e<8; e++){
        if (countgradeC1[e] != 0){
          if (e==0){
            console.log('F : ',countgradeC1[e])
          }
          if (e==1){
            console.log('D : ',countgradeC1[e])
          }
          if (e==2){
            console.log('D+ : ',countgradeC1[e])
          }
          if (e==3){
            console.log('C : ',countgradeC1[e])
          }
          if (e==4){
            console.log('C+ : ',countgradeC1[e])
          }
          if (e==5){
            console.log('B : ',countgradeC1[e])
          }
          if (e==6){
            console.log('B+ : ',countgradeC1[e])
          }
          if (e==7){
            console.log('A : ',countgradeC1[e])
          }
        }
      }
      console.log('for credit 2')
      for (let e=0; e<8; e++){
        if (countgradeC2[e] != 0){
          if (e==0){
            console.log('F : ',countgradeC2[e])
          }
          if (e==1){
            console.log('D : ',countgradeC2[e])
          }
          if (e==2){
            console.log('D+ : ',countgradeC2[e])
          }
          if (e==3){
            console.log('C : ',countgradeC2[e])
          }
          if (e==4){
            console.log('C+ : ',countgradeC2[e])
          }
          if (e==5){
            console.log('B : ',countgradeC2[e])
          }
          if (e==6){
            console.log('B+ : ',countgradeC2[e])
          }
          if (e==7){
            console.log('A : ',countgradeC2[e])
          }
        }
      }

      console.log('for credit 3')
      for (let e=0; e<8; e++){
        if (countgradeC3[e] != 0){
          if (e==0){
            console.log('F : ',countgradeC3[e])
          }
          if (e==1){
            console.log('D : ',countgradeC3[e])
          }
          if (e==2){
            console.log('D+ : ',countgradeC3[e])
          }
          if (e==3){
            console.log('C : ',countgradeC3[e])
          }
          if (e==4){
            console.log('C+ : ',countgradeC3[e])
          }
          if (e==5){
            console.log('B : ',countgradeC3[e])
          }
          if (e==6){
            console.log('B+ : ',countgradeC3[e])
          }
          if (e==7){
            console.log('A : ',countgradeC3[e])
          }
        }
      }

      console.log('for credit 4')
      for (let e=0; e<8; e++){
        if (countgradeC4[e] != 0){
          if (e==0){
            console.log('F : ',countgradeC4[e])
          }
          if (e==1){
            console.log('D : ',countgradeC4[e])
          }
          if (e==2){
            console.log('D+ : ',countgradeC4[e])
          }
          if (e==3){
            console.log('C : ',countgradeC4[e])
          }
          if (e==4){
            console.log('C+ : ',countgradeC4[e])
          }
          if (e==5){
            console.log('B : ',countgradeC4[e])
          }
          if (e==6){
            console.log('B+ : ',countgradeC4[e])
          }
          if (e==7){
            console.log('A : ',countgradeC4[e])
          }
        }
      }
      console.log('for credit 6')
      for (let e=0; e<8; e++){
        if (countgradeC6[e] != 0){
          if (e==0){
            console.log('F : ',countgradeC6[e])
          }
          if (e==1){
            console.log('D : ',countgradeC6[e])
          }
          if (e==2){
            console.log('D+ : ',countgradeC6[e])
          }
          if (e==3){
            console.log('C : ',countgradeC6[e])
          }
          if (e==4){
            console.log('C+ : ',countgradeC6[e])
          }
          if (e==5){
            console.log('B : ',countgradeC6[e])
          }
          if (e==6){
            console.log('B+ : ',countgradeC6[e])
          }
          if (e==7){
            console.log('A : ',countgradeC6[e])
          }
        }
      }

      console.log('for credit 9')
      for (let e=0; e<8; e++){
        if (countgradeC9[e] != 0){
          if (e==0){
            console.log('F : ',countgradeC9[e])
          }
          if (e==1){
            console.log('D : ',countgradeC9[e])
          }
          if (e==2){
            console.log('D+ : ',countgradeC9[e])
          }
          if (e==3){
            console.log('C : ',countgradeC9[e])
          }
          if (e==4){
            console.log('C+ : ',countgradeC9[e])
          }
          if (e==5){
            console.log('B : ',countgradeC9[e])
          }
          if (e==6){
            console.log('B+ : ',countgradeC9[e])
          }
          if (e==7){
            console.log('A : ',countgradeC9[e])
          }
        }
      }
          
          

      
    }else{
      console.log('This desired grade is not possible !!')
    }
        
    } else { 
        console.log("No such document!");
        this.presentAlertUsername();
          

    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });



 





  
  const alert = await this.alertController.create({
    header: 'Fetched',
    subHeader: '',
    message: "Please  wait for 5 seconds and click Calculate",
    buttons: ['OK']
  });

  await alert.present();

  
      

 


    }

    
  }


  async maxandmin(){

    if(this.gpaxDesired > 4 || this.gpaxDesired < 0) {
      this.presentAlertGPAX();
      return null;
    }

    if(this.username == "" ) {
      this.presentAlertVOID();
      return null;
    }

    else {

      firebase.firestore().collection("userProfile").doc(this.username).get().then((doc)  => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.gpax = doc.data().gpax;
          this.credit = doc.data().credit;
          this.year = doc.data().year;
          this.major = doc.data().major;
          this.withdrawn = doc.data().withdrawn
          this.creditWithdrawn = doc.data().creditWithdrawn;
          this.withdrawn1 = doc.data().withdrawn1
          this.withdrawn2 = doc.data().withdrawn2
          this.withdrawn3 = doc.data().withdrawn3
          this.withdrawn4 = doc.data().withdrawn4
          this.withdrawn6 = doc.data().withdrawn6
          this.withdrawn9 = doc.data().withdrawn9
          this.semester = doc.data().semester
          this.credit1 = doc.data().credit1
          this.credit2 = doc.data().credit2
          this.credit3 = doc.data().credit3
          this.credit4 = doc.data().credit4
          this.credit6 = doc.data().credit6
          this.credit9 = doc.data().credit9

          this.fillall = true;
          
          const credittakenlist = [this.credit1*1, this.credit2*2, this.credit3*3, this.credit4*4, this.credit6*6, this.credit9*9]


          const cw1 = this.withdrawn1 *1
          const cw2 = this.withdrawn2 *2
          const cw3 = this.withdrawn3 *3
          const cw4 = this.withdrawn4 *4
          const cw6 = this.withdrawn6 *6
          const cw9 = this.withdrawn9 *9


          const withdrawnlist = [cw1,cw2,cw3,cw4,cw6,cw9]



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

          for(let i=0;i<=5;i++){
            this.creditlist[i] = this.creditlist[i] + withdrawnlist[i] - credittakenlist[i]
          }

          var gpax = doc.data().gpax
          const credittaken = doc.data().credit
          const creditWithdrawn = doc.data().creditWithdrawn
    
          var numcredit = [0.0 , 0.0 , 0.0 , 0.0 , 0.0]
          numcredit[0]= this.creditlist[0]/1
          numcredit[1]= this.creditlist[1]/2
          numcredit[2]= this.creditlist[2]/3
          numcredit[3]= this.creditlist[3]/4
          numcredit[4]= this.creditlist[4]/6
          numcredit[5]= this.creditlist[5]/9

          const maxsum1 = numcredit[0]*4.0*1
          const maxsum2 = numcredit[1]*4.0*2
          const maxsum3 = numcredit[2]*4.0*3
          const maxsum4 = numcredit[3]*4.0*4
          const maxsum6 = numcredit[4]*4.0*6
          const maxsum9 = numcredit[5]*4.0*9

          const maxvalue = maxsum1 + maxsum2 + maxsum3 + maxsum4 + maxsum6 +maxsum9

          const leastgradeposs = (gpax*(credittaken-creditWithdrawn))/this.totalcredit
          const maxgradeposs = ((gpax*(credittaken-creditWithdrawn))+maxvalue) /this.totalcredit
          console.log('max grade possible = ',maxgradeposs)
          console.log('least grade poss = ',leastgradeposs)
        }
      
    
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    }
  }

  
  async getdatafromid() {


    if(this.fillall == false) {
      this.presentAlertfetch();
      return null;

    } else {


  this.user = {
    username: this.username,
    gpax: this.gpax,
    gpaxDesired: this.gpaxDesired,
    credit: this.credit,
    year: this.year,
    major: this.major,
    withdrawn: this.withdrawn,
    creditWithdrawn: this.creditWithdrawn,
    withdrawn1: this.withdrawn1,
    withdrawn2: this.withdrawn2,
    withdrawn3: this.withdrawn3,
    withdrawn4: this.withdrawn4,
    withdrawn6: this.withdrawn6,
    withdrawn9: this.withdrawn9,
    credit1: this.credit1,
    credit2: this.credit2,
    credit3: this.credit3,
    credit4: this.credit4,
    credit6: this.credit6,
    credit9: this.credit9,
    semester: this.semester
  
  }
    

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
      header: 'Error',
      subHeader: '',
      message: "Exceed maximum GPAX!",
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

  async presentAlertfetch() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: "Please fill in all the information and click fetch",
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertUsername() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: "Student ID does not exist",
      buttons: ['OK']
    });

    await alert.present();
  }
  

  async test(){
    const adict = { 0: 0, 1: 0, 2: 0, 3: 14, 4: 14, "1.5": 0, "2.5": 0, "3.5": 0 }
   }
}

 