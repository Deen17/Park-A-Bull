import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { localUrl } from '../../config'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

export interface LoginParams{
  username: string;
  password: string; 
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  //login()
}
