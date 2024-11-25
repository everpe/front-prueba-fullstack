import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '@feature/login/shared/services/auth-token/auth-token.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
constructor(private readonly authTokenService: AuthTokenService){}
  ngOnInit(){

    console.log(    this.authTokenService.getToken());
  }



}
