import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loandetail } from '../model/loandetail';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiURL = "https://jsonplaceholder.typicode.com";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<loandetail[]> {
    return this.httpClient.get<loandetail[]>(`${environment.apiUrl}/Login/Aurthenticate`)
    .pipe(
      catchError(this.handleError)
    )
  }
    
  create(post:any): Observable<loandetail> {
    return this.httpClient.post<loandetail>(`${environment.apiUrl} /posts/`, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }  
    
  find(id:number): Observable<loandetail> {
    return this.httpClient.get<loandetail>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }
    
  update(id:number, post:any): Observable<loandetail> {
    return this.httpClient.put<loandetail>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
     catchError(this.handleError)
    )
  }
    
  delete(id:number){
    return this.httpClient.delete<loandetail>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
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