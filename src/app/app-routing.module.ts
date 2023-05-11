import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetUpInterviewComponent } from './pages/set-up-interview/set-up-interview.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoriteMaterialsComponent } from './pages/favorite-materials/favorite-materials.component';
import { InterviewsListComponent } from './pages/interviews-list/interviews-list.component';

const routes: Routes = [
  { path: '#', component: HomeComponent },
  { path: 'set-up-interview', component: SetUpInterviewComponent },
  { path: 'favorite-materials', component: FavoriteMaterialsComponent },
  { path: 'interviews-list', component: InterviewsListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
