import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as config from '../../config.json';
import * as md5 from 'md5';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { getTreeControlFunctionsMissingError } from '@angular/cdk/tree';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

export enum userType {
  student = 'student',
  admin = ' admin',
  guest = 'guest'
}

export interface UserInfo {
  userType: userType;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  login: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, pass: string): Observable<UserInfo> {
    const password = md5(pass);
    return this.http.post<UserInfo>(config.localUrl + 'login', { username, password }, httpOptions);

  }
}
