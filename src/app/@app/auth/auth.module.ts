import { SharedModule } from 'app/@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {
  NbMenuModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbCheckboxModule,
  NbAlertModule,
  NbInputModule,
  NbFormFieldModule,
  NbLayoutModule,
  NbStepperModule,
} from '@nebular/theme';
import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbFormFieldModule,
    SharedModule,
    NbLayoutModule,
    NbStepperModule,
  ],
})
export class AuthModule {}
