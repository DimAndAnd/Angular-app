import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ErrorComponent } from './error/error.component';
import { UserModule } from './user/user.module';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './blog/about.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddThemeComponent,
    CurrentThemeComponent,
    TrainersComponent,
    ErrorComponent,
    PostsListComponent,
    ThemesListComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
