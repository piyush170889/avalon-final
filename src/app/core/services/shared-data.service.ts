import { Injectable } from '@angular/core';
import { forEach } from 'lodash';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';

// Declared as const as this should not be reassigned from anywhere in app
const sharedData = {};

@Injectable()
export class SharedDataService {

  public municipalityData: any[] = [];
  public userData: any;

  newBasicSearchTableData:BehaviorSubject<any>;

  constructor(private storage: LocalStorageService) {
    this.newBasicSearchTableData = new BehaviorSubject<any>([]);
   }

  public setUserData(data: any[]) {
    this.userData = data;
  }
  public getUserData(): any[] {
    return this.userData;
  }

  get() {
    return sharedData;
  }

  clear() {
    // Clearing sharedData one by one as a constant cannot be reassigned
    // tslint:disable-next-line:only-arrow-functions
    forEach(sharedData, function (val: any, key: any) {
      delete sharedData[key];
    });
    // Clear localStorage
    this.storage.clear();
  }

  getAttribute(key: string) {
    return sharedData[key];
  }

  setAttribute(key: string, value: any) {
    sharedData[key] = value;
    this.storage.store(key, value);
  }

  deleteAttribute(key: string) {
    delete sharedData[key];
    this.storage.clear(key);
  }

  restoreSharedData() {
    const len = localStorage.length;
    for (let i = 0; i < len; i++) {
      // Get plain key removing prefix and seperator
      const key = localStorage.key(i).replace('weblager-ng.', '');
      sharedData[key] = this.storage.retrieve(key);
    }
  }

  setNewBasicSearchTableData(data: any) {
    console.log(data);
    this.newBasicSearchTableData.next(data);
  }

  getNewBasicSearchTableData() {
    return this.newBasicSearchTableData.asObservable();
  }

}
