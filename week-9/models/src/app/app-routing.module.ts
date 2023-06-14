import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ListComponent} from './admin/list/list.component'
import{LoginComponent} from './admin/login/login.component'

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
