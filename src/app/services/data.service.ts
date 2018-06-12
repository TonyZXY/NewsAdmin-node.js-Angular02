import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {News} from '../entities/News';
import {Video} from '../entities/Video';
import {NewsFlash} from '../entities/NewsFlash';
import {Genuine} from '../entities/Genuine';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private urlHead = 'http://10.10.6.111:3000/api';

  constructor(private http: HttpClient) {
    console.log('Data service in use');
  }

  getNewsList (): Observable<News[]>  {
    return this.http.get<News[]>('http://10.10.6.111:3000/api/news').pipe();
  }
  getNews (id): Observable<News> {
    return this.http.get<News>('http://10.10.6.111:3000/api/news/' + id);
  }
  getVideosList (): Observable<Video[]>  {
    return this.http.get<Video[]>(this.urlHead + '/video').pipe();
  }
  getVideo(id): Observable<Video> {
    return this.http.get<Video>(this.urlHead + '/videos/' + id);
  }
  getNewsflashList (): Observable<NewsFlash[]>  {
    return this.http.get<NewsFlash[]>(this.urlHead + '/flashlist').pipe();
  }
  getFlash(id): Observable<NewsFlash> {
    return this.http.get<NewsFlash>(this.urlHead + '/flashList/' + id);
  }
  getGenuineList (): Observable<Genuine[]>  {
    return this.http.get<Genuine[]>(this.urlHead + '/genuine').pipe();
  }
  getGenuine (id): Observable<Genuine> {
    return this.http.get<Genuine>( this.urlHead + '/genuine/' + id);
  }
}
