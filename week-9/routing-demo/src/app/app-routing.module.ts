import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AdminComponent} from './admin/admin.component';
import{UserComponent} from './user/user.component';
import{PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
  path:'admin',
  component:AdminComponent
 },
 {
  path:'pagenotfound',
  component:PagenotfoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
