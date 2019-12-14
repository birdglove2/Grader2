import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatedPageRoutingModule } from './calculated-routing.module';

import { CalculatedPage } from './calculated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatedPageRoutingModule
  ],
  declarations: [CalculatedPage]
})
export class CalculatedPageModule {}
