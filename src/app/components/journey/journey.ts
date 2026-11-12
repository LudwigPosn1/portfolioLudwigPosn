import { Component } from '@angular/core';

interface JourneyEntry {
  title: string;
  period: string;
  detail: string;
}

@Component({
  selector: 'app-journey',
  standalone: true,
  templateUrl: './journey.html',
  styleUrl: './journey.scss',
})
export class Journey {
  education: JourneyEntry[] = [
    {
      title: 'Sup de Vinci',
      period: 'Actuellement',
      detail:
        'Étudiant en informatique, à la recherche d’une alternance pour me spécialiser en développement ou DevOps.',
    },
    {
      title: 'Classe préparatoire aux grandes écoles',
      period: '2023 – 2025',
      detail:
        '1re année au lycée Marcel Sembat à Sotteville-lès-Rouen, puis 2e année au lycée Gabriel Touchard au Mans.',
    },
    {
      title: 'Baccalauréat STI2D — mention Bien',
      period: '2023',
      detail: 'Lycée Thomas Corneille, à Barentin.',
    },
  ];

  experience: JourneyEntry[] = [
    {
      title: 'Intermarché — Janzé',
      period: 'Depuis le 11 janvier 2026',
      detail: 'CDD : caisse et mise en rayon.',
    },
    {
      title: 'Action — La Ferté-Macé',
      period: '15 juillet – 29 août 2025',
      detail: 'CDD : gestion de caisse, encaissement et mise en rayon.',
    },
  ];

  volunteering: JourneyEntry[] = [
    {
      title: 'Retiers Basket Club',
      period: 'Actuellement',
      detail: 'Bénévolat et arbitrage au club.',
    },
    {
      title: 'AS Veauvillaise',
      period: 'Pendant 6 ans',
      detail: 'Arbitrage de table et arbitrage.',
    },
  ];
}
