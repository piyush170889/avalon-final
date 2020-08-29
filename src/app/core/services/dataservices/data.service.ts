import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

// import { NotificationService } from './../notification.service';
import { ServerUrl } from './../../constants/serverUrl.constants';
// import { LoadingService } from '../loader.service';

@Injectable()
export class DataService {


  header: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    // private loader: LoadingService,
    // private notification: NotificationService
  ) {
    this.header.set("Content-Type", "application/octet-stream");
  }

  startLoader(url: string, data: any, isLoader?: boolean) {
    // Start loader before API call
    if (isLoader !== false) {
      // this.loader.start();
    }
  }

  stopLoader(url: string, data: any, isLoader?: boolean) {
    // Reset the loader
    if (isLoader !== false) {
      // this.loader.stop();
    }
  }

  post(url: string, data: any, isLoader?: boolean): Observable<Response> {
    this.startLoader(url, data, isLoader);

    return this.http.post(ServerUrl.MAIN + url, data).pipe(
      map((res: Response) => {
        return this.extractData(res, url, data, isLoader);
      }),
      catchError((err: Response) => {
        console.error(err);
        return this.handleErrorPromise(err, url, data, isLoader);
      })
    );
  }

  uploadFile(url: string, data: any, isLoader?: boolean): Observable<Response> {
    this.startLoader(url, data, isLoader);
    // let headers:HttpHeaders = new HttpHeaders({'content-type':'application/octet-stream'});
    // // headers.set('content-type','application/octet-stream');
    return this.http.post(ServerUrl.MAIN + url, data,
      { headers: this.header, withCredentials: true }).pipe(
        map((res: Response) => {
          return this.extractData(res, url, data, isLoader);
        }),
        catchError((err: Response) => {
          console.error(err);
          return this.handleErrorPromise(err, url, data, isLoader);
        })
      );
  }

  put(url: string, data: any, isLoader?: boolean): Observable<Response> {
    this.startLoader(url, data, isLoader);

    return this.http.put(ServerUrl.MAIN + url, data).pipe(
      map((res: Response) => {
        return this.extractData(res, url, data, isLoader);
      }),
      catchError((err: Response) => {
        console.error(err);
        return this.handleErrorPromise(err, url, data, isLoader);
      })
    );
  }

  get(url: string, isLoader?: boolean): Observable<Response> {

    let data = null;

    this.startLoader(url, data, isLoader);

    return this.http.get(ServerUrl.MAIN + url).pipe(
      map((res: Response) => {
        return this.extractData(res, url, data, isLoader);
      }),
      catchError((err: Response) => {
        // console.error(err);
        return this.handleErrorPromise(err, url, data, isLoader);
      })
    );
  }


  getLocal(url: string, isLoader?: boolean): Observable<Response> {

    let data = null;

    this.startLoader(url, data, isLoader);

    return this.http.get(url).pipe(
      map((res: Response) => {
        return this.extractData(res, url, data, isLoader);
      }),
      catchError((err: Response) => {
        console.error(err);
        return this.handleErrorPromise(err, url, data, isLoader);
      })
    );
  }

  delete(url: string, isLoader?: boolean): Observable<Response> {

    let data = null;

    this.startLoader(url, data, isLoader);

    return this.http.delete(ServerUrl.MAIN + url).pipe(
      map((res: Response) => {
        return this.extractData(res, url, data, isLoader);
      }),
      catchError((err: Response) => {
        console.error(err);
        return this.handleErrorPromise(err, url, data, isLoader);
      })
    );
  }

  deleteAddress(url: string, data: any, isLoader?: boolean): Observable<Response> {
    this.startLoader(url, data, isLoader);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };

    return this.http.delete(ServerUrl.MAIN + url, options).pipe(
      map((res: Response) => {
        return this.extractData(res, url, data, isLoader);
      }),
      catchError((err: Response) => {
        console.error(err);
        return this.handleErrorPromise(err, url, data, isLoader);
      })
    );
  }

  deleteRecord(url: string, data: number, isLoader?: boolean): Observable<Response> {
    this.startLoader(url, data, isLoader);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: data
      },
    };
    return this.http.delete(ServerUrl.MAIN + url, options).pipe(
      map((res: Response) => {
        return this.extractData(res, url, data, isLoader);
      }),
      catchError((err: Response) => {
        console.error(err);
        return this.handleErrorPromise(err, url, data, isLoader);
      })
    );
  }

  extractData(res: Response, url, data, isLoader) {
    // Complete the loader as valid response is recieved
    this.stopLoader(url, data, isLoader);
    return res;
  }

  handleErrorPromise(errorResponse: Response | any, url: string, data: any, isLoader?: boolean) {
    this.stopLoader(url, data, isLoader);

    console.log('errorResponse = ', errorResponse);
    // console.log('errorResponse.status = ', errorResponse.status);
    // console.log('errorResponse.error.error', errorResponse.error.error);
    // console.log('errorResponse.error.error.error_description', errorResponse.error.error.error_description);

    if (
      errorResponse.status == 400
      && errorResponse.error.error == 'invalid_grant'
      && errorResponse.error.error_description == 'Bad credentials'
    ) {
      // this.notification.toast('Incorrect login id or password.', 'danger', 'Error', 5000);
    } else {
      // this.notification.toast('An error occured. Please try again.', 'danger', 'Error', 5000);
      // console.log(errorResponse.error.message || errorResponse.statusText);
    }

    return Promise.reject(errorResponse);
  }

}
