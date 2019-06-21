import { Component, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

import * as appSettings from "tns-core-modules/application-settings"
@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    @ViewChild(RadSideDrawerComponent) sideDrawerComponent: RadSideDrawerComponent;

    constructor(private routerExtensions: RouterExtensions) { }

    navigateTo(route: string): void {
        this.routerExtensions.navigate(["/" + route], { clearHistory: true });
        this.sideDrawerComponent.sideDrawer.closeDrawer();
    }

    ngOnInit(){
        console.log('app component initiated!')
        if(appSettings.getBoolean("isLoggedIn", false)){
            this.routerExtensions.navigate(["login"], { clearHistory: true })
        } 
    }
}