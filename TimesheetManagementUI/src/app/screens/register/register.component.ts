import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  onRegistrationSubmit(registerForm: NgForm) {
    const firstname = registerForm.value.firstName;
    const lastname = registerForm.value.lastName;
    const username = registerForm.value.username;
    const email = registerForm.value.emailId;
    const password = registerForm.value.password;

    this.userService
      .onSignUp(firstname, lastname, username, email, password)
      .subscribe(
        () => {
          alert('Registration success');
        },
        () => {
          alert('Registration failed');
        }
      );
  }
}
