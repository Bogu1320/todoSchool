import {NgModule} from '@angular/core';
import {CanActivate, RouterModule, Routes} from '@angular/router';
import {OrderlistComponent} from './orderlist/orderlist.component';
import {UserLoginComponent} from './users/user-login/user-login.component';
import {MainComponent} from './main/main.component';
import {UserRegisterComponent} from './users/user-register/user-register.component';
import {ListContainerComponent} from './list-container/list-container.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {AuthService} from './Services/authService';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'main', component: MainComponent, canActivate :[AuthService],
    children:[
      {path: 'lists', component: ListContainerComponent},
      {path: 'orderlist', component: OrderlistComponent},
      {path: 'userEdit', component: UserEditComponent},
    ]},

  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouteModule {

}
