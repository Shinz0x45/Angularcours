import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

contactForm!: FormGroup;
messages: any[] = [];

private formBuilder = inject(FormBuilder);

ngOnInit(): void {

  this.contactForm = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(255)]]
  });

}
envoyer() {

  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  const formValue = this.contactForm.value;

  const message = {
    nom: formValue.nom,
    email: formValue.email,
    message: formValue.message,
    date: new Date().toLocaleString('fr-FR')
  };

  this.messages = JSON.parse(localStorage.getItem('messages') || '[]');

  this.messages.push(message);

  localStorage.setItem('messages', JSON.stringify(this.messages));

  alert('Votre message a bien été envoyé !');

  this.contactForm.reset();

}
}
