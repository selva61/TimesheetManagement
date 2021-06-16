import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  onLoginSubmit(loginForm: NgForm) {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    this.isLoading = true;
    this.userService.onLogin(username, password).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/', 'home']);
      },
      () => {
        alert('Login failed');
        this.isLoading = false;
      }
    );
  }
}
