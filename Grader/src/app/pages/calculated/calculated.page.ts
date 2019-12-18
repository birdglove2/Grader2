import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'app-calculated',
  templateUrl: './calculated.page.html',
  styleUrls: ['./calculated.page.scss'],
})
export class CalculatedPage implements OnInit {
  homepage
  buttonClicked: boolean = false; 
  passedgpax = null;
  passedusername = "";
  data: any;
 // maxgrade: any;
  //mingrade: any;
  constructor(private platform: Platform, private activatedRoute: ActivatedRoute, private router: Router, public navCtrl: NavController, public navParams: NavParams) { 
    this.homepage =  1000; 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('params: ',params);
      if(params && params.special) {
        this.data = JSON.parse(params.special);
      }
    })
   // this.maxgrade = navParams.get('maxgradeposs');
    //this.mingrade = navParams.get('leastgradeposs');
  }

  ngOnInit() {
   // this.passedgpax = this.activatedRoute.snapshot.paramMap.get('myid').substring(0,1);
    //this.passedusername = this.activatedRoute.snapshot.paramMap.get('myid').substring(1);
  }

  async onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
}

}

