import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
declarations: [
  NavBarComponent,
  HomeUserComponent,
  ListUsersComponent,
  CreateUserComponent
],
imports:[
  UsersRoutingModule
]
})
export class UsersModule {
}
