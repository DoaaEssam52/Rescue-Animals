import { Injectable } from '@angular/core';
import { HttpConnectionService } from './http-connection.service';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private _httpService: HttpConnectionService) {}
  getCitiesStreets() {
    return this._httpService.getData('/locations');
  }
}
