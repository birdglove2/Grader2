import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-calculated',
  templateUrl: './calculated.page.html',
  styleUrls: ['./calculated.page.scss'],
})
export class CalculatedPage implements OnInit {
  homepage
  buttonClicked: boolean = false; 
  constructor(private platform: Platform) { 
    this.homepage =  1000; 
  }

  ngOnInit() {
  }

  async onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
}

}

