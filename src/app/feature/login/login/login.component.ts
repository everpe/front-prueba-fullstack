import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private readonly fb: FormBuilder,
              private readonly loginService: LoginService,
              private readonly router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }



  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }


  // Método auxiliar para obtener mensajes de error
  getEmailError(): string | null {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'Email is required';
    }
    return null;
  }

  getPasswordError(): string | null {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'Password is required';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'The minimum of characters will be 8';
    }
    return null;
  }

  // Método para manejar el envío del formulario
  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        const response = await this.loginService.login(email, password);
        this.successMessage = `Login successful. Token: ${response.token}`;
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = 'Invalid credentials. Please try again.';
        this.successMessage = '';
      }
    }
  }

}
