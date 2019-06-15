import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "user", loadChildren: "~/app/user/user.module#UserModule" },
    { path: "admin", loadChildren: "~/app/admin/admin.module#AdminModule" },
    { path: "register", loadChildren: "~/app/register/register.module#RegisterModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
