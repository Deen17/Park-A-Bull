import { Component, OnInit } from '@angular/core';
import {routes} from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUser = true;
  isAdmin = false;
  isGuest = false;
  isLoggedIn: boolean;
  title = 'Parkable';

  ngOnInit() {
    this.isUser = this.isAdmin = this.isGuest = false;
    this.isLoggedIn  = this.isUser || this.isAdmin || this.isGuest;
    this.isUser = true;
  }
}
