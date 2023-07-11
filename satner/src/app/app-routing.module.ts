import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './Services/Services.component';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ElementsComponent } from './elements/elements.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { BlogdetailsComponent } from './Blogdetails/Blogdetails.component';
import { BlogComponent } from './Blog/Blog.component';
import { ContactComponent } from './Contact/Contact.component';
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
}, {
  path: 'elements',
  component: ElementsComponent
},
{
  path: 'portfolio-details',
  component: PortfolioDetailsComponent
},
{
  path: 'Blog',
  component: BlogComponent
},
{
  path: 'Blogdetails',
  component: BlogdetailsComponent
},
{
  path: 'Contact',
  component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
