import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpConnectionService {
  fixedUrl = environment.prefixUrl;
  constructor(private _httpClient: HttpClient) {}
  getData(url) {
    return this._httpClient.get(this.fixedUrl + url);
  }
  postData(url, body) {
    return this._httpClient.post(this.fixedUrl + url, body);
  }
  deletePost(url, id) {
    return this._httpClient.delete(`${this.fixedUrl + url}/${id}`);
  }
}
