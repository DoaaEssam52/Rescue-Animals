import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
  selector: 'ngx-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @Output() emitPhoto = new EventEmitter<string>();
  selectedPhoto: any;
  stringifiedImg: string = '';
  message: string = 'لم يتم اختيار صورة';
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;
  constructor() {}
  ngOnInit(): void {}
  ImgToBase64(file) {
    const reader = new FileReader();
    reader.onload = this._ImgToBase64Done.bind(this);
    reader.readAsBinaryString(file);
  }
  _ImgToBase64Done(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.stringifiedImg = btoa(binaryString);
    this.emitPhoto.emit(this.stringifiedImg);
  }
  checkImage(e) {
    if (e.target.files[0]) {
      if (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e.target.files[0].name)) {
        this.selectedPhoto = e.target.files[0];
        this.message = this.selectedPhoto.name;
        this.ImgToBase64(this.selectedPhoto);
      } else {
        this.message = 'No image choosen';
        this.emitPhoto.emit(null);
      }
    }
  }
}
