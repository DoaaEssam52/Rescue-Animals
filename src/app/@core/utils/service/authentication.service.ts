import { Injectable } from '@angular/core';
import { HttpConnectionService } from './http-connection.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpConnection:HttpConnectionService) { }
  // postLogin(body){
  //   return this._httpConnection.postData('/login',body);
  // }
  postRegister(body){
    return this._httpConnection.postData('/register',body);
  }
  checkRegistered(){
    return this._httpConnection.getData('/register');
  }
}
