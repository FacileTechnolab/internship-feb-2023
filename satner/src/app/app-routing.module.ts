import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './Services/Services.component';
import { PortfolioComponent } from './portfolio/portfolio.component'
const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
}, {
  path: 'Services',
  component: ServicesComponent
},
{
  path: 'Services',
  component: ServicesComponent
},
{
  path: 'portfolio',
  component: PortfolioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
