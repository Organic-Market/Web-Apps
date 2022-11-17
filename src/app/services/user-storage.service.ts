import { Injectable } from '@angular/core';
import { SessionUser } from '../models/session-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private key: string = 'ng-auth';

  constructor() {}

  get user(): SessionUser {
    let user = localStorage.getItem(this.key);

    if (user) {
      let objUser = JSON.parse(user);
      return objUser.user as SessionUser;
    }
    return null;
  }

  get isAuthenticated(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  set(object: any): void {
    localStorage.setItem(this.key, JSON.stringify(object));
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
