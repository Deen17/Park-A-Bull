import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import { getRootView } from "tns-core-modules/application";

@Component({
  selector: 'ns-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css'],
  moduleId: module.id,
})
export class LotListComponent implements OnInit {
  @ViewChild("sideDrawer") rSideDrawer: ElementRef;
  constructor(private routerExtensions: RouterExtensions) { }

	ngOnInit(): void {
    console.log("user component initiated!")
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
