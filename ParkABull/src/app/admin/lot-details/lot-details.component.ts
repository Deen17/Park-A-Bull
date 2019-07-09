import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminLotService, Lot } from '../admin.lot.service';
import {localUrl, url} from '../../../../db/config'
import { request, HttpResponse } from "tns-core-modules/http";

@Component({
  selector: 'ns-lot-details',
  templateUrl: './lot-details.component.html',
  styleUrls: ['./lot-details.component.css'],
  moduleId: module.id,
})
export class LotDetailsComponent implements OnInit {
  name: string  = ""; 
  lot: Lot = null;
  id: number = null;
  newName: string = "";
  location: string = "";
  newLocation: string = "";
  constructor(
    private routerExtensions: RouterExtensions, 
    private activatedRoute: ActivatedRoute,
    private lotService: AdminLotService) { }

  public async editLot(){
    let link = `${localUrl}editlot`
    let response : HttpResponse = 
      await request({
        url: link,
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        content: JSON.stringify({
          id: this.id,
          name: this.newName,
          location: this.newLocation
        })
      })
    let rows = response.content.toJSON();
    let return_code = rows[rows.length - 1][0].return_code;
    switch(return_code){
      case 0:
        await alert('Succesfully edited this lot!')
        this.routerExtensions.navigateByUrl('admin', {clearHistory: true})
        break;
      case 7:
        await alert('That lot name already exists!')
        break;
      case 34:
        await alert('Duplicate location');
        break;
      default:
        await alert('error: unknown error code')
        break;
    }
    
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name')
    this.lot = this.lotService.getLot(this.name);
  }

}
