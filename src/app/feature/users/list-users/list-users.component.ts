
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthTokenService } from '@feature/login/shared/services/auth-token/auth-token.service';
import { User } from '@shared/interfaces/User.interface';
import { UsersService } from '../create-user/shared/services/users/users.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private readonly authTokenService: AuthTokenService,
    private readonly usersService: UsersService,
  ){

  }


  async ngOnInit(): Promise<void> {
    try {
      const response = await this.usersService.getUsers(1, 10); // Página 1, 6 usuarios
      this.users = response.data;
      this.filteredUsers = [...this.users]; // Inicializa con todos los usuarios
    } catch (error) {
      console.error('Error fetching users', error);
    }
  }

  filterUsers(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    // Si el filtro tiene menos de 3 caracteres, restaura la lista original
    if (filterValue.length < 3) {
      this.filteredUsers = [...this.users];
      return;
    }

    // Filtra los usuarios por coincidencia en nombre o email
    this.filteredUsers = this.users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(filterValue)
    );
  }





  async onDeleteUser(user: User): Promise<void> {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar a ${user.first_name} ${user.last_name}?`);
    if (confirmDelete) {
      try {
        await this.usersService.deleteUserForIndex(user.id);
        // alert(`Usuario ${user.first_name} ${user.last_name} eliminado con éxito`);
        this.users = this.users.filter(u => u.id !== user.id);
        this.filteredUsers = this.users;
      } catch (error) {
        alert('Ocurrió un error al eliminar el usuario');
      }
    }
  }




}
