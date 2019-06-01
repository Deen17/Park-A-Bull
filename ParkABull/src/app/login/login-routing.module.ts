import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LoginRoutingModule { }
