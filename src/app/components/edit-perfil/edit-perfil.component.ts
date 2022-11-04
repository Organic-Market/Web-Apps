import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user';
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


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUser = this.userService.getIdActaulUser();
    this.userService.getUserId(this.idUser).subscribe((data) => {
      this.user = data;
      this.myForm = this.fb.group({
        names: [this.user.names,[Validators.required, Validators.maxLength(60)]],
        lastnames: [this.user.lastnames,[Validators.required, Validators.maxLength(60)]],
        username: [this.user.username, [Validators.required]],
        email: [this.user.email, [Validators.required, Validators.email]],
        rol: [this.user.rol],
        address: [this.user.address],
        password: [this.user.password, [Validators.required]],
      });
    });
  }

  updateUser() {
    const user: User = {
      id: this.idUser,
      names: this.myForm.get('names')!.value,
      lastnames: this.myForm.get('lastnames')!.value,
      username: this.myForm.get('username')!.value,
      email: this.myForm.get('email')!.value,
      rol: this.myForm.get('rol')!.value,
      address: this.myForm.get('address')!.value,
      password: this.myForm.get('password')!.value,
    };
    this.userService.updateUser(this.idUser, user).subscribe({
      next: (data) => {
        this.snackBar.open('Tu perfil fue actualizado con exito!', '', {
          duration: 3000,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
