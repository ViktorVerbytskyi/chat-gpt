import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { SetUpInterviewComponent } from "./set-up-interview.component";
import { EditSetUpInterviewComponent } from "./components/edit-set-up-interview/edit-set-up-interview.component";
import { SetUpInterviewRoutingModule } from "./set-up-interview-routing.module";

@NgModule({
  declarations: [
    SetUpInterviewComponent,
    EditSetUpInterviewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgOptimizedImage,
    RouterModule,
    SetUpInterviewRoutingModule
  ],
  exports: [
    SetUpInterviewComponent,
    EditSetUpInterviewComponent
  ]
})
export class SetUpInterviewModule { }
