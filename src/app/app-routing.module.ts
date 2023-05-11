import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetUpInterviewComponent } from './pages/set-up-interview/set-up-interview.component';
import { FavoriteMaterialsComponent } from './pages/favorite-materials/favorite-materials.component';
import { InterviewsListComponent } from './pages/interviews-list/interviews-list.component';
import { PathNotFoundComponent } from './core/components/path-not-found/path-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'set-up-interview', component: SetUpInterviewComponent },
  { path: 'favorite-materials', component: FavoriteMaterialsComponent },
  { path: 'interviews-list', component: InterviewsListComponent },
  { path: '**', component: PathNotFoundComponent }
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
