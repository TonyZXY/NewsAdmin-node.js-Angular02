import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {News} from '../entities/News';
import {Video} from '../entities/Video';
import {NewsFlash} from '../entities/NewsFlash';
import {Genuine} from '../entities/Genuine';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private urlHead = 'http://10.10.6.111:3000/api';
  errormessage = '';

  constructor(private http: HttpClient) {
    console.log('Data service in use');
    this.errormessage = '';
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
    return this.http.get<Genuine>(this.urlHead + '/genuine/' + id);
  }
  addNews (news: News): string {
    this.http.post<News>(this.urlHead + '/news', news, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  addVideo (video: Video): string {
    this.http.post<Video>(this.urlHead + '/video', video, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }
  addNewsFlash (newsflash: NewsFlash): string {
    this.http.post<NewsFlash>(this.urlHead + '/flashlist', newsflash, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }
  addGenuine (genuine: Genuine): string {
    this.http.post<Genuine>(this.urlHead + '/genuine', genuine, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  deleteNews(_id: string): string {
    this.http.delete(this.urlHead + '/news' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
    return this.errormessage;
  }
  deleteVideo(_id: string): string {
    this.http.delete(this.urlHead + '/video' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
    return this.errormessage;
  }
  deleteNewsFlash(_id: string): string {
    this.http.delete(this.urlHead + '/flashlist' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
    return this.errormessage;
  }
  deleteGeniune(_id: string): string {
    this.http.delete(this.urlHead + '/genuine' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
    return this.errormessage;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errormessage = error.error.message;
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.errormessage = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
