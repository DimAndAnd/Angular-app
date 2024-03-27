import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged = false;
  USER_KEY = '[user]'

  constructor() {
    const lsUser = localStorage.getItem(this.USER_KEY);
  }

  login() { }

  logout() { }
}
