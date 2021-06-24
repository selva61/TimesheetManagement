import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpResponse} from "@angular/common/http";
import { environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../model/User";
import { JwtHelperService } from "@auth0/angular-jwt";
import {CustomHttpResponse} from "../../model/custom-http-response";

@Injectable({providedIn: 'root'})
export class UserService {
  private host = environment.apiUrl;
  constructor(private http: HttpClient) {}


  /*onLogin(username: string, password: string) {
    return this.http.post(`${this.host}/user/login`, {
      userName: username,
      password: password,
      returnSecureToken: true,
    });
  }*/


  onSignUp(
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string
  ) {
    return this.http.post(`${this.host}/user/register`, {
      firstName: firstname,
      lastName: lastname,
      userName: username,
      password: password,
      email: email,
      returnSecureToken: true,
    });
  }

  getUsers(): Observable<User[] | HttpErrorResponse> {
    return this.http.get<User[]>(`${this.host}/user/list`);
  }

  addUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/add`, formData);
  }

  updateUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/update`, formData);
  }

  resetPassword(newPassword: string): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.get<CustomHttpResponse>(`${this.host}/user/resetpassword${newPassword}`);
  }

  updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/updateProfileImage`, formData,
      {reportProgress: true, observe: 'events'});
  }

  deleteUser(userId: number): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.delete<CustomHttpResponse>(`${this.host}/user/delete/${userId}`);
  }

  addUsersToLocalCache(users: User[]): void {
    localStorage.setItem('users',JSON.stringify(users));
  }

  getUsersFromLocalCache(): User[] | null {
    if(localStorage.getItem('users')){
      return JSON.parse(<string>localStorage.getItem('users'));
    }
    return null;
  }

  createUserFormData(loggedInUsername: string, user: User, profileImage: File): FormData {
   const formData = new FormData();
   formData.append('currentUsername',loggedInUsername);
   formData.append('firstName',user.firstName);
   formData.append('lastName', user.lastName);
   formData.append('username', user.userName);
   formData.append('password', user.password);
   formData.append('email', user.email);
   formData.append('role', user.role);
   formData.append('profileImage', profileImage);
   formData.append('isActive', JSON.stringify(user.isActive));
   formData.append('isNotLocked', JSON.stringify(user.isNotLocked));
   return formData;
  }
}
