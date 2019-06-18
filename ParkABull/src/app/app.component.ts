import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"
@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    constructor(private routerExtensions: RouterExtensions){
        console.log("app component initiated")
    }
}
