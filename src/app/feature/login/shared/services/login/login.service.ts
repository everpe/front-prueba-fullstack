import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LoginResponse } from '@shared/interfaces/LoginResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private readonly apiUrl = environment.API;

  constructor(private readonly http: HttpClient) {}

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  async login(email: string, password: string): Promise<LoginResponse> {
    const body = { email, password };
    try {
      const response = await this.http.post<LoginResponse>(`${this.apiUrl}/login`, body).toPromise();
      return response;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }




}
