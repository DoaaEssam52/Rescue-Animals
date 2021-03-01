import { Component, OnInit, ViewChild } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';
import { PagesService } from 'app/@core/utils/service/pages.service';

@Component({
  selector: 'ngx-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;
  model = { contactUs: '' };
  constructor(private _pagesService: PagesService) {}

  ngOnInit(): void {}
  suggestService(form) {
    if (form.valid) {
      this._pagesService.postSuggest(this.model).subscribe((res) => {
        this.popover.show();
        setTimeout(() => {
          this.popover.hide();
        }, 3000);
      });
    }
  }
}
