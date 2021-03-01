import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() serviceTitle:string;
  @Input() serviceDescription:string;
  constructor(private dialogService: NbDialogService,) { }

  ngOnInit(): void {}
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {  });
  }
}
