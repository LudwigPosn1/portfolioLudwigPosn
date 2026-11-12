import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface pour typer toutes les données du project
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean; // Permet de mettre en avant un projet
  period?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectsList: Project[] = [
    {
      id: 'tablee-roche-aux-fees',
      title: 'La Tablée de la Roche aux Fées',
      description: 'Création du site web de l’association de A à Z et mise en ligne chez OVH.',
      tags: ['HTML', 'CSS', 'PHP', 'OVH'],
      featured: true,
      period: '5 novembre 2025 – 21 mai 2026',
    },
    {
      id: 'coachease',
      title: 'CoachEase',
      description: 'Application de gestion destinée aux coachs sportifs, actuellement en développement.',
      tags: ['Angular', 'Supabase', 'PWA'],
      featured: true,
      period: 'En développement',
    },
    {
      id: 'luminaire-escamotable',
      title: 'Luminaire escamotable autonome',
      description: 'Conception d’un objet fonctionnel, rédaction du cahier des charges et création de pièces industrielles.',
      tags: ['C++', 'SolidWorks', 'Conception industrielle'],
      featured: false,
    },
    {
      id: 'nba-content',
      title: 'Création de contenu NBA',
      description: 'Création de chaînes YouTube, TikTok et Instagram, de la conception des contenus au montage vidéo.',
      tags: ['DaVinci Resolve 18', 'YouTube', 'TikTok', 'Instagram'],
      featured: false,
    }
  ]
}
