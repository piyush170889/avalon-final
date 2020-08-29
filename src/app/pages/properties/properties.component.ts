import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  allProjectsList: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    //All Properties
    if (this.route.snapshot.data.properties) {

      let res = this.route.snapshot.data.properties;
      this.allProjectsList = res.data;
    }
  }

  ngOnInit(): void {
  }

}
