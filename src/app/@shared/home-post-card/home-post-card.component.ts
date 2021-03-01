import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-home-post-card',
  templateUrl: './home-post-card.component.html',
  styleUrls: ['./home-post-card.component.scss'],
})
export class HomePostCardComponent implements OnInit {
  @Input() userName: string;
  @Input() postedDate: string;
  @Input() animalType: string;
  @Input() location: string;
  @Input() imgUrl: string;
  @Input() description: string;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

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
