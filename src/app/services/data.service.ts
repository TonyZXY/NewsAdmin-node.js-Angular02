import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn:'root'
})

export class DataService {

  private urlHead = '10.10.6.111:3000/api/news';

  constructor(public http: HttpClient) {
    console.log('Data service in use');
  }

  getNews () {
    const url = `${this.urlHead}/news`;
    // return this.http.get(url).pipe();
    return url;
  }
}
