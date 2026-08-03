import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-users-table',
  imports: [],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable {
  private userService = inject(UserService);

  users: any[] = [];


ngOnInit() {
  this.userService.getAllUsers().subscribe({
    next: (res: any) => {
    this.users = res;
    },
    error : (err) => {
      alert('Erreur lors de la récupération des utilisateurs : ' + err);
    }
});

}
}