import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  userFullName: any;
  user: any;
  userMenu = [{ title: 'الصفحة الشخصية' }, { title: 'تسجيل الخروج' }];
  isShown: boolean = false;
  constructor(private menuService: NbMenuService) {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      this.loggedIn = true;
      this.userFullName = `${user['firstName']} ${user['lastName']}`;
    }
  }
  ngOnInit() {
    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'userMenu'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        if (title === 'الصفحة الشخصية') {
        }
        if (title === 'تسجيل الخروج') {
          this.loggedIn = false;
          localStorage.removeItem('userData');
        }
      });
  }
}
