import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent extends BaseComponent implements OnInit {

  blogsList: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    super();
    // All Blogs
    if (this.route.snapshot.data.blogs) {
      let res = this.route.snapshot.data.blogs;
      this.blogsList = res.data;
      console.log('blogList = ', this.blogsList);
    }
  }

  ngOnInit(): void {
  }

}
