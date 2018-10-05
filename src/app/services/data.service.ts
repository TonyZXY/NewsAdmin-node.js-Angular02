import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {News} from '../entities/News';
import {Video} from '../entities/Video';
import {NewsFlash} from '../entities/NewsFlash';
import {Genuine} from '../entities/Genuine';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Update} from '../entities/Update';
import { Activity } from '../entities/Activity';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private urlHead = 'https://cryptogeekapp.com/api';
  errormessage = '';


  constructor(private http: HttpClient) {
    console.log('Data service in use');
    this.errormessage = '';
  }

  getNewsList(): Observable<News[]> {
    return this.http.get<News[]>(this.urlHead + '/news').pipe();
  }

  getNews(id): Observable<News> {
    return this.http.get<News>(this.urlHead + '/news/' + id);
  }

  getVideosList(): Observable<Video[]> {
    return this.http.get<Video[]>(this.urlHead + '/video').pipe();
  }

  getVideo(id): Observable<Video> {
    return this.http.get<Video>(this.urlHead + '/videos/' + id);
  }

  getNewsflashList(): Observable<NewsFlash[]> {
    return this.http.get<NewsFlash[]>(this.urlHead + '/flashlist').pipe();
  }

  getActivityList(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.urlHead + '/eventAll').pipe();
  }

  getFlash(id): Observable<NewsFlash> {
    return this.http.get<NewsFlash>(this.urlHead + '/flashList/' + id);
  }

  getGenuineList(): Observable<Genuine[]> {
    return this.http.get<Genuine[]>(this.urlHead + '/genuine').pipe();
  }

  getGenuine(id): Observable<Genuine> {
    return this.http.get<Genuine>(this.urlHead + '/genuine/' + id);
  }

  addNews(news: News): string {
    this.http.post<News>(this.urlHead + '/news', news, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  addVideo(video: Video): string {
    this.http.post<Video>(this.urlHead + '/video', video, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  addNewsFlash(newsflash: NewsFlash): string {
    newsflash.available = true;
    this.http.post<NewsFlash>(this.urlHead + '/flash', newsflash, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  addGenuine(genuine: Genuine): string {
    this.http.post<Genuine>(this.urlHead + '/genuine', genuine, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  addActivity(activity: Activity): string {
    this.http.post<Activity>(this.urlHead + '/addEvent', activity, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  editNews(news: News): string {
    this.http.put<News>(this.urlHead + '/news/' + news._id, news, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  editFlash(flash: NewsFlash): string {
    this.http.put<NewsFlash>(this.urlHead + '/flash/' + flash._id, flash, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  editVideo(video: Video): string {
    this.http.put<Video>(this.urlHead + '/videos/' + video._id, video, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }

  editGenuine(genuine: Genuine): string {
    console.log('Dataservice: ' + genuine);
    this.http.put<Genuine>(this.urlHead + '/genuine/' + genuine._id, genuine, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }


  deleteNews(_id: string): Observable<{}> {
    return this.http.delete(this.urlHead + '/news/' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteVideo(_id: string): Observable<{}> {
    return this.http.delete(this.urlHead + '/video/' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteNewsFlash(_id: string): Observable<{}> {
    return this.http.delete(this.urlHead + '/flash/' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteGeniune(_id: string): Observable<{}> {
    return this.http.delete(this.urlHead + '/genuine/' + _id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  searchNews(from, to): Observable<{}> {
    return this.http.get(this.urlHead + '/searchNewsTime?' + 'from=' + from + '&to=' + to).pipe(
      catchError(this.handleError)
    );
  }

  searchGenuine(from, to): Observable<{}> {
    return this.http.get(this.urlHead + '/searchGenuineTime?from=' + from + '&to=' + to).pipe(
      catchError(this.handleError)
    );
  }

  searchVideo(from, to): Observable<{}> {
    return this.http.get(this.urlHead + '/searchVideoTime?from=' + from + '&to=' + to).pipe(
      catchError(this.handleError)
    );
  }

  searchFlash(from, to): Observable<{}> {
    return this.http.get(this.urlHead + '/searchFlashTime?from=' + from + '&to=' + to).pipe(
      catchError(this.handleError)
    );
  }

  searchNewsByKeyWords(key): Observable<{}> {
    return this.http.get(this.urlHead + '/searchnews?' + 'patten=' + key + '&languageTag=EN&languageTag=CN').pipe(
      catchError(this.handleError)
    );
  }

  searchVideoByKeyWords(key): Observable<{}> {
    return this.http.get(this.urlHead + '/searchVideo?' + 'patten=' + key + '&languageTag=EN&languageTag=CN').pipe(
      catchError(this.handleError)
    );
  }

  searchFlashByKeyWords(key): Observable<{}> {
    return this.http.get(this.urlHead + '/searchFlash?' + 'patten=' + key + '&languageTag=EN&languageTag=CN').pipe(
      catchError(this.handleError)
    );
  }

  searchGeniuneByKeyWords(key): Observable<{}> {
    return this.http.get(this.urlHead + '/searchgenuine?' + 'patten=' + key + '&languageTag=EN&languageTag=CN').pipe(
      catchError(this.handleError)
    );
  }

  searchNewsByTags(tags): Observable<{}> {
    return this.http.get(this.urlHead + '/getNewsContentOnly?' + 'languageTag=' + tags[0] +
      '&languageTag=' + tags[1]).pipe(
      catchError(this.handleError)
    );
  }

  searchVideoByTags(tags): Observable<{}> {
    return this.http.get(this.urlHead + '/getVideoTypeOnly?' + 'languageTag=' + tags[0]
      + '&languageTag=' + tags[1] + '&typeTag=' + tags[2] + '&typeTag=' + tags[3]).pipe(
      catchError(this.handleError)
    );
  }

  searchFlashByTags(tags): Observable<{}> {
    return this.http.get(this.urlHead + '/searchFlashByTag?' + 'languageTag=' + tags[0]
      + '&languageTag=' + tags[1] + '&sentTag=' + tags[2] + '&sentTag=' + tags[3]).pipe(
      catchError(this.handleError)
    );
  }

  searchGeniuneByTags(tags): Observable<{}> {
    return this.http.get(this.urlHead + '/getgenuine?' + 'languageTag=' + tags[0]
      + '&languageTag=' + tags[1] + '&genuineTag=' + tags [2] + '&genuineTag=' + tags[3] + '&genuineTag=' + tags[4]).pipe(
      catchError(this.handleError)
    );
  }

  getUpdate(): Observable<Update> {
    return this.http.get<Update>(this.urlHead + '/update').pipe();
  }

  editUpdate(update: Update): string {
    this.http.post<Update>(this.urlHead + '/update', update, httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe();
    return this.errormessage;
  }


  // deleteGenuine(_id: string): Observable<{}> {
  //    return this.http.delete(this.urlHead + '/genuine/' + _id, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

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


