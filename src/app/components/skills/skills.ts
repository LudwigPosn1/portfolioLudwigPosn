import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface pour typer une compétence individuelle
export interface Skill {
  name: string;
  level: string; // Ex: "Avancé", "Intermédiaire"
  icon?: string;
}

// Interface pour regrouper les compétences par catégorie
export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  // Données des compétences techniques
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & UI',
      description: 'Maîtrise des frameworks modernes et des bonnes pratiques d\'intégration web.',
      skills: [
        { name: 'Angular', level: 'Avancé' },
        { name: 'TypeScript', level: 'Avancé' },
        { name: 'React', level: 'Intermédiaire' },
        { name: 'HTML5 / SCSS', level: 'Avancé' },
        { name: 'JavaScript (ES6+)', level: 'Avancé' }
      ]
    },
    {
      title: 'Backend & Données',
      description: 'Conception de logiques serveur et gestion des bases de données.',
      skills: [
        { name: 'Python', level: 'Intermédiaire' },
        { name: 'Node.js', level: 'Intermédiaire' },
        { name: 'Java / C / C++', level: 'Intermédiaire' },
        { name: 'SQL / Supabase', level: 'Intermédiaire' }
      ]
    },
    {
      title: 'DevOps & Outils',
      description: 'Environnement de travail, versioning et déploiement.',
      skills: [
        { name: 'Git & GitHub', level: 'Avancé' },
        { name: 'VS Code / Cursor', level: 'Avancé' },
        { name: 'Principes DevOps', level: 'En cours' },
        { name: 'API REST', level: 'Avancé' }
      ]
    }
  ];
}