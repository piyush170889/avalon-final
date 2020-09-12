import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from '../../core/base/base.component';
import { DataService } from '../../core/services/dataservices/data.service';
import { ServerUrl } from '../../core/constants/serverUrl.constants';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent extends BaseComponent implements OnInit {

  blogDetails: any = {};
  allBlogs: any[] = [];

  blogSubscription: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    super();
  }

  ngOnInit(): void {

    // let blogId = this.route.snapshot.params['id'];


    this.blogSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.dataService.get(ServerUrl.API_ENDPOINT_BLOG_DETAILS + params['id'])
          .subscribe(
            (res: any) => {
              console.log('res = ', res);
              this.blogDetails = res.data.length > 0 ? res.data[0] : undefined;
              console.log('this.blogDetails = ', this.blogDetails);
            }
          );
      });

    this.dataService.get(ServerUrl.API_ENDPOINT_ALL_BLOGS)
      .subscribe(
        (res: any) => {
          this.allBlogs = res.data;
        }
      )
  }


}
