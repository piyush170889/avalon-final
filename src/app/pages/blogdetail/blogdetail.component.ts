import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/dataservices/data.service';
import { ServerUrl } from 'src/app/core/constants/serverUrl.constants';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent extends BaseComponent implements OnInit {

  blogDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    super();
  }

  ngOnInit(): void {

    let blogId = this.route.snapshot.params['id'];

    this.dataService.get(ServerUrl.API_ENDPOINT_BLOG_DETAILS + blogId)
      .subscribe(
        (res: any) => {
          console.log('res = ', res);
          this.blogDetails = res.data.length > 0 ? res.data[0] : undefined;
          console.log('this.blogDetails = ', this.blogDetails);
        }
      )
  }

}
