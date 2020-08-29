import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/dataservices/data.service';
import { ServerUrl } from '../../core/constants/serverUrl.constants';
import { BaseComponent } from '../../core/base/base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  featuredProjectsList: any[] = [];
  allProjectsList: any[] = [];
  allProjectsListToDisplay: any[] = [];
  blogsList: any[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {

    super();

    //All Features
    if (this.route.snapshot.data.featuredProps) {
      let res = this.route.snapshot.data.featuredProps;
      this.featuredProjectsList = res.data;
      console.log('featuredProjectsList = ', this.featuredProjectsList);
    }

    //All Properties
    if (this.route.snapshot.data.properties) {

      let res = this.route.snapshot.data.properties;
      this.allProjectsList = res.data;
      console.log('allProjectsList = ', this.allProjectsList);

      if (this.allProjectsList.length > 6) {
        for (let i = 0; i < 6; i++)
          this.allProjectsListToDisplay.push(this.allProjectsList[i]);
      } else
        this.allProjectsListToDisplay = this.allProjectsList;
    }

    // All Blogs
    if (this.route.snapshot.data.blogs) {
      let res = this.route.snapshot.data.blogs;
      this.blogsList = res.data;
      console.log('blogList = ', this.blogsList);

    }


    //Featured Properties
    // this.dataService.get(ServerUrl.API_ENDPOINT_FEATURED_PROPS)
    //   .subscribe(
    //     (res: any) => {

    //       console.log('res = ', res);
    //       this.featuredProjectsList = res.data;
    //     },
    //     (err) => {
    //       console.log('err = ', err);
    //     }
    //   );


    // this.dataService.get(ServerUrl.API_ENDPOINT_ALL_PROPS)
    //   .subscribe(
    //     (res: any) => {

    //       console.log('res = ', res);
    //       this.allProjectsList = res.data;

    //       if (this.allProjectsList.length > 6) {
    //         // this.allProjectsListToDisplay = this.allProjectsList.slice(6, this.allProjectsList.length);
    //         for (let i = 0; i < 6; i++)
    //           this.allProjectsListToDisplay.push(this.allProjectsList[i]);
    //       } else
    //         this.allProjectsListToDisplay = this.allProjectsList;
    //     },
    //     (err) => {
    //       console.log('err = ', err);
    //     }
    //   );

    //Blogs
    // this.dataService.get(ServerUrl.API_ENDPOINT_ALL_BLOGS)
    //   .subscribe(
    //     (res: any) => {

    //       console.log('res = ', res);
    //       this.blogsList = res.data;
    //     },
    //     (err) => {
    //       console.log('err = ', err);
    //     }
    //   );
  }

  ngOnInit(): void {
  }

}
