import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-table',
  imports: [FormsModule],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable {
  private userService = inject(UserService);

  editId : number | null = null;

  users: any[] = [];


ngOnInit() {
  this.loadUsers();
};

loadUsers() {
  this.userService.getAllUsers().subscribe({
    next: (res: any) => {
      this.users = res;
    },
    error: (err) => {
      alert('Erreur lors de la récupération des utilisateurs : ' + err);
    }
  });
}
  

supprimerUser(id: any) {
  this.userService.supprimerUser(id).subscribe({
    next: (res: any) => {

      alert('Utilisateur supprimé avec succès');
      // Mettre à jour la liste des utilisateurs après la suppression
      this.users = this.users.filter(user => user.id !== id);
    },
    error: (err) => {
      console.error('Erreur lors de la suppression de l\'utilisateur :', err);
    }
  });
}

save(userObj:any) {
  this.userService.updateUserById(userObj).subscribe({
    next: (res: any) => {
      alert('Utilisateur mis à jour avec succès');
      this.editId = null; // Réinitialiser l'ID de l'utilisateur en cours d'édition
    },
    error: (err) => {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', err);
    }
  });

}
}
