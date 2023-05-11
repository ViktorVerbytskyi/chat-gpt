import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { FavoriteMaterialsComponent } from './favorite-materials/favorite-materials.component';
import { SetUpInterviewComponent } from './set-up-interview/set-up-interview.component';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    SetUpInterviewComponent,
    FavoriteMaterialsComponent,
    InterviewsListComponent,

  ],
  imports: [
    CommonModule,
    CoreModule,
    NgOptimizedImage,
  ],
  exports: [
    HomeComponent,
    SetUpInterviewComponent,
    FavoriteMaterialsComponent,
    InterviewsListComponent,
  ]
})
export class PagesModule { }