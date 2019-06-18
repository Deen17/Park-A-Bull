import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"
import { EventData } from "tns-core-modules/data/observable"

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    constructor(private routerExtensions: RouterExtensions){
        console.log("app component initiated")
    }

    HomeTap(args: EventData){
        this.routerExtensions.navigateByUrl("user")
    }

    BuildingDetailTap(args: EventData){
        this.routerExtensions.navigateByUrl("register")
    }

    BuildingListTap(args: EventData){
        this.routerExtensions.navigateByUrl("building-list")
    }

    ReportTap(args: EventData){
        this.routerExtensions.navigateByUrl("report")
    }

    ReserveTap(args: EventData){
        this.routerExtensions.navigateByUrl("reserve")
    }

    VehicleDetailTap(args: EventData){
        this.routerExtensions.navigateByUrl("vehicle-details")
    }

    VehicleListTap(args: EventData){
        this.routerExtensions.navigateByUrl("vehicle-list")
    }

    ProfileTap(args: EventData){
        this.routerExtensions.navigateByUrl("profile")
    }
}
