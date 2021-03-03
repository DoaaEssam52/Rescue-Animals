import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from 'app/@core/utils/service/pages.service';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,private _pagesService:PagesService,private datePipe:DatePipe) {
    this. getPosts();
  }
  missedPosts:any;
  foundPosts:any;
  getPosts(){
    this._pagesService
    .getPosts('missed')
    .subscribe((res) => {
      this.missedPosts=res;
      console.log(this.missedPosts);
    });
    this._pagesService
    .getPosts('found')
    .subscribe((res) => {
      this.foundPosts=res;
      console.log(this.foundPosts);
    });
  }
  backgroundUrl() {
    return 'assets/images/header-home.png';
  }
  addPost(e) {
    this.router.navigate(['pages/add-post',e]);
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
  ngOnInit() {}
}
