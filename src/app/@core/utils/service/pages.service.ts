import { Injectable } from '@angular/core';
import { HttpConnectionService } from './http-connection.service';
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private _httpService:HttpConnectionService) { }
  postSuggest(body){
   return this._httpService.postData('/servicesIdeas',body);
  }
  searchPostSuggest(body){
    return this._httpService.postData('/searchForPosts',body);
   }
}
