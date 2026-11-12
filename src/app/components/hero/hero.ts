import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true, // Composant autonome (recommandé dans les versions récentes d'Angular)
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  developerName = 'Étudiant en informatique à Sup de Vinci';
  
  skillsBadges = ['Angular', 'React', 'Python', 'C++', 'PHP'];
}