import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero'; // 1. Import du composant Hero

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent], // 2. Ajout dans les imports
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portfolio-nba';
}