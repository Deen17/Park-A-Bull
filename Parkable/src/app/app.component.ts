import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUser: boolean = true;
  isAdmin: boolean = false;
  isGuest: boolean = false;
  title = 'Parkable';

  ngOnInit(){
    this.isUser=this.isAdmin=this.isGuest=false;
    this.isUser=true;
  }
}
