import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UserAuthModule { }
