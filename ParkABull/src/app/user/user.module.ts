import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    VehicleListComponent, 
    VehicleDetailsComponent, 
    BuildingListComponent, 
    BuildingDetailsComponent, 
    ReportComponent, 
    ProfileComponent, 
    UserComponent],
  imports: [
    NativeScriptCommonModule,
    UserRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule {
  constructor(){
    console.log("User Module")
  }
 }
