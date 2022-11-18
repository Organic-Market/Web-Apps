import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { SessionUser } from 'src/app/models/session-user';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  myForm!: FormGroup;
  idUser: any;
  usernameLocal: any;

  public user: SessionUser;

  constructor(
    private userStorageService: UserStorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = this.userStorageService.user;
  }

  


}
