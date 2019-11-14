import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  constructor() { }

  login() {
    AppComponent.log = true;
  }

  logout() {
    AppComponent.log = false;
  }

  ngOnInit() {
    this.logout();
      }

}
