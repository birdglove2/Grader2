import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatedPage } from './calculated.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatedPageRoutingModule {}
