import { Component, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

import * as appSettings from "tns-core-modules/application-settings"
import { UserService } from "./user.service";
import { VehicleService } from "./user/vehicle.service";
@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    @ViewChild(RadSideDrawerComponent) sideDrawerComponent: RadSideDrawerComponent;
    firstName: string = appSettings.hasKey("firstName") ? appSettings.getString("firstName") :  "User"
    lastName: string = appSettings.hasKey("lastName") ? appSettings.getString("lastName") :  "Name"
    email: string = appSettings.hasKey("email") ? appSettings.getString("email") :  "username@mail.usf.edu"
    isUser: boolean = appSettings.getString("userType") == "student";
    isAdmin: boolean = appSettings.getString("userType") == "admin"
    isGuest: boolean = appSettings.getString("userType") == "guest"
    constructor(
        private routerExtensions: RouterExtensions,
        private userService: UserService,
        private vehicleService: VehicleService) { }

    navigateTo(route: string): void {
        this.routerExtensions.navigate(["/" + route], { clearHistory: true });
        this.sideDrawerComponent.sideDrawer.closeDrawer();
    }
    logout(){
        appSettings.clear();
        this.firstName = "User"
        this.lastName = "Name"
        this.email = "username@mail.usf.edu"
        this.isUser = this.isAdmin = this.isGuest = false;
        this.vehicleService.clean();
        this.routerExtensions.navigate(["login"], { clearHistory: true })
        this.sideDrawerComponent.sideDrawer.closeDrawer();
    }
    setUserInfo() : void {
        this.firstName = appSettings.getString("firstName")
        this.lastName = appSettings.getString("lastName")
        this.email = appSettings.getString("email")
        switch (appSettings.getString("userType")) {
            case 'student':
                this.isUser = true;
                break;
            case 'admin':
                this.isAdmin = true;
                break;
            case 'guest':
                this.isGuest = true;
                break;
            default:
                break;
        }

    }
    ngOnInit(){
        console.log('app component initiated!')
        this.userService.getLoggedInName.subscribe(text =>{
            this.setUserInfo();
        })  
    }
}