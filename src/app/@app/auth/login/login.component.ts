import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "app/@core/utils/service/authentication.service";
@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  showPassword = false;
  model = { userName: "", userPassword: "" };
  constructor(
    private router: Router,
    private _authService: AuthenticationService
  ) {}
  ngOnInit(): void {}
  getInputType() {
    if (this.showPassword) {
      return "text";
    }
    return "password";
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  submitForm(form) {
    if (form.valid) {
      this.login(this.model);
    }
  }
  login(loginForm) {
    this._authService.checkRegistered().subscribe((res) => {
      const data: any = res;
      const user = data.find((data) => data.userName == loginForm.userName);
      if (user != undefined) {
        if (user.userPassword == loginForm.userPassword) {
          localStorage.setItem("userData", JSON.stringify(user));
          this.router.navigate(["/pages/home"]);
        } else {
          window.alert("wrong password");
        }
      } else {
        window.alert("اسم المستخدم غير مسجل يرجي انشاء حساب");
        this.routeToRegister();
      }
    });
  }
  routeToRegister() {
    this.router.navigate(["auth/register"]);
  }
}
