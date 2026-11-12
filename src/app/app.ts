import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Journey } from './components/journey/journey';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, Projects, Journey, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  title = 'portfolio-nba';
}