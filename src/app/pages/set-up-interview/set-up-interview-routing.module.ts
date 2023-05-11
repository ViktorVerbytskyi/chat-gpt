import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetUpInterviewComponent } from './set-up-interview.component';
import { EditSetUpInterviewComponent } from './components/edit-set-up-interview/edit-set-up-interview.component';


const routes: Routes = [
  {
    path: '',
    component: SetUpInterviewComponent
  },
  {
    path: 'edit',
    component: EditSetUpInterviewComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SetUpInterviewRoutingModule {}
