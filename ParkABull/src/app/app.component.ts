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
    firstName : string = "User"
    lastName : string = "Name"
    email: string = "username@mail.usf.edu"
    constructor(private routerExtensions: RouterExtensions) { }

    navigateTo(route: string): void {
        this.routerExtensions.navigate(["/" + route], { clearHistory: true });
        this.sideDrawerComponent.sideDrawer.closeDrawer();
    }
    logout(){
        appSettings.clear();
        this.routerExtensions.navigate(["login"], { clearHistory: true })
        this.sideDrawerComponent.sideDrawer.closeDrawer();
    }
    setUserInfo() : void {
        this.firstName = appSettings.getString("firstName")
        this.lastName = appSettings.getString("lastName")
        this.email = appSettings.getString("email")
    }
    ngOnInit(){
        console.log('app component initiated!')
        if(appSettings.getBoolean("isLoggedIn", false)){
            this.routerExtensions.navigate(["login"], { clearHistory: true })
        } 
    }
}