import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }


  async openurlice(){
    window.open("http://www.ise.eng.chula.ac.th/academics/ice/curriculum",'_system', 'location=yes');
  }

  async openurladme(){
    window.open("http://www.ise.eng.chula.ac.th/academics/adme/curriculum",'_system', 'location=yes');
  }

  async openurlaero(){
    window.open("http://www.ise.eng.chula.ac.th/academics/aero/curriculum",'_system', 'location=yes');
  }

  async openurlnano(){
    window.open("http://www.ise.eng.chula.ac.th/academics/nano/curriculum",'_system', 'location=yes');
  }

  async openurlai(){
    window.open("http://www.ise.eng.chula.ac.th/academics/robotics-ai/curriculum",'_system', 'location=yes');
  }


}
