import {Component, OnInit} from '@angular/core';
import {UserService} from '../Services/userService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.userService.logout();

    this.router.navigate(['/login']);
  }
}
