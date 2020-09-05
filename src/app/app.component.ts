import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Avalon';
  // navBarVisible: boolean = true;

  constructor(
    public router: Router,
    private spinner: NgxSpinnerService
  ) {
    // console.log(`this.router.url = ${this.router.url}`);

    // this.navBarVisible = this.router.url.indexOf('property-home') == -1 ? true : false;
    // console.log(`this.navBarVisible = ${this.navBarVisible}`);

  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

    
  }
}
