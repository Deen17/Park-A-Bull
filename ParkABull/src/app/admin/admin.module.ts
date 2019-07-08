import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
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
import { AdminRoutingModule } from './admin-routing.module';
import { AddBuildingComponent } from './add-building/add-building.component';

@NgModule({
  declarations: [
    UserListComponent, 
    UserDetailsComponent, 
    BuildingListComponent, 
    BuildingDetailsComponent, 
    RegisterComponent, 
    ReportListComponent, 
    ReportDetailsComponent, 
    LotListComponent, 
    LotDetailsComponent, 
    AdminComponent,
    AddBuildingComponent],
  imports: [
    NativeScriptCommonModule,
    AdminRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AdminModule { }
