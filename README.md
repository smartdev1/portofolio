# Portfolio Professionnel — Aristide Adouko

> **Creative Software Engineer & Solutions Architect**  
> 8+ ans d'expérience · Abidjan, Côte d'Ivoire

Ce portfolio est conçu avec **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** et **Three.js**, inspiré par l'esthétique minimaliste architecturale (style `itssharl.ee` et maquette Stitch).

---

## ✨ Points Forts & Fonctionnalités

1. **Expérience Studio 100vh & Mode Page Déroulante** :
   - **Mode Studio (Défaut)** : Vue épurée d'une seule page avec scène 3D Three.js en arrière-plan et déclenchement du **Dossier Technique** par modal interactive ultra-fluide.
   - **Mode Page Déroulante** : Un bouton permet de basculer instantanément sur une version complète avec défilement fluide pour les recruteurs et les audits SEO.

2. **Arrière-plan 3D Interactif (Three.js)** :
   - Formes géométriques 3D (Torus graphite brossé, polyèdre cobalt, icosaèdre céramique, cylindre acier) avec matériaux Phong et éclairage studio architectural.
   - Parallaxe fluide au déplacement de la souris et au toucher mobile avec amortissement (lerp) et mise en pause automatique en arrière-plan.

3. **Dossier Technique & Navigation par Onglets (100% Fidèle au CV)** :
   - `01. Projets Phares` : 5 projets réels (Hakeyo pour le BURIDA, Clinique Saint Mathieu, Extensions Officielles WordPress WooTour/MotoPress, Intranet LPS Yopougon, FATOM) avec tags techniques, métriques d'impact et modal dédiée d'**inspection d'architecture logicielle**.
   - `02. Stack & Capacités` : 4 piliers d'ingénierie (Backend, Frontend & SPAs, Données & Mobile, DevOps & Méthodes) avec moteur de recherche en direct.
   - `03. Parcours Pro` : 6 étapes clés de 2016 à aujourd'hui (Assurland Africa, Epitech, GIZ, Zenith Assurances, JSOFT, SAAS).
   - `04. Formation & Diplômes` : Programme d'immersion d'élite WECODE (Coding Academy by Epitech), Licence Pro Génie Logiciel (Pigier CI) et Baccalauréat Série D.
   - `05. Console de Contact Directe` : Copie de l'email en 1 clic avec confetti, lien WhatsApp direct pré-formaté, dépôt GitHub et liens mailto.

4. **Bilingue Temps Réel (Français / Anglais)** :
   - Basculement instantané FR/EN sans rechargement de page.

5. **Accessibilité & Raccourcis Clavier** :
   - Touches `1` à `5` pour naviguer entre les onglets du dossier.
   - Touche `ESC` pour fermer les modales.

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ (recommandé v20+)
- npm ou pnpm

### Installation
```bash
npm install
```

### Lancement en Développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build Production
```bash
npm run build
npm run start
```

---

## 📁 Architecture du Code

```
/
├── public/
│   ├── avatar.jpg           # Photo de profil d'Aristide optimisée localement
│   └── favicon.svg          # Favicon monogramme "AG"
├── src/
│   ├── app/
│   │   ├── globals.css      # Styles Tailwind v4, tech-grid-pattern, custom scrollbar
│   │   ├── layout.tsx       # Polices Google (Plus Jakarta Sans, Space Grotesk, JetBrains Mono) & SEO
│   │   └── page.tsx         # Point d'entrée principal
│   ├── components/
│   │   ├── ArchitectureDetailModal.tsx # Vue d'analyse approfondie de l'architecture
│   │   ├── DossierModal.tsx # Fenêtre modale technique à 5 onglets avec filtres
│   │   ├── Footer.tsx       # Barre de statut & endpoints de contact
│   │   ├── FullPageSections.tsx # Sections de page longue pour la vue déroulante
│   │   ├── Header.tsx       # En-tête avec navigation, langue et switch de mode
│   │   ├── Hero.tsx         # Titre percutant, badges d'expérience et capsules
│   │   ├── ThreeHeroCanvas.tsx # Canvas 3D Three.js avec gestion WebGL
│   │   └── Toast.tsx        # Toast de notification de copie
│   ├── context/
│   │   └── PortfolioContext.tsx # Gestion d'état (langue, modales, vue studio/scroll)
│   └── data/
│       └── portfolioData.ts # Base de données typée bilingue (CV complet d'Aristide)
```
