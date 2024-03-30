import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './blog/about.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AuthActivate } from './guards/auth.activate';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'trainers', component: TrainersComponent },
  {
    path: 'blog',
    children: [
      { path: '', pathMatch: 'full', component: AboutComponent },
      { path: ':themeId', component: CurrentThemeComponent }
    ],
  },
  { path: 'add-theme', component: AddThemeComponent, canActivate: [AuthActivate], },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
