import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import {FormsModule} from '@angular/forms';
import { FormStyle } from '@angular/common';
import { summaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    summaryPipe,
    FavoriteComponent,
    TitleCasePipe
   
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [
    CoursesService,
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
