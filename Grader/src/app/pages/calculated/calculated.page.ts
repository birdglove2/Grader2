import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
// import { CalculatorPage } from '../calculator/calculator.page';

@Component({
  selector: 'app-calculated',
  templateUrl: './calculated.page.html',
  styleUrls: ['./calculated.page.scss'],
})
export class CalculatedPage implements OnInit {
  homepage
  buttonClicked1: boolean = false; 
  buttonClicked2: boolean = false; 
  passedgpax = null;
  passedusername = "";
  data: any;
  creditleft
  creditleft1
  creditleft2
  creditleft3
  creditleft4
  creditleft6
  creditleft9
 // maxgrade: any;
  //mingrade: any;
  constructor(private platform: Platform, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.homepage =  1000; 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('params: ',params);
      if(params && params.special) {
        this.data = JSON.parse(params.special);
      }
      this.creditleft = (this.data.totalcredit-this.data.credit+this.data.creditWithdrawn);

     /* if(this.data.gradecredit1.a1 > 0) {  
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.a1;
      }
      if(this.data.gradecredit1.bp1> 0) {
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.bp1;
      }
      if(this.data.gradecredit1.b1> 0) {
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.b1;
      }
      if(this.data.gradecredit1.cp1> 0) {
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.cp1;
      }
      if(this.data.gradecredit1.c1> 0) {
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.c1;
      }
      if(this.data.gradecredit1.dp1> 0) {
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.dp1;
      }
      if(this.data.gradecredit1.d1> 0) {
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.d1;
      }
      if(this.data.gradecredit1.f1> 0) {
        this.creditleft1 = this.creditleft1+this.data.gradecredit1.f1;
      } */
    })

    
   // this.maxgrade = navParams.get('maxgradeposs');
    //this.mingrade = navParams.get('leastgradeposs');
  }

  ngOnInit() {
   // this.passedgpax = this.activatedRoute.snapshot.paramMap.get('myid').substring(0,1);
    //this.passedusername = this.activatedRoute.snapshot.paramMap.get('myid').substring(1);
  }

  async onButtonClick1() {
    
    this.buttonClicked1 = true;
    this.buttonClicked2 = false;
  }
  async onButtonClick2() {
    
    this.buttonClicked2 = true;
    this.buttonClicked1 = false;
    
  }

}

