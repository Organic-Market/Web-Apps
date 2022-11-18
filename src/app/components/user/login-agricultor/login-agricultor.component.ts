import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { UserStorageService } from 'src/app/services/user-storage.service';

@Component({
  selector: 'app-login-agricultor',
  templateUrl: './login-agricultor.component.html',
  styleUrls: ['./login-agricultor.component.css']
})
export class LoginAgricultorComponent implements OnInit {

  hide = true;
  basePath: string = environment.basePath;
  actualUser!: User;
  auth!: Boolean;
  myForm!: FormGroup;

  public model: Login = new Login();
  public invalid: boolean;

  constructor(
    private userService: UserService,
    private userStorageService: UserStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let self = this;

    this.userService.signInA(this.model).subscribe({
      next(data: any) {
        console.log(data);
        self.userStorageService.set(data);
        self.router.navigate(['/panel']);
      },
      error() {
        self.invalid = true;
      },
    });
  }

}
