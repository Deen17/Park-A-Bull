import { Component, OnInit } from '@angular/core';
import * as appSettings from "tns-core-modules/application-settings"
import { RouterExtensions } from "nativescript-angular/router"

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        //appSettings.clear();
        console.log('Home Component initiated. usertype is ', appSettings.getString("userType"))
        console.log(this.routerExtensions)
        if (!appSettings.getBoolean("isLoggedIn", false)) {
            console.log("should navigate to login")
            this.routerExtensions.navigateByUrl("login", { clearHistory: true })
        }
        else if (appSettings.getString("userType") == "student"){
            console.log("should navigate to user")
            this.routerExtensions.navigateByUrl("user", { clearHistory: true })
        }
        else if (appSettings.getString("userType") == "admin"){
            console.log("should navigate to admin")
            this.routerExtensions.navigateByUrl("admin", { clearHistory: true })
        }
    }
}
