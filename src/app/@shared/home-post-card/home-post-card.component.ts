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
  @Output() updatePost = new EventEmitter<any>();
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
  showUserData() {
    this.userDetails = true;
  }
  backgroundUrl() {
    return 'assets/images/dog2.jpg';
  }
  deletePost() {
    this.deleteID.emit(this.cardData['id']);
  }
  editPost() {
    this.updatePost.emit(this.cardData);
  }
}
