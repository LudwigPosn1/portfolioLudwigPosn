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
  // Données dynamiques affichées dans la Hero Section
  developerName = 'Étudiant en Ingénierie Informatique';
  tagline = 'Transformer la passion du code et du sport en applications web performantes.';
  
  // Compétences clés affichées sous forme de badges
  skillsBadges = ['Angular', 'TypeScript', 'React', 'Python', 'Supabase'];
}