import { Component, OnInit } from '@angular/core';
import { ServerUrl } from '../constants/serverUrl.constants';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(imageName: string, folderPath?: string): string {

    return ServerUrl.IMAGE_BASE_PATH + imageName;
  }
}
