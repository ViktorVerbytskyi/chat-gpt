import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PathNotFoundComponent } from './core/components/path-not-found/path-not-found.component';
import { InterviewSetUpComponent } from './pages/interview-set-up/interview-set-up.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'interview-set-up',
    component: InterviewSetUpComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
