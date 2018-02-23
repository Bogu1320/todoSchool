import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../Services/userService';
import {Router} from '@angular/router';
import {log} from 'util';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  @Input() showRegisterButton = true;
  @ViewChild('loginForm') signupForm: NgForm;

  constructor(public snackBar: MatSnackBar, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
    if (!this.signupForm.valid)
      return;

    let password = this.signupForm.value.userPassword;
    let username = this.signupForm.value.username;

    let user = this.userService.login(username, password);

    if (user !== undefined)
      this.router.navigate(['/main'], {queryParams: {}});
    else {
      let msg = this.snackBar.open('Invalid user or password!','', {duration: 1500});
    }
  }
  registerUser(){
    this.router.navigate(['/register']);
  }
}
