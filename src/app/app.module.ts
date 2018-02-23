import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRouteModule} from './app-route.module';
import {AppComponent} from './app.component';
import {OrderlistComponent} from './orderlist/orderlist.component';
import {OrderItemComponent} from './orderlist/order-item/order-item.component';
import {UserLoginComponent} from './users/user-login/user-login.component';
import {UserRegisterComponent} from './users/user-register/user-register.component';
import {MainComponent} from './main/main.component';
import {
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule,
  MatIconModule,
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {ItemService} from './Services/itemService';
import {UserService} from './Services/userService';
import {ListService} from './Services/listService';
import {ListContainerComponent} from './list-container/list-container.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {AuthService} from './Services/authService';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderlistComponent,
    OrderItemComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserEditComponent,
    ListContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatStepperModule,
    MatSnackBarModule,
    AppRouteModule
  ],
  providers: [ItemService, ListService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
