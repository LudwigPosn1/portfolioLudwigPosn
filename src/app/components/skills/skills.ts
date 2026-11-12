import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface pour typer une compétence individuelle
export interface Skill {
  name: string;
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
  skillCategories: SkillCategory[] = [
    {
      title: 'Développement web',
      description: 'Langages et frameworks utilisés pour concevoir des applications et des sites web.',
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'Angular' },
        { name: 'React' }
      ]
    },
    {
      title: 'Programmation & données',
      description: 'Langages de programmation et bases de données abordés dans mon parcours.',
      skills: [
        { name: 'Python' },
        { name: 'C' },
        { name: 'C++' },
        { name: 'Java' },
        { name: 'SQL' }
      ]
    },
    {
      title: 'Outils & création',
      description: 'Outils de conception, de création de contenu et d’hébergement.',
      skills: [
        { name: 'Microsoft Office' },
        { name: 'SolidWorks' },
        { name: 'DaVinci Resolve 18' },
        { name: 'Hébergement OVH' }
      ]
    },
    {
      title: 'Qualités & langues',
      description: 'Des compétences personnelles et linguistiques mises en pratique en équipe.',
      skills: [
        { name: 'Travail en équipe' },
        { name: 'Organisation et écoute' },
        { name: 'Agilité et créativité' },
        { name: 'Français' },
        { name: 'Anglais — C2' }
      ]
    },
    {
      title: 'Centres d’intérêt',
      description: 'Les sujets et activités qui nourrissent ma curiosité au quotidien.',
      skills: [
        { name: 'Basketball — 10 ans' },
        { name: 'Musique électronique' },
        { name: 'Technologies & innovation' },
        { name: 'Intelligence artificielle' }
      ]
    }
  ];
}