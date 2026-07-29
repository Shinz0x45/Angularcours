import { Component } from '@angular/core';

@Component({
  selector: 'app-users-table',
  imports: [],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable {

   users: any[] = [];

  ngOnInit(): void {

    const usersStorage = JSON.parse(localStorage.getItem('users') || '[]');

    this.users = usersStorage.map((user: any, index: number) => ({
      id: index + 1,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      role: user.role
    }));

  }

  supprimerUser(index: number): void {

  this.users.splice(index, 1);

  localStorage.setItem('users', JSON.stringify(this.users));

}

}
