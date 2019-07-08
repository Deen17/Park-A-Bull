import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import { getRootView } from "tns-core-modules/application";

import { localUrl, url } from "../../../../db/config"
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { User } from "../user";
import { ListPicker } from 'tns-core-modules/ui/list-picker';
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import {SearchBar} from "tns-core-modules/ui/search-bar"

@Component({
  selector: 'ns-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  users: Array<User> = [];
  names: Array<string> = [];
  firstNames: Array<string> = [];
  lastNames: Array<string> = [];
  filteredNames: Array<string> = [];
  shouldShow: boolean = false;
  public searchPhrase : string = '';
  public picked: string;
  public pickedFirstName: string;
  public pickedLastName: string;
  public pickedUnumber: number;
  public pickedEmail: string;
  public pickedUserName: string;

  @ViewChild("sideDrawer") rSideDrawer: ElementRef;
  constructor(private routerExtensions: RouterExtensions, private ref: ChangeDetectorRef) {
    
  }

  onTextChanged(args){
    let searchBar = <SearchBar>args.object;
    this.searchPhrase = searchBar.text;
    this.filteredNames = this.names.filter(word => word.toLowerCase().includes(this.searchPhrase.toLowerCase()))
    console.log(this.filteredNames)
  }

  onSubmit(args){
    //intentionally left blank
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.filteredNames[picker.selectedIndex];
    this.pickedFirstName = this.users[picker.selectedIndex].getFirstName();
    this.pickedLastName = this.users[picker.selectedIndex].getLastName();
    this.pickedUnumber = this.users[picker.selectedIndex].getUnumber();
    this.pickedEmail = this.users[picker.selectedIndex].getEmail();
    this.pickedUserName = this.users[picker.selectedIndex].getUserName();
    console.log('this.picked: ',this.picked)
  }

	ngOnInit(): void {
    console.log("user component initiated!")
    this.getUsers();
  }
  
  getUsers(): void {
    request({
      url: localUrl + "users",
      method: "GET"
    }).then((response: HttpResponse) => {
      var rows = response.content.toJSON()
      //console.log(rows)
      rows.forEach(row => {
        let temp = new User(
          row.unumber,
          row.first_name,
          row.last_name,
          row.email,
          row.username);
        //console.log(temp)
        this.users.push(temp);
        this.names.push(row.first_name + ' ' + row.last_name);
        this.firstNames.push(row.first_name);
        this.lastNames.push(row.last_name);

      });
      //after this line, the names and buildings arrays should be populated
      //console.log(this.names) 
      this.filteredNames = this.names;
      console.log('filteredNames: ',this.filteredNames)
      this.shouldShow = true;
      this.ref.markForCheck();
    }, (e) => {
      console.log(e)
    })
  }

  userDetails(): void {
    this.routerExtensions.navigateByUrl("admin/userdetails/" + this.picked + '/' + this.pickedFirstName + '/' + this.pickedLastName+ '/' + this.pickedUnumber + '/' + this.pickedEmail + '/' + this.pickedUserName);
  }

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
