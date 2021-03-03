import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CountriesService } from 'app/@core/utils/service/countries.service';
import { PagesService } from 'app/@core/utils/service/pages.service';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  selectedPhotos: any = [];
  selectedAnimalType: number = -1;
  animalCategory: string;
  animalType: string = '';
  locations;
  streets;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;
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
    private _countriesService: CountriesService,
  ) {}
  backgroundUrl() {
    return 'assets/images/header-home.png';
  }
  selectedPhoto(e) {
    if (e !== '') {
      this.selectedPhotos.push(e);
    } else {
    }
  }
  suggestService(form) {
    this._pagesService.searchPostSuggest({ imgSrc: form }).subscribe((res) => {
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
  deleteImg(id) {
    this.selectedPhotos.splice(id, 1);
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
  }

}
