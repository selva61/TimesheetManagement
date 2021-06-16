import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { UsersComponent } from './screens/users/users.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { SharedModule } from './common/shared.module';
import { EditProfileComponent } from './screens/edit-profile/edit-profile.component';
import { TimeSheetComponent } from './screens/time-sheet/time-sheet.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
