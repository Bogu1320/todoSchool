import {UserService} from './userService';
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService implements CanActivate {
  constructor(private userService: UserService, private router: Router) {

  }

  canActivate() {
    console.log('CanActivate');
    console.log('LoggedUser: ' + this.userService.loggedUser);
    let canActivate = this.userService.loggedUser !== null && this.userService.loggedUser !== undefined;
    console.log('CanActivate: ' + canActivate);
    if (canActivate)
      return canActivate;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
