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
  component: HomeComponent,
  title: 'Satner Portfolio'
},
{
  path: 'about',
  component: AboutComponent,
  title: 'About Us'
},
{
  path: 'Services',
  component: ServicesComponent,
  title: 'Services'
},

{
  path: 'portfolio',
  component: PortfolioComponent,
  title: 'Portfolio'
}, {
  path: 'elements',
  component: ElementsComponent,
  title: 'Elements'
},
{
  path: 'portfolio-details',
  component: PortfolioDetailsComponent,
  title: 'Portfolio Details'
},
{
  path: 'Blog',
  component: BlogComponent,
  title: 'Blog'

},
{
  path: 'Blogdetails',
  component: BlogdetailsComponent,
  title: 'Blog Details'
},
{
  path: 'Contact',
  component: ContactComponent,
  title: 'Contact Us'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
