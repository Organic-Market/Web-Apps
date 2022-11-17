import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  myForm!: FormGroup;
  user!: User;
  idUser: any;
  usernameLocal: any;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.idUser = this.userService.getIdActaulUser();
    this.usernameLocal = this.userService.getUsernameActualUser();
    this.userService.getUserAgricultorByUsername(this.usernameLocal).subscribe({
      next: (data) => {
        if (data != null) {
          this.user = data;
          this.myForm = this.fb.group({
            name: [this.user.name, [Validators.required, Validators.maxLength(60)]],
            lastname: [this.user.lastname, [Validators.required, Validators.maxLength(60)]],
            username: [this.user.username, [Validators.required]],
            email: [this.user.email, [Validators.required, Validators.email]],
            rol: [this.user.rol],
            address: [this.user.address],
            password: [this.user.password, [Validators.required]],
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    }); */
  }

  /* updateUser() {
    const user: User = {
      id: this.idUser,
      name: this.myForm.get('name')!.value,
      lastname: this.myForm.get('lastname')!.value,
      username: this.myForm.get('username')!.value,
      email: this.myForm.get('email')!.value,
      rol: this.myForm.get('rol')!.value, 
      address: this.myForm.get('address')!.value,
      password: this.myForm.get('password')!.value,
    };
    this.userService.getUserAgricultorByUsername(user.username).subscribe({
      next: (data) => {
        this.userService.updateUserA(this.idUser, user).subscribe({
          next: (data) => {
            this.snackBar.open('Tu perfil fue actualizado con exito!', '', {
              duration: 3000,
            });
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        this.userService.updateUserM(this.idUser, user).subscribe({
          next: (data) => {
            this.snackBar.open('Tu perfil fue actualizado con exito!', '', {
              duration: 3000,
            });
          },
          error: (err) => {
            console.log(err);
          },
        });
        console.log(err);
      },
    })
  }
 */

}
