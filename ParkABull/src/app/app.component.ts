import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"
import { EventData } from "tns-core-modules/data/observable"

import { RadSideDrawer, SideDrawerLocation } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private routerExtensions: RouterExtensions, private page: Page){
        console.log("app component initiated")
    }

    HomeTap(args: EventData){
        this.routerExtensions.navigateByUrl("user")
    }

    BuildingDetailTap(args: EventData){
        this.routerExtensions.navigateByUrl("user/buildingdetails")
    }

    BuildingListTap(args: EventData){
        this.routerExtensions.navigateByUrl("user/buildinglist")
    }

    ReportTap(args: EventData){
        this.routerExtensions.navigateByUrl("user/report")
    }

    ReserveTap(args: EventData){
        this.routerExtensions.navigateByUrl("user/reserve")
    }

    VehicleDetailTap(args: EventData){
        this.routerExtensions.navigateByUrl("user/vehicledetails")
    }

    VehicleListTap(args: EventData){
        this.routerExtensions.navigateByUrl("user/vehiclelist")
    }

    ProfileTap(args: EventData){
        this.routerExtensions.navigateByUrl("user/profile")
    }
}
