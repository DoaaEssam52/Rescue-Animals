import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-home-post-card',
  templateUrl: './home-post-card.component.html',
  styleUrls: ['./home-post-card.component.scss'],
})
export class HomePostCardComponent {
  @Input() cardData: any;
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
  backgroundUrl() {
    return 'assets/images/dog2.jpg';
  }
}
