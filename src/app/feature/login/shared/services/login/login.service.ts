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
  async login(credentials: { email: string; password: string }): Promise<LoginResponse> {
    try {
      // Hacer la solicitud POST usando HttpClient y toPromise
      const response = await this.http
        .post<LoginResponse>(`${this.apiUrl}/login`, credentials)
        .toPromise();

      return response;
    } catch (error: any) {
      // Manejo del error con un mensaje claro
      const errorMessage = error?.error?.error || 'Invalid credentials';
      throw new Error(errorMessage);
    }
  }



}
