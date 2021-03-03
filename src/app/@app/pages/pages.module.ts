import { NgModule } from '@angular/core';
import {
  NbIconModule,
  NbMenuModule,
  NbPopoverModule,
  NbStepperModule,
  NbTabsetModule,
  NbDialogModule,
  NbCardModule,
  NbSelectModule,
} from '@nebular/theme';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ThemeModule } from 'app/@theme/theme.module';
import { PagesComponent } from './pages.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { SharedModule } from 'app/@shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    NbTabsetModule,
    FormsModule,
    NbPopoverModule,
    NbStepperModule,
    SharedModule,
    ReactiveFormsModule,
    NbDialogModule,
    NbSelectModule,
    NbCardModule,
    CarouselModule,
  ],
  declarations: [PagesComponent, HomeComponent, OurServicesComponent, ContactUsComponent, AddPostComponent],
})
export class PagesModule {}
