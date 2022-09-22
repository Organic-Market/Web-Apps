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
      names: ['', [Validators.required, Validators.maxLength(30)]],
      lastnames: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', [Validators.required]],
      password: [ '', [Validators.compose([Validators.required,Validators.minLength(8)])]],
    });
  }

  saveUser():void{
    const user: User={
      id:0,
      names: this.myForm.get('names')!.value,
      lastnames: this.myForm.get('lastnames')!.value,
      email: this.myForm.get('email')!.value,
      rol: this.myForm.get('rol')!.value,
      password:this.myForm.get('password')!.value,      
    };
    this.userService.addUser(user).subscribe({
      next: (data) => {
        this.snackBar.open('El empleado fue registrado con exito!', '', {
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
