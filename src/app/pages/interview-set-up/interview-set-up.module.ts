import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { InterviewSetUpComponent } from './interview-set-up.component';
import { CoreModule } from '../../core/core.module';
import { EditInterviewSetUpComponent } from './components/edit-interview-set-up/edit-interview-set-up.component';
import { InterviewSetUpRoutingModule } from './interview-set-up-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    InterviewSetUpComponent,
    EditInterviewSetUpComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgOptimizedImage,
    RouterModule,
    InterviewSetUpRoutingModule
  ],
  exports: [
    HomeComponent,
    InterviewSetUpComponent,
    EditInterviewSetUpComponent
  ]
})
export class InterviewSetUpModule { }
