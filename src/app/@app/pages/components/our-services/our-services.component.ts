import { Component, OnInit, ViewChild } from "@angular/core";
import { NbPopoverDirective } from "@nebular/theme";
import { PagesService } from 'app/@core/utils/service/pages.service'; 
@Component({
  selector: "ngx-service-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.scss"],
})
export class OurServicesComponent implements OnInit {
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;
  model = { suggestArea: "" };
  servicesData = [
    {
      title: "المساعدة علي ايجاد الحيوانات المفقودة",
      description:
        "نحن نساعد من تاه حيوانه علي محاولة ايجاده يتم ذلك من خلال ان الشخص يكتب مواصفات حيوانه و متي و اين فقده ، كماانه يوفر بياناته للتواصل معه حين ايجاده",
    },
    {
      title: "المساعدة علي ايجاد اقرب شلاتر ",
      description:
        "لأننا نعلم أن ليس كل من يريد مساعدة الحيوان التائه يستطيع ايجاد مكان ليوفره له لحين ايجاد صاحب الحيوان ، فقد فكرنا فى تقديم هذه الخدمة و هى أن نقترح له اقرب شلاتر للحيوانات متوفر بها أماكن",
    },
    {
      title: "المساعدة علي ايجاد اقرب بيطرين ",
      description:
        "نحن نساعد من ضل حيوانه علي محاولة ايجاده يتم ذلك من خلال ان الشخص  يكتب مواصفات حيوانه و تفاصيل فقده متي و اين ، كماانه يوفر بياناته للتواصل معه",
    },
  ];
  constructor(private _pagesService: PagesService) {}
  ngOnInit(): void {}
  backgroundUrl() {
    return "assets/images/services.png";
  }
  suggestUrl() {
    return "assets/images/suggest.jpg";
  }
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
