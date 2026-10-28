import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface pour typer toutes les données du project
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean; // Permet de mettre en avant un projet
  githubUrl?: string;
  demoUrl?: string;
  stats?: { label: string; value: string }[]; 
}

@Component({
  selector: 'app-projects',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Liste de mes projets
  projectsList: Project[] = [
    {
      id: 'coachease',
      title: 'CoachEase',
      description: 'Plateforme web permettant aux coachs sportifs de gérer leurs clients, planifier des séances et suivre les performances physiques en temps réel.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Node.js', 'PostgreSQL'],
      featured: true,
      githubUrl: 'https://github.com/votre-repo/coachease',
      demoUrl: 'https://coachease-demo.com',
      stats: [
        { label: 'Architecture', value: 'Clean Code' },
        { label: 'UI/UX', value: 'Responsive' }
      ]
    },
    {
      id: 'nba-tracker',
      title: 'NBA Stats Dashboard',
      description: 'Application de visualisation de statistiques NBA en temps réel avec graphiques interactifs et comparaison de joueurs.',
      tags: ['Angular', 'RxJS', 'Chart.js', 'REST API'],
      featured: false,
      githubUrl: 'https://github.com/votre-repo/nba-tracker'
    },
    {
      id: 'portfolio-v1',
      title: 'Portfolio Modern Dark',
      description: 'Mon portfolio personnel développé avec Angular et un Design System inspiré des Golden State Warriors.',
      tags: ['Angular', 'SCSS', 'Standalone Components'],
      featured: false,
      githubUrl: 'https://github.com/votre-repo/portfolio'
    }
  ]
}
