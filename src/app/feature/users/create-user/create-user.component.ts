import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  createUserForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.createUserForm.valid) {
      const { name, job } = this.createUserForm.value;
      try {
        const response = await this.userService.createUser({ name, job });
        alert(`User ${response.name} created with ID: ${response.id}`);
        this.createUserForm.reset();
      } catch (error) {
        alert('Error creating user. Please try again.');
        console.error(error);
      }
    }
  }






  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
