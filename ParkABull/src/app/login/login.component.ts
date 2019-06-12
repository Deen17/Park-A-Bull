import { Component, OnInit } from '@angular/core';
import * as appSettings from "tns-core-modules/application-settings"

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log('login component initiated. username is ' + appSettings.getString("username"))
  }

}
