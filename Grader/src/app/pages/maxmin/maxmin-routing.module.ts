import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaxminPage } from './maxmin.page';

const routes: Routes = [
  {
    path: '',
    component: MaxminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaxminPageRoutingModule {}
