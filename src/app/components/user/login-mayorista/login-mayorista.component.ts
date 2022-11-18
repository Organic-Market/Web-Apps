import { UserStorageService } from './../../../services/user-storage.service';
import { UserService } from './../../../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-mayorista',
  templateUrl: './login-mayorista.component.html',
  styleUrls: ['./login-mayorista.component.css']
})
export class LoginMayoristaComponent implements OnInit {

  hide = true;
  basePath: string = environment.basePath;
  actualUser!: User;
  auth!: Boolean;
  myForm!: FormGroup;

  public loginForm!: FormGroup;
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

    this.userService.signInM(this.model).subscribe({
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
