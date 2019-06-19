import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"
import { EventData } from "tns-core-modules/data/observable"

import { Color } from "tns-core-modules/color"
import { Page } from "tns-core-modules/ui/page";
import { RadSideDrawer, SideDrawerLocation } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";


@Component({
  selector: 'User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  moduleId: module.id,
})
export class UserComponent implements OnInit {

  @ViewChild("rsd") rSideDrawer: ElementRef;

  greenColor: Color = new Color(255, 0, 103, 71); //usf green
  

  constructor(private routerExtensions: RouterExtensions, private page: Page) { }

  ngOnInit() {
    
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
    //this.toggle(sideDrawer)
    //sideDrawer.toggleDrawerState();

  }

  toggle(x: RadSideDrawer){
    x.toggleDrawerState()
  }
}
