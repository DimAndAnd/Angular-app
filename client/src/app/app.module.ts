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
import { PostsListComponent } from './posts-list/posts-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ThemesListComponent } from './themes-list/themes-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainersComponent,
    ErrorComponent,
    PostsListComponent,
    ThemesListComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule, 
    HttpClientModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
