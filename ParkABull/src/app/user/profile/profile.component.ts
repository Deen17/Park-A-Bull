import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import * as appSettings from "tns-core-modules/application-settings"
import { getRootView } from "tns-core-modules/application";
import {localUrl, url} from "../../../../db/config"
import{prompt, PromptOptions, inputType, capitalizationType} from "tns-core-modules/ui/dialogs"
import { request, HttpResponse } from "tns-core-modules/http"
import * as md5 from "md5/md5.js"
@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId: module.id,
})
export class ProfileComponent implements OnInit {

  name: string = appSettings.getString("firstName") + ' ' + appSettings.getString("lastName")
  email: string = appSettings.getString("email")
  username: string = appSettings.getString("username")
  userType: string = appSettings.getString("userType")
  constructor(private routerExtensions: RouterExtensions) { }

	ngOnInit(): void {
    console.log("profile component initiated!")
	}

  async onTap(){
    let oldPassword: string = "";
    let newPassword: string = "";
    let secondPassword: string = "";
    let options: PromptOptions = {
      title: "Old Password",
      defaultText: "",
      message: "Enter your old password.",
      okButtonText: "OK",
      cancelButtonText: "Cancel",
      cancelable: true,
      inputType: inputType.password,
      capitalizationType: capitalizationType.none
    }
    let old = await prompt(options)
    if(!old.result)
      return;
    else oldPassword = old.text;

    //new password first pass
    options = {
      title: "New Password",
      defaultText: "",
      message: "Enter your new password",
      okButtonText: "OK",
      cancelButtonText: "Cancel",
      cancelable: true,
      inputType: inputType.password,
      capitalizationType: capitalizationType.none
    }
    let newPass = await prompt(options);
    if(!newPass.result)
      return;
    else newPassword = newPass.text;

    //new password second pass
    options = {
      title: "New Password Confirmation",
      defaultText: "",
      message: "Reenter your new password",
      okButtonText: "OK",
      cancelButtonText: "Cancel",
      cancelable: true,
      inputType: inputType.password,
      capitalizationType: capitalizationType.none
    }
    let secondPass = await prompt(options);
    if(!secondPass.result)
      return;
    else secondPassword = secondPass.text;
    if(secondPassword != newPassword){
      return;
    }
    this.changePassword(oldPassword, secondPassword);
    
    
  }

  private async changePassword(old: string, newp: string){

    try{
      let link = `${localUrl}password/`
      
      const response: HttpResponse = 
        await request({
          url: link,
          method: "POST",
          headers: {"Content-Type": "application/json"},
          content: JSON.stringify({
            email: appSettings.getString("email"),
            oldPassword: md5(old),
            newPassword: md5(newp)
          })
        })
      console.log(response.content)
      let rows = response.content.toJSON();
      let returnCode = rows[rows.length - 1][0].return_code;
      switch(returnCode){
        case 0:
          alert('Password successfully changed!')
          break;
        case 8:
          alert('Password change failed.')
          break;
        default:
          alert('unknown error code')
          break;
      }
    } catch(e){
      console.log(e)
    }
  }

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
