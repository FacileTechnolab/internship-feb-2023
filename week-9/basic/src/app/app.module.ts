import { AuthorsModule } from './authors/authors.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutherComponent } from './auther/auther.component';

@NgModule({
  declarations: [
    AppComponent,
    AutherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
