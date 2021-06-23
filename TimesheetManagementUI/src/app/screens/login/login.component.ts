import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../common/services/authentication.service";
import {NotificationService} from "../../common/services/notification.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "../../model/User";
import {NotificationType} from "../../enum/notification-type.enum";
import {HeaderType} from "../../enum/header-type.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  isLoading: boolean = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private notificationService: NotificationService) {}

  ngOnInit(): void {
    if(this.authenticationService.isUserLoggedIn()){
      this.router.navigateByUrl('/user');
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  onLoginSubmit(user: User): void {
    console.log(user);
    this.isLoading = true;
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response: HttpResponse<User>) => {
      const token = response.headers.get(HeaderType.JWT_TOKEN);
      this.authenticationService.saveToken(token);
      this.authenticationService.addUserToLocalCache(response.body);
      this.router.navigateByUrl('/home');
      this.isLoading = false;
    }, (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);
        this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
        this.isLoading = false;
      }
      )
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private sendErrorNotification(notificationType: NotificationType, message: string) {
    if(message){
      this.notificationService.notify(notificationType,message);
    } else{
      this.notificationService.notify(notificationType, 'AN ERROR OCCURRED, TRY AGAIN ')
    }
  }
}
