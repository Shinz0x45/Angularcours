import { Component } from '@angular/core';

@Component({
  selector: 'app-users-table',
  imports: [],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable {

  users: any = [
    {id :  1, nom : 'Roustan', prenom : 'Rémi', mail : 'r.roustan@test.com', role : 'Admin'},
    {id :  2, nom : 'Sellier', prenom : 'Maurice', mail : 'm.sellier@test.com', role : 'Client'},
    {id :  3, nom : 'Islem', prenom : 'Ben Mabrouk', mail : 'b.mabrouk@test.com', role : 'Client'},

  ]


}
