import { DatePipe } from '@angular/common';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-card-map',
  templateUrl: './card-map.component.html',
  styleUrls: ['./card-map.component.scss'],
})
export class CardMapComponent implements OnInit {

  toggle: boolean = false;
  // @Input() pname: string;
  // @Input() description: string;
  // @Input() imgUrl: string;
  // @Input() createdAt: any;
  @Input() cardData:object;
  @Input() isActive: boolean = false;
  items = [
    { title: 'IoT Monitoring' },
    { title: 'Data Analytics' },
    { title: 'Models' },
    { title: 'Point Cloud' },
    { title: 'Project Management' },
  ];
  constructor(private router: Router,private datePipe:DatePipe) {}

  ngOnInit() {}
  toggleMenu() {
    this.toggle = !this.toggle;
  }
  getClass() {
    if (this.isActive) {
     return 'active';
    }
  }
  routerFeatures() {
    this.router.navigate([`/projects/${this.cardData['id']}`]);
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split("T")[0];
    return this.datePipe.transform(dateParsed, "MM-dd-yyyy");
  }

}
