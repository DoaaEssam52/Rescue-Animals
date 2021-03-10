import { Component, OnInit } from '@angular/core';
import { PagesService } from 'app/@core/utils/service/pages.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userName: string;
  missedPosts;
  constructor(private _pagesService: PagesService) {}

  ngOnInit(): void {
    this.getPosts();
    this.userName = JSON.parse(localStorage.getItem('userData'))['userName'];
  }
  getPosts() {
    this._pagesService.getPosts('missed').subscribe((res) => {
      //  this.missedPosts =res.find((item) => item.userName === this.userName);
      this.missedPosts = res;
    });
  }
  deletePost(e) {
    this._pagesService.deletePost('missed', e).subscribe((res) => {
      this.getPosts();
    });
  }
  editPost(e) {
    // console.log(e);
  }
}
