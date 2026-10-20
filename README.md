# 🏀 Portfolio NBA — Angular (Golden State Warriors Theme)

Ce projet est un portfolio personnel moderne développé de zéro avec **Angular**, mettant en avant une architecture propre basée sur les **Standalone Components** et un design sombre inspiré de l'univers de la **NBA** et des **Golden State Warriors**.

---

## 🎨 Charte Graphique & Design System

Le style visuel repose sur un thème *Dark Mode* dynamique avec les variables CSS globales suivantes (`src/styles.scss`) :

* **Fond principal :** Noir Carbone (`#0B132B`)
* **Couleur secondaire :** Bleu Marine Warriors (`#1D428A`)
* **Accentuation & Hovers :** Or Warriors (`#FFC72C`)
* **Effets visuels :** Glassmorphism (`backdrop-filter: blur`), animations fluides et composants responsifs.

---

## 🛠️ Stack Technique

* **Framework :** [Angular](https://angular.dev/) (Dernière version avec Standalone Components & Control Flow `@for` / `@if`)
* **Styles :** SCSS / Variables CSS custom
* **Routage :** Angular Router

---

## 📁 Architecture du Projet

```text
src/
├── app/
│   ├── components/
│   │   └── navbar/          # Composant de navigation fixe
│   ├── app.component.ts     # Composant racine (Standalone)
│   ├── app.routes.ts        # Configuration des routes
│   └── app.config.ts        # Configuration globale de l'application
└── styles.scss              # Design System & variables globales CSS