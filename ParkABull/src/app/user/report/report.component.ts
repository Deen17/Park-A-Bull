import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import { getRootView } from "tns-core-modules/application";
import * as appSettings from "tns-core-modules/application-settings"
import { Color } from "tns-core-modules/color"
import { TextField } from "tns-core-modules/ui/text-field"
import { AutocapitalizationType, EventData } from "tns-core-modules/ui/editable-text-base"
import { request } from 'tns-core-modules/http/http';
import { localUrl, url } from "../../../../db/config"

@Component({
  selector: 'ns-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  moduleId: module.id,
})
export class ReportComponent implements OnInit {
  email: string;
  license: string;

  boxColor: Color = new Color(255, 207, 196, 147); //(255, 207,196,147) usf gold
  greenColor: Color = new Color(255, 0, 103, 71); //usf green

  @ViewChild("sideDrawer") rSideDrawer: ElementRef;
  constructor(private routerExtensions: RouterExtensions) { }

  onTextChange(args) {
    let textbox = <TextField>args.object;
    switch (textbox.id) {
      case 'email':
        this.email=textbox.text;
        break;
      case 'license':
        this.license=textbox.text;
        break;
      default:
        console.log('switched entered unintended case')
        break;
    }
  }

  onSubmit(args: EventData){
    request({
      url: localUrl + "report",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        email: appSettings.getString("email"),
        license: this.license
      })
    }).then((response) => {
      const rows = response.content.toJSON();
      console.log('result:', rows)
      switch(rows[rows.length - 1][0].return_code){
        case 0:
            alert('Successfully reported')
            this.goToHome();
            break;
        case 15:
            alert('Error: No active reservation');
            break;
        case 31:
            alert('Error: No open reservation');
            break;
        default:
            alert('Unknown Error Code');
            break;
          
      }
    }, (e) => {
      console.log(e)
    });
  }

  goToHome(){
    this.routerExtensions.navigateByUrl("user/user")
  }

	ngOnInit(): void {
    console.log("user component initiated!")
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
