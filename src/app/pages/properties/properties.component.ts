import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../core/base/base.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent extends BaseComponent implements OnInit {

  allProjectsList: any[] = [];
  cities: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    super();

    //All Properties
    if (this.route.snapshot.data.properties) {

      let res = this.route.snapshot.data.properties;
      this.allProjectsList = res.data;

      this.cities = this.allProjectsList.map(a => a.city);
    }
  }

  ngOnInit(): void {
  }

}
