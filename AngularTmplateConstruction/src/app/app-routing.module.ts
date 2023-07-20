import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ServicesComponent } from './services/services.component';
import { ServicesdetailsComponent } from './servicesdetails/servicesdetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'services-details',
    component: ServicesdetailsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'blog',
    component:BlogComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
