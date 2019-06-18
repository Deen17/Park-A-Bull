import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "user", loadChildren: "~/app/user/user.module#UserModule" },
    { path: "admin", loadChildren: "~/app/admin/admin.module#AdminModule" },
    { path: "register", loadChildren: "~/app/register/register.module#RegisterModule"},
    { path: "building-details", loadChildren: "~/app/user/building-details/building-details.component"},
    { path: "building-list", loadChildren: "~/app/user/building-list/building-list.component"},
    { path: "profile", loadChildren: "~/app/user/profile/profile.component"},
    { path: "report", loadChildren: "~/app/user/report/report.component"},
    { path: "reserve", loadChildren: "~/app/user/reserve/reserve.component"},
    { path: "vehicle-details", loadChildren: "~/app/user/vehicle-details/vehicle-details.component"},
    { path: "vehicle-list", loadChildren: "~/app/user/vehicle-list/vehicle-list.component"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
