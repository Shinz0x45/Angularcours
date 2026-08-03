import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-connexion',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css'
})
export class Connexion {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);

  connexionForm!: FormGroup;
  errorMsg: string = '';

  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    })
  }

  connexion() {
    let formValue = this.connexionForm.value;
    this.userService.connexion(formValue).subscribe({
      next: (res: any) => {
        console.log('Réponse du serveur :', res);
        if (res.length > 0) {
          localStorage.setItem('currentUser', JSON.stringify(res[0]))
          this.errorMsg = '';
          alert('Connexion réussie !');
          this.router.navigate(['/']);
        } else {
          this.errorMsg = 'Email ou mot de passe incorrect.';
        }
      }
    })
  }
}
  //   connexionForm!: FormGroup;
  //   users: any[] = [];
  //   emailInconnu = false;
  //   motDePasseIncorrect = false;

  //   private formBuilder = inject(FormBuilder);
  //   private router = inject(Router);

  //   ngOnInit(): void {

  //     this.connexionForm = this.formBuilder.group({
  //       email: ['', [Validators.required, Validators.email]],
  //       mdp: ['', Validators.required]
  //     });

  //   }

  // connexion() {

  //   this.emailInconnu = false;
  //   this.motDePasseIncorrect = false;

  //   if (this.connexionForm.invalid) {
  //     this.connexionForm.markAllAsTouched();
  //     return;
  //   }

  //   const formValue = this.connexionForm.value;

  //   this.users = JSON.parse(localStorage.getItem('users') || '[]');

  //   const utilisateur = this.users.find(
  //     user => user.email === formValue.email
  //   );

  //   if (!utilisateur) {
  //     this.emailInconnu = true;
  //     return;
  //   }

  //   if (utilisateur.mdp !== formValue.mdp) {
  //     this.motDePasseIncorrect = true;
  //     return;
  //   }

  //   localStorage.setItem('currentUser', JSON.stringify(utilisateur));
  //   alert('Connexion réussie !');
  // }
    // Utilisation du localStorage pour la connexion
    // const users = JSON.parse(localStorage.getItem('users') || '[]');

    // const user = users.find((u: any) =>
    //   u.email === formValue.email &&
    //   u.mdp === formValue.mdp
    // );

    // if (user) {
    //   localStorage.setItem('currentUser', JSON.stringify(user));
    //   this.errorMsg = '';
    //   alert('Connexion réussie !');
    //   this.router.navigate(['/']);
    // } else {
    //   this.errorMsg = 'Email ou mot de passe incorrect.';
    // }

