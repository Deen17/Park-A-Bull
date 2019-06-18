import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  { path: "", component: UserComponent },
  { path: "user", component: UserComponent },
  { path: "vehiclelist", component: VehicleListComponent },
  { path: "vehicledetails", component: VehicleDetailsComponent  },
  { path: "buildinglist", component: BuildingListComponent },
  { path: "buildingdetails", component: BuildingDetailsComponent },
  { path: "reserve", component: ReserveComponent },
  { path: "report", component: ReportComponent  },
  { path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class UserRoutingModule { }
