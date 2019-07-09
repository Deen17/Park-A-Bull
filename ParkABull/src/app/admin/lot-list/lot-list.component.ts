import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import { getRootView } from "tns-core-modules/application";
import { AdminLotService, Lot } from '../admin.lot.service';
import { ListPicker } from 'tns-core-modules/ui/list-picker';
import {SearchBar} from "tns-core-modules/ui/search-bar"


@Component({
  selector: 'ns-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css'],
  moduleId: module.id,
})
export class LotListComponent implements OnInit {
  lots: Array<Lot> = [];
  picked: string  = "";
  names: Array<string> = [];
  filteredNames: Array<string> = [];
  public searchPhrase: string ='';
  constructor(
    private routerExtensions: RouterExtensions,
    private lotService: AdminLotService) { }

	async ngOnInit() {
    console.log("Admin Lot List component initiated!")
    await this.lotService.fetch()
    this.lots = this.lotService.getLots();
    this.picked = this.lots[0].getName();
    this.lots.forEach(element => {
      this.names.push(element.getName())
    });
    this.filteredNames = this.names;
  }
  
  onTextChanged(args){
    let searchBar = <SearchBar>args.object;
    this.searchPhrase = searchBar.text;
    this.filteredNames = this.names.filter(word => word.toLowerCase().includes(this.searchPhrase.toLowerCase()))
  }


  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.filteredNames[picker.selectedIndex];
  }

  public addLot(){
    this.routerExtensions.navigateByUrl('admin/lotdetails/');
  }

  public checkLot(){
    if(this.picked != "")
      this.routerExtensions.navigateByUrl(`admin/lotdetails/${this.picked}`)
  }

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}