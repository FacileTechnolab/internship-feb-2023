import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PortfolioComponent } from './Portfolio/Portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent  
  },
  {
    path:'portfoliodetail',
    component: PortfolioComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
