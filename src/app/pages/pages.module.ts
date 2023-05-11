import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { InterviewSetUpComponent } from './interview-set-up/interview-set-up.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    InterviewSetUpComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgOptimizedImage,
  ],
  exports: [
    HomeComponent,
    InterviewSetUpComponent
  ]
})
export class PagesModule { }
