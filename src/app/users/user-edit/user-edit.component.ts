import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../Services/userService';
import {User} from '../../models/user.model';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  passwordNotEquals = false;
  usernameTooShort = false;
  passwordTooShort = false;

  constructor(public snackBar: MatSnackBar, private userService: UserService, private  router: Router) {
    this.user = userService.loggedUser;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.editForm);
    if (!this.editForm.valid)
      return;
    let isValid = true;
    let username = this.editForm.value.username;
    if (username.length < 4) {
      this.usernameTooShort = true;
      isValid = false;
    }
    else
      this.usernameTooShort = false;


    let password = this.editForm.value.password.trim();
    if (username.length < 4) {
      this.passwordTooShort = true;
      isValid = false;
    }
    else
      this.passwordTooShort = false;
    console.log('password: ' + password);
    let rpassword = this.editForm.value.rpassword.trim();
    console.log('rPassword: ' + rpassword);

    if (rpassword !== password) {
      console.log('Not equals')
      this.passwordNotEquals = true;
      isValid = false;
    }
    else
      this.passwordNotEquals = false;

    if (!isValid)
      return;

    if (this.userService.addUser(new User(username, password))) {
      let msg = this.snackBar.open('Settings saved.');
      msg._dismissAfter(1500);

      setTimeout(() => {
        this.router.navigate(['/main']);
      }, 1550);
    }
  }
}
