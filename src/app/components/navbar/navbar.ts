import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true, // Indique que le composant est autonome
  imports: [CommonModule], // Importe les directives communes d'Angular (comme @if, @for si besoin)
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  // Propriété pour gérer l'état du menu mobile (ouvert/fermé)
  isMenuOpen = false;

  // Liste des liens de navigation pour rendre le code dynamique avec @for plus tard si besoin
  navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  // Méthode pour basculer l'état du menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}