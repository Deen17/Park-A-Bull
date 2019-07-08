import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';
import { RegisterComponent } from './register/register.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { LotListComponent } from './lot-list/lot-list.component';
import { LotDetailsComponent } from './lot-details/lot-details.component';
import { AdminComponent } from './admin.component';
import { AddBuildingComponent } from './add-building/add-building.component';

const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "admin", component: AdminComponent },
  { path: "userlist", component: UserListComponent },
  { path: "userdetails/:name/:firstname/:lastname/:unumber/:email/:username", component: UserDetailsComponent  },
  { path: "buildinglist", component: BuildingListComponent },
  { path: "buildingdetails/:name/:location/:code", component: BuildingDetailsComponent },
  { path: "register", component: RegisterComponent },
  { path: "reportlist", component: ReportListComponent  },
  { path: "reportdetails", component: ReportDetailsComponent},
  { path: "lostlist", component: LotListComponent},
  { path: "lotdetails", component: LotDetailsComponent},
  { path: "addbuilding", component: AddBuildingComponent}

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AdminRoutingModule { }
