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
  slidersList: any[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {

    super();

   /*  this.slidersList.push({
      img: 'assets/img/slider/01 Victoria.jpg',
      title: 'Nyati Evara - I',
      description: `Let the luxury do the magic. Explicitly majestic, nyati victoria is your gateway to a refined living in one of the most desired neighbourhoods of pune, nyati county.Inspired from
      european architecture.`
    });

    this.slidersList.push({
      img: 'assets/img/slider/02 Estaben.jpg',
      title: 'Luxurious Living',
      description: `A signature offering by the nyati group, nyati esteban I is the epitome of a
      luxurious living. An ultra-luxurious project of 2, 3 & 3.5 rhk homes in undri, it is an emblem of how a
      modern kingdom should be. Beauty and elegance are the two sides of royal living.`
    })
 */
/* 
    this.dataService.get(ServerUrl.API_ENDPOINT_SLIDER,true)
    .subscribe((response) => {
     let descriptions = [`This is sample data.`, `test test.` ]
     let i = 0; 
     for(let res of response['data']) {
        this.slidersList.push({
          image: `${ServerUrl.MAIN}public/slider/${res.image}`,
          title: res.title,
          description: descriptions[i]
        })
        i++;
      }
     
      console.log("+++",response);
    },(err) => console.log(err));
 */
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
    this.dataService.get(ServerUrl.API_ENDPOINT_SLIDER,true)
    .subscribe((response) => {
     let descriptions = [`This is sample data.`, `test test.` ]
     let i = 0; 
     for(let res of response['data']) {
        this.slidersList.push({
          image: `${ServerUrl.MAIN}public/slider/${res.image}`,
          title: res.title,
          description: descriptions[i]
        })
        i++;
      }
     
      console.log("+++",response);
    },(err) => console.log(err));
  }

}
