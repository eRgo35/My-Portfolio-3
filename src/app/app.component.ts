import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderAnimation } from './animation/slider';

@Component({
  selector: 'app-root',
  template: `
  <div id="wrapper">
    <div id="nav-pos">
      <app-nav></app-nav>
    </div>
    <div id="content">
      <div [@routeAnimations]="prepareRoute(outlet)" class="footer-load">
        <router-outlet #outlet="outlet"></router-outlet>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.scss'],
  animations: [SliderAnimation]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}