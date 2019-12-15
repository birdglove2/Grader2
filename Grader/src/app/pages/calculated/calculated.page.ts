import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private platform: Platform, private activatedRoute: ActivatedRoute) { 
    this.homepage =  1000; 
  }

  ngOnInit() {
    this.passedgpax = this.activatedRoute.snapshot.paramMap.get('myid').substring(0,1);
    this.passedusername = this.activatedRoute.snapshot.paramMap.get('myid').substring(1);
  }

  async onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
}

}

