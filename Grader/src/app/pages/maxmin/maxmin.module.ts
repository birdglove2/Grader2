import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaxminPageRoutingModule } from './maxmin-routing.module';

import { MaxminPage } from './maxmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaxminPageRoutingModule
  ],
  declarations: [MaxminPage]
})
export class MaxminPageModule {}
