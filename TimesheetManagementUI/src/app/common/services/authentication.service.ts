import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../model/User";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host = environment.apiUrl;
  private token: string | null | undefined;
  private loggedInUsername: string | null | undefined;
  private jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) { }

  login( user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.host}/user/login`, user, {observe:'response'})
  }

  register( user: User): Observable<User> {
    return this.http.post<User>
    (`${this.host}/user/register`, user)
  }

  public logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('Users')
  }

  public saveToken(token: string | null): void {
    this.token = token;
    if (typeof token === "string") {
      localStorage.setItem('token', token);
    }
  }

  public addUserToLocalCache(user: User | null): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): User {
    return JSON.parse(<string>localStorage.getItem('user'));
  }

  public loadToken(): void {
     this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return <string>this.token;
  }

  public isUserLoggedIn(): boolean{
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub !=null || ''){
        if (!this.jwtHelper.isTokenExpired(this.token)){
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    } else {
      this.logOut();
      return false;
    }
  }
}
