import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 


  constructor(private http:HttpClient,
              public router: Router
    ) { }

    authenfication(login: string, mdp: string): Observable<any>{
      return this.http.post<any>(`${baseUrl}/login`, {login, mdp },httpOptions).pipe(
             catchError(err => throwError(this.handlerError(err))
         ));
    }
     handlerError(error: HttpErrorResponse){
       return throwError(error);
     }
     
     signOut(): void {
      window.sessionStorage.clear();
    }
}