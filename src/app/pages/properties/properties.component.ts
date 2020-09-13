import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../core/base/base.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent extends BaseComponent implements OnInit {

  allProjectsList: any[] = [];
  cities: any[] = [];
  location: string = '';
  filteredProperties: any[] = [];
  propertyType: any = '';
  propertyTypesList: any[] = [];
  statusList: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    super();

    //All Properties
    if (this.route.snapshot.data.properties) {

      let res = this.route.snapshot.data.properties;
      this.allProjectsList = res.data;
      this.filteredProperties = Object.assign([], this.allProjectsList);

      let locationNames: string[] = [];

      this.allProjectsList.forEach(a => {

        let location = a.location_name + ', ' + a.city;

        if (locationNames.indexOf(location) == -1) {

          this.cities.push({
            prop_id: a.prop_id,
            displayText: location
          });

          locationNames.push(location);
        }

        if (this.propertyTypesList.indexOf(a.type_name) == -1)
          this.propertyTypesList.push(a.type_name);

        if (this.statusList.indexOf(a.status) == -1)
          this.statusList.push(a.status);
      });
    }
  }

  ngOnInit(): void {
  }


  resetfilter() {

    console.log('resetfilter()');
    this.location = '';
    this.filterProperties();
  }

  filterProperties(doClearSortingFilters: boolean = true) {

    console.log('filterProperties()');
    if (this.location != '') {
      let propertySelected = this.allProjectsList.find(a => a.prop_id == this.location);
      let locationName = propertySelected.location_name;

      this.filteredProperties = this.allProjectsList.filter(
        (a) => {
          if (a.location_name == locationName)
            return a;
        }
      );
    } else {
      this.filteredProperties = Object.assign([], this.allProjectsList);
    }

    if (doClearSortingFilters) {
      this.propertyType = '';
      this.status = '';
    }
  }

  status: string = '';

  sortItems() {

    console.log(`sortItems`);

    this.filterProperties(false);

    let tempList = Object.assign([], this.filteredProperties);

    if (this.propertyType != '' && status != '') {

      this.filteredProperties = tempList.filter(
        t => {
          return (t.type_name == this.propertyType && t.status == this.status)
        }
      )
    } else if (this.propertyType != '' && status == '') {

      this.filteredProperties = tempList.filter(
        t => {
          return (t.type_name == this.propertyType)
        }
      );
    } else if (this.propertyType == '' && status != '') {
      this.filteredProperties = tempList.filter(
        t => {
          return (t.status == this.status)
        }
      )
    }
  }
}
