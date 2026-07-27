import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title: string = 'My Shop';
  private router = inject(Router);

  deconnexion() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

// user: any = null;

//   ngOnInit(): void {
//     const currentUser = localStorage.getItem('currentUser');
//     if (currentUser) {
//       this.user = JSON.parse(currentUser);
//     }
//   }
getCurrentUser() {
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  return user;
}

}
