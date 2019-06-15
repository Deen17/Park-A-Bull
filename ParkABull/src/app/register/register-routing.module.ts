import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RegisterComponent } from "../register/register.component";

const routes: Routes = [
  { path: "", component: RegisterComponent },
  { path: "login", loadChildren: "~/app/login/login.module#LoginModule"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class RegisterRoutingModule { }
