import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginstatus = false;
  errorMessage = '';
  constructor(private http: HttpClient) { }

  authLogin(userName, passWord): Observable<any> {
    const user = new User();
    user.username = userName;
    user.password = passWord;
    return this.http.post('https://bglnewsbkend.tk/login', user, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = error.error.message;
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.errorMessage = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  loggedIn() {
    // return !!localStorage.getItem('loginstatus');
    return !! sessionStorage.getItem('loginstatus');
  }

  getToken() {
    // return localStorage.getItem('token');
    return sessionStorage.getItem('token');
  }


  get loginstatus(): boolean {
    return this._loginstatus;
  }

  set loginstatus(value: boolean) {
    this._loginstatus = value;
  }
}
export class User {
  username: string;
  password: string;
}
