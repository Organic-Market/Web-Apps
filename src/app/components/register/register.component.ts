import { User} from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hide1 = true;
  hide2 = true;

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
    ) {
    this.reactiveForm();
  }
  ngOnInit(): void {
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(30)]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password: [ '', [Validators.compose([Validators.required,Validators.minLength(8)])]],
    });
  }

  saveUser():void{
    const user: User={
      id:0,
      name: this.myForm.get('name')!.value,
      lastname: this.myForm.get('lastname')!.value,
      username: this.myForm.get('username')!.value,
      email: this.myForm.get('email')!.value,
      rol: this.myForm.get('rol')!.value,
      address: this.myForm.get('address')!.value,
      password:this.myForm.get('password')!.value,      
    };
    if(user.rol === "Agricultor"){
      console.log(user)
      this.userService.addUserA(user).subscribe({
        next: (data) => {
          this.snackBar.open('El agricultor fue registrado con exito!', '', {
            duration: 3000,
          });
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
      }})
    } 
    if(user.rol === "Mayorista"){
      this.userService.addUserM(user).subscribe({
        next: (data) => {
          this.snackBar.open('El mayorista fue registrado con exito!', '', {
            duration: 3000,
          });
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
