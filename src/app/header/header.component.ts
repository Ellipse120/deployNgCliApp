import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerStyle = {position: 'absolute'};

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('/index')) {
          this.headerStyle = {
            position: 'absolute'
          };
        } else {
          this.headerStyle = {
            position: 'relative'
          };
        }
      }
    });
  }


}
