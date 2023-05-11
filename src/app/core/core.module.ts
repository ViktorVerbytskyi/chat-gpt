import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { DndDirective } from './directives/dnd.directive';
import { ProgressComponent } from './components/progress/progress.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PathNotFoundComponent,
    DndDirective,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PathNotFoundComponent,
    DndDirective,
    ProgressComponent
  ]
})
export class CoreModule { }
