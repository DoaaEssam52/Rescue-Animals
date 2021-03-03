import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  backgroundUrl() {
    return "assets/images/header-home.png";
  }
  addPost() {
    this.router.navigate(["pages/add-post"]);
  }
  ngOnInit() {}
}
