import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'mh-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {
  uiState:number = 0;
  STATES = {
    LOGO_AND_SETTINGS: 0,
    JOINED_USERS: 1,
    BACK_AND_SETTINGS: 2,
    BACK_AND_SETTINGS_TITLE: 3
  };

  constructor(public router: Router) {
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        let url = e.url.replace('/', '');
        console.log(url);

        switch (url) {
          case "start" || "":
            this.uiState = this.STATES.LOGO_AND_SETTINGS;
            break;

          case "exercises":
            this.uiState = this.STATES.JOINED_USERS;
            break;

          case "settings":
            this.uiState = this.STATES.BACK_AND_SETTINGS_TITLE
            break;
        }
      }
    });
  }

  ngOnInit() {
  }

}
