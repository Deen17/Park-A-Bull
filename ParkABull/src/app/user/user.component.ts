import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"

@Component({
  selector: 'User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  moduleId: module.id,
})
export class UserComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

}
