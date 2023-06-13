import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {RoutuserComponent} from './routuser/routuser.component';
import{PageNfComponent} from './page-nf/page-nf.component';


const routes: Routes = [
  {
    path : 'admin',
    component:AdminComponent 
  },
  {
    path : 'routuser',
    component:RoutuserComponent
  },
  {
    path : '**',
    component:PageNfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
