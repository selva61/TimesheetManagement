import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  onLogin(username: string, password: string) {
    return this.http.post('http://localhost:8080/user/login', {
      userName: username,
      password: password,
    });
  }

  onSignUp(
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string
  ) {
    return this.http.post('http://localhost:8080/user/register', {
      firstName: firstname,
      lastName: lastname,
      userName: username,
      password: password,
      email: email,
    });
  }
}
