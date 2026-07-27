import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-connexion',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css'
})
export class Connexion {

  connexionForm!: FormGroup;
  users: any[] = [];
  emailInconnu = false;
  motDePasseIncorrect = false;

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit(): void {

    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });

  }

connexion() {

  this.emailInconnu = false;
  this.motDePasseIncorrect = false;

  if (this.connexionForm.invalid) {
    this.connexionForm.markAllAsTouched();
    return;
  }

  const formValue = this.connexionForm.value;

  this.users = JSON.parse(localStorage.getItem('users') || '[]');

  const utilisateur = this.users.find(
    user => user.email === formValue.email
  );

  if (!utilisateur) {
    this.emailInconnu = true;
    return;
  }

  if (utilisateur.mdp !== formValue.mdp) {
    this.motDePasseIncorrect = true;
    return;
  }

  localStorage.setItem('currentUser', JSON.stringify(utilisateur));
  alert('Connexion réussie !');
}
}     