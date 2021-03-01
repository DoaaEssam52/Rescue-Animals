import { Component, OnInit, TemplateRef } from '@angular/core';
import { PagesService } from 'app/@core/utils/service/pages.service';
import { NbDialogService } from '@nebular/theme';
import { CountriesService } from 'app/@core/utils/service/countries.service';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedPhotos: any = [];
  selectedAnimalType: number = -1;
  animalCategory: string;
  animalType: string = '';
  locations;
  streets;
  description;
  selectedCity = 'اختر المحافظة';
  selectedStreet = 'اختر المنطقة';
  dogOptions = [
    { value: 1, name: 'البت بول' },
    { value: 2, name: 'هاسكي' },
    { value: 3, name: 'البيجل' },
    { value: 4, name: 'جولدن' },
    { value: 5, name: 'جيرمن' },
    { value: 6, name: 'لولو' },
    { value: 7, name: 'لا اعلم' },
  ];
  catsOptions = [
    { value: 8, name: 'بلدى' },
    { value: 9, name: 'سيامى' },
    { value: 10, name: 'شيرازى' },
    { value: 11, name: 'مون فيس' },
    { value: 12, name: 'لا اعلم' },
  ];
  constructor(
    private _pagesService: PagesService,
    private dialogService: NbDialogService,
    private _countriesService: CountriesService,
  ) {}
  backgroundUrl() {
    return 'assets/images/header-home.png';
  }
  selectedPhoto(e) {
    if (e !== '') {
      this.selectedPhotos.push(e);
      // this.suggestService(e);
    } else {
      // console.log('empty');
    }
  }
  suggestService(form) {
    this._pagesService.searchPostSuggest({ imgSrc: form }).subscribe((res) => {
      res;
      // console.log('done');
    });
  }
  ngOnInit() {
    this.getLocations();
  }
  getLocations() {
    this._countriesService.getCitiesStreets().subscribe((res) => {
      this.locations = res;
    });
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      closeOnEsc: true,
      dialogClass: 'dialog',
    });
  }
  deleteImg(id) {
    // console.log(this.selectedPhotos);
    this.selectedPhotos.splice(id, 1);
    // console.log(this.selectedPhotos);
  }
  chosenAnimalType(e) {
    if (this.selectedAnimalType < 8) {
      this.animalCategory = 'dog';
      this.animalType = this.dogOptions[this.selectedAnimalType - 1].name;
    } else {
      this.animalCategory = 'cat';
      this.animalType = this.catsOptions[this.selectedAnimalType % 8].name;
    }
  }
  changeCountry(e) {
    e;
    this.streets = this.locations.find(
      (item) => item.city === this.selectedCity,
    ).streets;
    // console.log(this.streets);
  }
}
