import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.services';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent


  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
