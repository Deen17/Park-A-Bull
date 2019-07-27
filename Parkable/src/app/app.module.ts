import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from '@angular/forms'
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
import { AdminBuildingDetailsComponent } from './admin/admin-building-details/admin-building-details.component';
import { AdminBuildingListComponent } from './admin/admin-building-list/admin-building-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import {MatSidenavModule} from '@angular/material/sidenav'
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
    UserDetailsComponent,
    AdminBuildingDetailsComponent,
    AdminBuildingListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
