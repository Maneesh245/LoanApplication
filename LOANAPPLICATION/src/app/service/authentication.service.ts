import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { AuthResponseDto } from '../model/AuthResponseDto';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private apiURL = "http://localhost:5000/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

    constructor(private http: HttpClient,private router: Router) {
 
    }

  

    login(post:any): Observable<AuthResponseDto> {
      
              return this.http.post<AuthResponseDto>(`${environment.apiUrl}/Login/Aurthenticate`,  JSON.stringify(post), this.httpOptions)
        .pipe(
          catchError(this.handleError)
        )
      }  
 

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('Role');
        this.router.navigate(['/', 'Login']);
     
    }
    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}