import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  basePath:string=environment.basePath;

  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private http:HttpClient,
    private router:Router,
    private snackBar: MatSnackBar,

    ){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>(this.basePath)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        this.snackBar.open('Ingresaste', '', {
          duration: 3000,
        });
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        this.snackBar.open('El usuario es Incorrecto', '', {
          duration: 3000,
        });
      }
    },err=>{
      this.snackBar.open('Ingresa tus credenciales', '', {
        duration: 3000,
      });
    })

  }
}
