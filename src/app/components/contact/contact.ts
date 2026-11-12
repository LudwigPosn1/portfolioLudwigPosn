import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //Nécessaire pour utiliser le data-binding

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  //Année dynamique du footer
  currentYear: Number = new Date().getFullYear();

  // Etat du formulaire
  isSubmitted = false;

  //Stockage des données du formulaire
  formData = {
    name: '',
    email: '',
    message: '',
  };

  //Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Fromulaire soumis avec succès :', this.formData);
      this.isSubmitted = true;

      //Réinitilisation du formulaire après quelques secondes
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          message: '',
        };
      }, 4000);
    }
  }
}
