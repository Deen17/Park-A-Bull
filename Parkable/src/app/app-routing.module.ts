import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BuildingDetailsComponent } from './user/building-details/building-details.component';
import { BuildingListComponent } from './user/building-list/building-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ReportComponent } from './user/report/report.component';
import { VehicleListComponent } from './user/vehicle-list/vehicle-list.component';
import { AdminBuildingListComponent } from './admin/admin-building-list/admin-building-list.component';
import { AdminBuildingDetailsComponent } from './admin/admin-building-details/admin-building-details.component';
import { LotListComponent } from './admin/lot-list/lot-list.component';
import { LotDetailsComponent } from './admin/lot-details/lot-details.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { AddBuildingComponent } from './admin/add-building/add-building.component';
import { HomeComponent } from './user/home/home.component';
import { AdminHomeComponent } from './admin/home/home.component';


export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'userbuildingdetails', component: BuildingDetailsComponent},
  {path: 'userbuildinglist', component: BuildingListComponent},
  {path: 'userprofile', component: ProfileComponent},
  {path: 'report', component: ReportComponent},
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'adminbuildinglist', component: AdminBuildingListComponent},
  {path: 'adminbuildingdetails', component: AdminBuildingDetailsComponent},
  {path: 'lots', component: LotListComponent},
  {path: 'lotdetails', component: LotDetailsComponent},
  {path: 'users', component: UserListComponent},
  {path: 'userdetails', component: UserDetailsComponent},
  {path: 'addbuilding', component: AddBuildingComponent},
  {path: 'userhome', component: HomeComponent},
  {path: 'adminhome', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
