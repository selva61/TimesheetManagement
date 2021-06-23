import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { UsersComponent } from './screens/users/users.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { SharedModule } from './common/shared.module';
import { EditProfileComponent } from './screens/edit-profile/edit-profile.component';
import { TimeSheetComponent } from './screens/time-sheet/time-sheet.component';
import {AuthenticationService} from "./common/services/authentication.service";
import {UserService} from "./common/services/user.service";
import {AuthInterceptor} from "./auth.interceptor";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {NotifierModule, NotifierOptions} from "angular-notifier";
import {NotificationService} from "./common/services/notification.service";
const notifierCustomOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 50,
    },
    vertical: {
      position: 'top',
      distance: 75,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SidebarComponent,
    RegisterComponent,
    HomeComponent,
    EditProfileComponent,
    TimeSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NotifierModule.withConfig(notifierCustomOptions)
  ],
  providers: [NotificationService,AuthenticationGuard,AuthenticationService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
