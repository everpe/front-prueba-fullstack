import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
declarations: [
  NavBarComponent,
  HomeUserComponent,
  ListUsersComponent,
  CreateUserComponent
],
imports:[
  UsersRoutingModule,
  CommonModule,
  ReactiveFormsModule,
  UsersRoutingModule
]
})
export class UsersModule {
}
