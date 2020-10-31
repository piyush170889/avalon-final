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
  mediaList: any = [];
  show: boolean = false;
  arrInd: any = "";
  imgArr: any = [];
  onLoadingShowBtn: boolean;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataService.get(ServerUrl.API_ENDPOINT_ALLMEDIA, true)
      .subscribe((response) => {
        let descriptions = [`This is sample data.`, `test test.`];
        let i = 0;
        let imgLength = 1;
        for (let res of response['data']) {
          this.mediaList.push({
            img: `${ServerUrl.MAIN}public${res.folder}/${res.img}`,
            // title:res.title
            //description: descriptions[i]
          })
          imgLength++;
          i++;
        }
        this.onLoadingShowBtn = this.mediaList.length > 6 ? true : false;
        this.imgArr = this.chunk(this.mediaList, 6);
        this.mediaList = this.imgArr[0];
        if (this.imgArr.length > 0) {
          this.show = true;
        }
        this.arrInd = 0;
        console.log("+++", response);
      }, (err) => console.log(err));
  }

  callNext() {
    let ind = parseInt(this.arrInd) + 1;
    this.imgArr[ind].forEach(element => {
      this.mediaList.push(element);
    });
    this.arrInd = parseInt(this.arrInd) + 1;
    if (this.imgArr.length == parseInt(this.arrInd) + 1) {
      this.show = false;
    }
  }

  chunk(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([array[i]]);
      } else {
        last.push(array[i]);
      }
    }
    return chunked_arr;
  }
  // isShow = false;

  toggleDisplay() {
    // this.isShow = !this.isShow;
    this.show = !this.show;

  }
  //show: boolean = true;

}
