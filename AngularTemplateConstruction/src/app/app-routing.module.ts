import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ServicesComponent } from './services/services.component';
import { ServicesdetailsComponent } from './services/servicesdetails/servicesdetails.component';
import { ProjectdetailsComponent } from './projects/projectdetails/projectdetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'UpConstruction - Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'UpConstruction - About'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'UpConstruction - Services'
  },
  {
    path: 'services/services-details/:id',
    component: ServicesdetailsComponent,
    title: 'UpConstruction -  Services - Services Details'
  },
  
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'UpConstruction - Projects'
  },
  {
    path: 'projects/projects-details/:id',
    component: ProjectdetailsComponent,
    title: 'UpConstruction - Projects Details'
  },
 
  {
    path: 'blog',
    component:BlogComponent,
    title: 'UpConstruction - Blog'

  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
    title: 'UpConstruction - Blog Details'

  },
  {
    path: 'contact',
    component:ContactComponent,
    title: 'UpConstruction - Contact'

  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
