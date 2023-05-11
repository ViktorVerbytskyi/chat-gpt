import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DndDirective } from './directives/dnd.directive';
import {NgOptimizedImage} from "@angular/common";
import { SetUpInterviewComponent } from './pages/set-up-interview/set-up-interview.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FileDropComponent } from './components/file-drop/file-drop.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoriteMaterialsComponent } from './pages/favorite-materials/favorite-materials.component';
import { InterviewsListComponent } from './pages/interviews-list/interviews-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    DndDirective,
    SetUpInterviewComponent,
    HeaderComponent,
    FileDropComponent,
    HomeComponent,
    FooterComponent,
    FavoriteMaterialsComponent,
    InterviewsListComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
