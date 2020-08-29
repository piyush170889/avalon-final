import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../core/services/dataservices/data.service';
import { ServerUrl } from '../../core/constants/serverUrl.constants';

@Injectable()
export class FeaturedPropertiesResolver implements Resolve<any> {
    constructor(
        private dataService: DataService,
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        // tslint:disable-next-line:max-line-length
        return this.dataService.get(ServerUrl.API_ENDPOINT_FEATURED_PROPS);
    }
}
