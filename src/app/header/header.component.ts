import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerStyle = {'position': 'absolute'};

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('/index') || event.url === '/') {
          this.headerStyle = {
            'position': 'absolute'
          };
        } else {
          this.headerStyle = {
            'position': 'relative'
          };
        }
      }
    });
  }

  menuClick(e) {
    const menu = document.getElementById('bs-example-navbar-collapse-1');

    if (menu.style.height === '258px') {
      menu.style.height = '0';
    } else {
      menu.style.height = '258px';
    }
  }

  menuHidden(event) {
    const menu = document.getElementById('bs-example-navbar-collapse-1');

    if (menu.style.height === '258px') {
      menu.style.height = '0';
    }
  }

}
