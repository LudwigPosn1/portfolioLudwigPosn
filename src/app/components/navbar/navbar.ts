import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true, // Indique que le composant est autonome
  imports: [CommonModule], // Importe les directives communes d'Angular
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar {
  // Propriété pour gérer l'état du menu mobile
  isMenuOpen = false;

  //Liste des liens de navigations pour le code dynamique
  navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ];

  //Méthode pour basculer l'état du menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
