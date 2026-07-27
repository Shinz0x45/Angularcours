import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  inscriptionForm!: FormGroup;
  users: any[] = [];

  // constructor(private formBuilder: FormBuilder) {}
  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmMdp: ['', [Validators.required]],
      genre: ['', Validators.required],
      vetements: [false],
      accessoires: [false],
      pays: ['', Validators.required],
      role: 'Client'
    },
  {
    validators: this.passwordMatchValidator
  });
  }

passwordMatchValidator(control: AbstractControl) { 

  const mdp = control.get('mdp')?.value;
  const confirmMdp = control.get('confirmMdp')?.value;

  if (mdp !== confirmMdp) {return { passwordMismatch: true }};

  return null;

}

  inscription() {
    // if (this.inscriptionForm.invalid) {
    //   return;
    // }
    const formValue = this.inscriptionForm.value;
    let interets = [];
    if (formValue.vetements) interets.push('Vêtements');
    if (formValue.accessoires) interets.push('Accessoires');
    
    const userFinal = {
      nom: formValue.nom,
      prenom: formValue.prenom,
      email: formValue.email,
      mdp: formValue.mdp,
      genre: formValue.genre,
      interets: interets,
      pays: formValue.pays,
      role: formValue.role || 'Client',
      dateInscription: new Date().toLocaleString('fr-FR')
    }
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.users.push(userFinal);
    localStorage.setItem('users', JSON.stringify(this.users));
    alert('Inscription réussie !');
    this.inscriptionForm.reset()
  }

}
