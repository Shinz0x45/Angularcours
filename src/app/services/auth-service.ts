import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    return user;
  }

  isAdmin() {
    return this.getCurrentUser()?.role === 'Admin';
  }
  
}
