import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {News} from '../entities/News';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
    console.log('Data service in use');
  }

  getNewsList (): Observable<News[]>  {
    return this.http.get<News[]>('http://10.10.6.111:3000/api/news').pipe();
  }
  getNews (id): Observable<News> {
    return this.http.get<News>( 'http://10.10.6.111:3000/api/news/' + id);
  }
}
