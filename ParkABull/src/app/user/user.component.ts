import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"
import { getRootView } from "tns-core-modules/application";
import * as app from "tns-core-modules/application"
import { RadSideDrawer, SideDrawerLocation } from "nativescript-ui-sidedrawer";

@Component({
  selector: 'User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  moduleId: module.id,
})
export class UserComponent implements OnInit {
  //@ViewChild("sideDrawer") rSideDrawer: ElementRef;
  constructor(private routerExtensions: RouterExtensions) { }

	ngOnInit(): void {
    console.log("user component initiated!")
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
