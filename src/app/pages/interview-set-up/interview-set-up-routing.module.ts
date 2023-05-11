import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterviewSetUpComponent} from "./interview-set-up.component";
import {
  EditInterviewSetUpComponent
} from "./components/edit-interview-set-up/edit-interview-set-up.component";


const routes: Routes = [
  {
    path: 'interview-set-up',
    component: InterviewSetUpComponent
  },
  {
    path: 'interview-set-up/edit',
    component: EditInterviewSetUpComponent
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
export class InterviewSetUpRoutingModule {}
