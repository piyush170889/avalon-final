import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/dataservices/data.service';
import { ServerUrl } from '../constants/serverUrl.constants';

@Injectable()
export class BlogsResolver implements Resolve<any> {
  constructor(
    private dataService: DataService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // tslint:disable-next-line:max-line-length
    return this.dataService.get(ServerUrl.API_ENDPOINT_ALL_BLOGS);
  }
}
