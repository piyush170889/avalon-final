import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/dataservices/data.service';
import { ServerUrl } from '../../core/constants/serverUrl.constants';
import { BaseComponent } from '../../core/base/base.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit { 
  mediaList:any = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataService.get(ServerUrl.API_ENDPOINT_ALLMEDIA,true)
    .subscribe((response) => {
      let descriptions = [`This is sample data.`, `test test.` ];
      let i = 0;
      for(let res of response['data']) { 
        this.mediaList.push({
          img:`${ServerUrl.MAIN}public${res.folder}/${res.img}`,
          title:res.title,
          //description: descriptions[i]
        })
        i++;

      }
         
      console.log("+++",response);
    },(err) => console.log(err));
  }
  // isShow = false;
 
  // toggleDisplay() {
  //   this.isShow = !this.isShow;
  // }
  show: boolean = true;
}
