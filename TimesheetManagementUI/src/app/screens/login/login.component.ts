import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  onLoginSubmit(loginForm: NgForm) {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    this.userService.onLogin(username, password).subscribe(
      () => {
        alert('Login success');
      },
      () => {
        alert('Login failed');
      }
    );
  }
}
