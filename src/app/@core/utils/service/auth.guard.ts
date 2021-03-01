import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}
  canActivate() {
    if (!localStorage.getItem('userData')) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
  canActivateChild() {
    if (localStorage.getItem('userData')) {
      this.router.navigate(['/pages']);
      return false;
    }
    return true;
  }
}
