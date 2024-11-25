import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CreateUserRequest, CreateUserResponse } from '@shared/interfaces/User.interface';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private readonly apiUrl = environment.API;

  constructor(private readonly http: HttpClient) {}

  async getUsers(page: number = 1, perPage: number = 10): Promise<any> {
    const url = `${this.apiUrl}/users?page=${page}&per_page=${perPage}`;
    try {
      const response = await this.http.get(url).toPromise();
      return response;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  }



  async createUser(data: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      const response = await this.http
        .post<CreateUserResponse>(`${this.apiUrl}/users`, data)
        .toPromise();
      return response;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Unable to create user');
    }
  }

  async deleteUserForIndex(userId: number): Promise<void> {
    const url = `${this.apiUrl}/users/${userId}`;
    try {
      await this.http.delete<void>(url).toPromise();
    } catch (error) {
      throw new Error('Error al eliminar el usuario');
    }
  }
}
