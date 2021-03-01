import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "app/@core/utils/service/authentication.service";
import { CountriesService } from "app/@core/utils/service/countries.service";
@Component({
  selector: "ngx-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  requiredString = "يرجى ادخال ";
  showPassword1 = false;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  namesErrors = false;
  passwordErrors = false;
  selectedCity = "اختر المحافظة";
  selectedStreet = "اختر المنطقة";
  locations;
  streets;
  registerData = {
    firstName: "",
    lastName: "",
    userName: "",
    userMobile: "",
    userMail: "",
    userPassword: "",
    userCity: "",
    userStreet: "",
  };
  constructor(
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    private router: Router,
    private _countriesService: CountriesService
  ) {}
  ngOnInit() {
    this.getLocations();
    this.firstForm = this.fb.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      userName: [
        "",
        [
          Validators.required,
          Validators.pattern(`[a-zA-Z0-9_]*`),
          Validators.minLength(4),
        ],
      ],
      userMobile: [
        "",
        [Validators.required, Validators.pattern(`^(01)(0|1|2|5)[0-9]{8}$`)],
      ],
    });
    this.secondForm = this.fb.group({
      userMail: ["", [Validators.required, Validators.email]],
      userPassword: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  getLocations() {
    this._countriesService.getCitiesStreets().subscribe((res) => {
      this.locations = res;
    });
  }
  getInputType1() {
    if (this.showPassword1) {
      return "text";
    }
    return "password";
  }
  toggleShowPassword1() {
    this.showPassword1 = !this.showPassword1;
  }
  register(registerForm) {
    this._authService.postRegister(registerForm).subscribe((res) => {
      localStorage.setItem("userData", JSON.stringify(registerForm));
      this.router.navigate(["/pages/home"]);
    });
  }
  formOneSubmit() {
    if (this.firstForm.invalid) {
      this.namesErrors = true;
    }
  }
  formTwoSubmit() {
    if (this.secondForm.invalid) {
      this.passwordErrors = true;
    }
  }
  changeCountry(e) {
    this.streets = this.locations.find(
      (item) => item.city === this.selectedCity,
    ).streets;
  }
  submitForms() {
    this.registerData.firstName = this.firstForm.controls["firstName"].value;
    this.registerData.lastName = this.firstForm.controls["lastName"].value;
    this.registerData.userName = this.firstForm.controls["userName"].value;
    this.registerData.userMobile = this.firstForm.controls["userMobile"].value;
    this.registerData.userMail = this.secondForm.controls["userMail"].value;
    this.registerData.userPassword = this.secondForm.controls[
      "userPassword"
    ].value;
    this.registerData.userCity = this.selectedCity;
    this.registerData.userStreet = this.selectedStreet;
    this.register(this.registerData);
  }
}
