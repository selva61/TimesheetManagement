export class User{
  public id: number;
  public userId: string;
  public firstName: string;
  public lastName: string;
  public userName: string;
  public password: string;
  public email: string;
  public phone: number;
  public profileImgUrl: string;
  public lastLoginDate: Date;
  public lastLoginDateDisplay: Date;
  public joinDate: Date;
  public role: string;
  public authorities: [];
  public isActive: boolean;
  public isNotLocked: boolean;


  constructor() {
    this.id = 0;
    this.userId = '';
    this.firstName = '';
    this.lastName = '';
    this.userName = '';
    this.password = '';
    this.email = '';
    this.phone = 0;
    this.role = '';
    this.profileImgUrl = '';
    this.lastLoginDate = new Date();
    this.lastLoginDateDisplay = new Date();
    this.joinDate = new Date();
    this.authorities = [];
    this.isActive = false;
    this.isNotLocked = false;
  }

  /*constructor(id: number, userId: string, firstName: string, lastName: string, userName: string, password: string, email: string, phone: number, profileImgUrl: string, lastLoginDate: Date, lastLoginDateDisplay: Date, joinDate: Date, role: string, authorities: [], isActive: boolean, isNotLocked: boolean) {
    this.id = id;
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.profileImgUrl = profileImgUrl;
    this.lastLoginDate = lastLoginDate;
    this.lastLoginDateDisplay = lastLoginDateDisplay;
    this.joinDate = joinDate;
    this.role = role;
    this.authorities = authorities;
    this.isActive = isActive;
    this.isNotLocked = isNotLocked;
  }*/


}
