import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Avalon';
  // navBarVisible: boolean = true;

  constructor(
    public router: Router
  ) {
    // console.log(`this.router.url = ${this.router.url}`);

    // this.navBarVisible = this.router.url.indexOf('property-home') == -1 ? true : false;
    // console.log(`this.navBarVisible = ${this.navBarVisible}`);

  }
}
