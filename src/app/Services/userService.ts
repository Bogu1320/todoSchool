import {User} from '../models/user.model';
import {Subject} from 'rxjs/Subject';

export class UserService {
  users: User[] = [
    new User('bartek','test')
];
  usersChanged = new Subject<User[]>();
  loggedUser: User;

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    if (this.users.find((x: User) => x.name.trim() === user.name.trim()) !== undefined)
      throw new Error('This username is restricted.');
    this.users.push(user);
    this.usersChanged.next(this.getUsers());
    return true;
  }

  login(username: string, password: string) {

    return this.loggedUser = this.users.find(function(user){
      return user.name === username && user.password === password;
    })
  }

  logout(){
    this.loggedUser = null;
  }
}
