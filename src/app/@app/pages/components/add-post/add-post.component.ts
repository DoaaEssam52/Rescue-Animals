import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'app/@core/utils/service/countries.service';
import { PagesService } from 'app/@core/utils/service/pages.service';
@Component({
  selector: 'ngx-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postData = {
    userName: '',
    userMail: '',
    userMobile: '',
    datePosted: new Date(),
    selectedPhotos: [],
    selectedType: 'اختر نوع الحيوان',
    selectedCategory: 'اختر فصيلة الحيوان',
    selectedCity: '',
    selectedStreet: '',
    description: '',
  };
  postType = '';
  animalCategories = [];
  locations;
  streets = [];
  userData;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  description;
  dogOptions = [
    { name: 'البت بول' },
    { name: 'هاسكي' },
    { name: 'البيجل' },
    { name: 'جولدن' },
    { name: 'جيرمن' },
    { name: 'لولو' },
    { name: 'لا اعلم' },
  ];
  catsOptions = [
    { name: 'بلدى' },
    { name: 'سيامى' },
    { name: 'شيرازى' },
    { name: 'مون فيس' },
    { name: 'لا اعلم' },
  ];
  constructor(
    private _countriesService: CountriesService,
    private activateRoute: ActivatedRoute,
    private route: Router,
    private _pagesService: PagesService,
  ) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.postData.userName = this.userData.userName;
    this.postData.userMail = this.userData.userMail;
    this.postData.userMobile = this.userData.userMobile;
    this.postData.selectedCity = this.userData.userCity;
    this.postData.selectedStreet = this.userData.userStreet;
    this.activateRoute.params.subscribe((params) => {
      this.postType = params['type'];
    });
  }
  selectedPhoto(photo) {
    if (photo !== '') {
      console.log(photo);
      this.postData.selectedPhotos.push(photo);
    }
  }
  ngOnInit() {
    this.getLocations();
  }
  getLocations() {
    this._countriesService.getCitiesStreets().subscribe((res) => {
      this.locations = res;
      this.streets = this.locations.find(
        (item) => item.city === this.postData.selectedCity,
      ).streets;
    });
  }
  deleteImg(id) {
    this.postData.selectedPhotos.splice(id, 1);
  }
  changeCountry(e) {
    this.streets = this.locations.find(
      (item) => item.city === this.postData.selectedCity,
    ).streets;
  }
  changeType(e) {
    if (this.postData.selectedType === 'كلب') {
      this.animalCategories = this.dogOptions;
    } else if (this.postData.selectedType === 'قطة') {
      this.animalCategories = this.catsOptions;
    }
  }
  postForm() {
    this._pagesService
      .publishPost(this.postData, this.postType)
      .subscribe((res) => {
        window.alert('تم النشر');
        this.route.navigate(['/pages/home']);
      });
  }
}
