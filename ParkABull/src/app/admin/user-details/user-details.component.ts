import { Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { localUrl, url } from "../../../../db/config"
import { request,getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http"
import { User } from "../user"
import { GridLayout, ItemSpec } from "tns-core-modules/ui/layouts/grid-layout";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { prompt, PromptOptions, PromptResult, capitalizationType, inputType } from "tns-core-modules/ui/dialogs";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  moduleId: module.id,
})
export class UserDetailsComponent implements OnInit {
  public name: string;
  public firstName: string;
  public lastName: string;
  public unumber: string;
  public email: string;
  public userName: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.firstName = this.activatedRoute.snapshot.paramMap.get("firstname");
    this.lastName = this.activatedRoute.snapshot.paramMap.get("lastname");
    this.unumber = this.activatedRoute.snapshot.paramMap.get("unumber");
    this.email = this.activatedRoute.snapshot.paramMap.get("email");
    this.userName = this.activatedRoute.snapshot.paramMap.get("username");
    console.log('user-details initiated: ' + this.name);
  }

}
