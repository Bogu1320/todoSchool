import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators, FormGroup, NgForm} from '@angular/forms';
import {UserService} from '../../Services/userService';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;
  passwordNotEquals = false;
  usernameTooShort = false;
  passwordTooShort = false;

  constructor(public snackBar: MatSnackBar, private userService: UserService, private  router: Router) {

  }

  ngOnInit() {
    // this.userNameFormGroup = this._formBuilder.group({
    //   txtUsername: ['', Validators.required]
    // });
    // this.passwordFormGroup = this._formBuilder.group({
    //   txtPassword: ['', Validators.required],
    //   txtPasswordRepeat: ['', Validators.required]
    // });
  }

  onSubmit() {
    console.log(this.registerForm);
    if (!this.registerForm.valid)
      return;
    let isValid = true;
    let username = this.registerForm.value.username;
    if (username.length < 4) {
      this.usernameTooShort = true;
      isValid = false;
    }
    else
      this.usernameTooShort = false;


    let password = this.registerForm.value.password.trim();
    if (username.length < 4) {
      this.passwordTooShort = true;
      isValid = false;
    }
    else
      this.passwordTooShort = false;
    console.log('password: '+ password);
    let rpassword = this.registerForm.value.rpassword.trim();
    console.log('rPassword: '+ rpassword);

    if (rpassword !== password) {
      console.log('Not equals')
      this.passwordNotEquals = true;
      isValid = false;
    }
    else
      this.passwordNotEquals = false;

    if(!isValid)
      return;

    if (this.userService.addUser(new User(username, password))) {
      let msg = this.snackBar.open('User has been created. You will be redirected to login page.');
      msg._dismissAfter(1500);

      setTimeout(() => {
        this.router.navigate(['/login']);
      },2000);
    }


  }
}
