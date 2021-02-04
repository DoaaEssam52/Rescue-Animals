import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MapFeaturesService } from '../../map-features.service';
@Component({
  selector: 'ngx-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: any;
  chosenFilter: number = 4;
  projectId: any;
  assetId: any;
  imageItems = [
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  constructor(private _mapFeature: MapFeaturesService, private datePipe: DatePipe) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.images = [];
  }
  ngOnInit() {
    this.getImages();
    this.sortTableByDate();
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
  sortTableByDate() {
    this.images.sort((val1, val2) => {
      return val2.createdAt - val1.createdAt;
    });
  }
  getImages() {
    this._mapFeature
      .getAssetFiles(this.assetId, 'image')
      .subscribe((res) => {
        this.images = res.data.items;
        // console.log(this.images);
      });
  }
  oneChoosed() {
    this.chosenFilter = 1;
  }
  fourChoosed() {
    this.chosenFilter = 4;
  }
  nineChoosed() {
    this.chosenFilter = 9;
  }
}
