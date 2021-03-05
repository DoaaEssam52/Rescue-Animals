import { Injectable } from '@angular/core';
import { HttpConnectionService } from './http-connection.service';
@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private _httpService: HttpConnectionService) {}
  postSuggest(body) {
    return this._httpService.postData('/servicesIdeas', body);
  }
  searchPostSuggest(body) {
    return this._httpService.postData('/searchForPosts', body);
  }
  publishPost(body, type) {
    return this._httpService.postData(`/${type}`, body);
  }
  getPosts(type) {
    return this._httpService.getData(`/${type}`);
  }
  deletePost(type, id) {
    return this._httpService.deletePost(type, id);
  }
}
