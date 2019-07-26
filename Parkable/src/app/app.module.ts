import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BuildingDetailsComponent } from './user/building-details/building-details.component';
import { BuildingListComponent } from './user/building-list/building-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ReportComponent } from './user/report/report.component';
import { VehicleListComponent } from './user/vehicle-list/vehicle-list.component';
import { AddBuildingComponent } from './admin/add-building/add-building.component';
import { LotListComponent } from './admin/lot-list/lot-list.component';
import { LotDetailsComponent } from './admin/lot-details/lot-details.component';
import { ReportListComponent } from './admin/report-list/report-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    BuildingDetailsComponent,
    BuildingListComponent,
    ProfileComponent,
    ReportComponent,
    VehicleListComponent,
    AddBuildingComponent,
    LotListComponent,
    LotDetailsComponent,
    ReportListComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
