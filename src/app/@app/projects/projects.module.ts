import { ThemeModule } from './../../@theme/theme.module';
import {
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbContextMenuModule,
  NbSelectModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbSidebarModule,
  NbLayoutModule,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { SharedModule } from 'app/@shared/shared.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MapCardComponent } from './components/map-card/map-card.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    DashboardComponent,
    AddProjectComponent,
    MapViewComponent,
    MapCardComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    FormsModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbContextMenuModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    SharedModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
  ],
})
export class ProjectsModule {}
