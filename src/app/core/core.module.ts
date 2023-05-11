import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { DndDirective } from './directives/dnd.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { HeaderComponent } from './components/header/header.component';
import { FileDropComponent } from './components/file-drop/file-drop.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PathNotFoundComponent,
    DndDirective,
    ProgressComponent,
    FileDropComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PathNotFoundComponent,
    DndDirective,
    ProgressComponent,
    FileDropComponent,
  ]
})
export class CoreModule { }
