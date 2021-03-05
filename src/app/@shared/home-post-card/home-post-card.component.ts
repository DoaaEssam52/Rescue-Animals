import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  TemplateRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-home-post-card',
  templateUrl: './home-post-card.component.html',
  styleUrls: ['./home-post-card.component.scss'],
})
export class HomePostCardComponent {
  @Input() cardData: any;
  @Input() profile: false;
  @Output() deleteID = new EventEmitter<number>();
  userDetails = false;
  constructor(
    private dialogService: NbDialogService,
    private datePipe: DatePipe,
  ) {}
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      closeOnEsc: true,
      dialogClass: 'dialog',
    });
  }
  openPost() {
    // this._pagesService.deletePost('', this.cardData['id']).subscribe((res) => {
    //   console.log(res);
    // });
    this.deleteID.emit(this.cardData['id']);
  }
  showUserData() {
    this.userDetails = true;
  }
  backgroundUrl() {
    return 'assets/images/dog2.jpg';
  }
}
