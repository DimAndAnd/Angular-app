import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './blog/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'trainers', component: TrainersComponent },
  {path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/404' },
  { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
