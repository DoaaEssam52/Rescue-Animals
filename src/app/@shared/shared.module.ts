import {
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbFormFieldModule,
  NbInputModule,
  NbDialogModule,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePostCardComponent } from './home-post-card/home-post-card.component';
import { ImagePickerComponent } from './image-picker/image-picker.component';
ReactiveFormsModule;
@NgModule({
  declarations: [HomePostCardComponent, ImagePickerComponent, ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbContextMenuModule,
    NbFormFieldModule,
    NbInputModule,
    NbDialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HomePostCardComponent,
    ImagePickerComponent,
  ],
  entryComponents: [
    HomePostCardComponent,
    ImagePickerComponent,
  ],
})
export class SharedModule {
}
