import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './pages.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthGuard } from 'app/@core/utils/service/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'services',
      component: OurServicesComponent,
    },
    {
      path: 'contact-us',
      component: ContactUsComponent,
    },
    {
      path: 'add-post/:type',
      component: AddPostComponent,
      canActivate:[AuthGuard],
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: HomeComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
