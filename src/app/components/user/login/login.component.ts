import { Login } from '../../../models/login';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserStorageService } from 'src/app/services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  basePath: string = environment.basePath;
  actualUser!: User;
  auth!: Boolean;
  myForm!: FormGroup;

  public loginForm!: FormGroup;
  public model: Login = new Login();
  public invalid: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private userStorageService: UserStorageService

  ) {
   }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  

  login1() {
    let self = this;
    this.userService.signInM(this.model).subscribe({
      next(data: any) {
        console.log(data);
        self.userStorageService.set(data);
        this.snackBar.open('Ingresaste', '', {
          duration: 3000,
        });
        this.loginForm.reset();
        this.router.navigate(['panel']);
      },
      error() {
        self.invalid = true;
        this.snackBar.open('Error en credenciales', '', {
        duration: 3000,
        });
      },
    });
  }

  login2() {
    let self = this;
    this.userService.signInA(this.model).subscribe({
      next(data: any) {
        console.log(data);
        self.userStorageService.set(data);
        this.snackBar.open('Ingresaste', '', {
          duration: 3000,
        });
        this.loginForm.reset();
        this.router.navigate(['panel']);
     },
     error() {
       self.invalid = true;
       this.snackBar.open('Error en credenciales', '', {
        duration: 3000,
      });
     },
    });
  }

   /* login() {
     this.http.get<any>(`${this.basePath}/mayorista`)
       .subscribe(res => {

          const user = res.find((a: any) => {

           if (a.email === this.loginForm.value.email && a.password === this.loginForm.value.password) {
             this.userService.setActualIde(a.id);
             localStorage.setItem("username",a.username);
             this.auth = true;
           }
           return this.auth
          });
         if (user) {
           this.snackBar.open('Ingresaste', '', {
             duration: 3000,
           });
           this.loginForm.reset();
           this.router.navigate(['panel']);
          } else {
           this.http.get<any>(`${this.basePath}/agricultor`)
             .subscribe(res => {
               const user = res.find((a: any) => {

                 if (a.email === this.loginForm.value.email && a.password === this.loginForm.value.password) {
                   this.userService.setActualIde(a.id);
                   localStorage.setItem("username",a.username);
                   this.auth = true;
                 }
                 return this.auth
               });
               if (user) {
                 this.snackBar.open('Ingresaste', '', {
                   duration: 3000,
                 });
                 this.loginForm.reset();
                 this.router.navigate(['panel']);
               }
               else{
                 this.snackBar.open('Error en credenciales', '', {
                   duration: 3000,
                 });
              }
             })
          }
       }, err => {
         this.snackBar.open('Ingresa tus credenciales', '', {
           duration: 3000,
        });
       })

   } */
}
