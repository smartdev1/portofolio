# Portfolio Aristide — Backlog de Refonte

> Cadrage produit et technique — Version 1.0
> Date : 2026-11-06
> Lead : tech-lead-po

---

## Vision

Transformer le portfolio existant (SPA client-only) en un site performant, accessible, SEO-friendly, avec dark mode, navigation mobile, contenu dynamique WordPress et une architecture de composants maintenable.

## Contraintes

- Next.js 16 (App Router, React 19, Turbopack)
- Tailwind CSS 4
- Pas de déploiement — tout reste local
- Backend WordPress existant (API REST) pour les projets
- Bilingue FR/EN maintenu partout

## Phases

| Phase | Objectif | Tâches |
|-------|----------|--------|
| **1 — Fondations** | Architecture, hooks, SSR | T-001 à T-005 |
| **2 — UI/UX** | Navigation mobile, dark mode, sections | T-006 à T-010 |
| **3 — Contenu** | WordPress, témoignages, à propos | T-011 à T-013 |
| **4 — Correctifs** | Bugs, perf, a11y, polish | T-014 à T-018 |

---

## Phase 1 — Fondations architecturales

### T-001 — SSR : convertir page.tsx en Server Component + OG metadata
- **Priorité** : P0
- **Taille** : M
- **Statut** : todo
- **Description** : Séparer `page.tsx` en Server Component. Extraire les parties interactives en Client Components isolés. Ajouter `og:image`, `sitemap.ts`, `robots.ts`.
- **Critères d'acceptation** :
  - [ ] `page.tsx` n'a plus `"use client"`
  - [ ] Les metadata (title, description, OG) sont rendues côté serveur
  - [ ] `sitemap.ts` et `robots.ts` existent et fonctionnent
  - [ ] Un fichier OG image statique est présent dans `/public`
- **Fichiers impactés** : `src/app/page.tsx`, `src/app/layout.tsx`, `public/og-image.png`
- **Risques** : Le `PortfolioProvider` wrappant tout le contenu force le client — il faut restructurer le tree.

### T-002 — Extraire un hook `useCopyToClipboard`
- **Priorité** : P1
- **Taille** : S
- **Statut** : todo
- **Description** : La fonction `copyEmail()` est dupliquée dans `Footer.tsx`, `FullPageSections.tsx` et `DossierModal.tsx`. Créer un hook réutilisable `useCopyToClipboard` dans `src/hooks/`.
- **Critères d'acceptation** :
  - [ ] Hook `useCopyToClipboard.ts` créé dans `src/hooks/`
  - [ ] Les 3 composants utilisent le hook au lieu de leur propre implémentation
  - [ ] Le confetti est optionnel (paramètre du hook)
  - [ ] Le toast est déclenché via le context existant
- **Fichiers impactés** : `src/hooks/useCopyToClipboard.ts`, `src/components/Footer.tsx`, `src/components/FullPageSections.tsx`, `src/components/DossierModal.tsx`

### T-003 — Découper DossierModal en composants par onglet
- **Priorité** : P1
- **Taille** : M
- **Description** : Le `DossierModal.tsx` (~590 lignes) contient 5 vues. Extraire chaque onglet dans son propre composant.
- **Statut** : todo
- **Critères d'acceptation** :
  - [ ] `src/components/dossier/DossierModal.tsx` — shell (header, tabs, close)
  - [ ] `src/components/dossier/TabProjects.tsx`
  - [ ] `src/components/dossier/TabStack.tsx`
  - [ ] `src/components/dossier/TabCareer.tsx`
  - [ ] `src/components/dossier/TabEducation.tsx`
  - [ ] `src/components/dossier/TabContact.tsx`
  - [ ] Comportement identique avant/après (pas de régression visuelle)
- **Fichiers impactés** : `src/components/DossierModal.tsx` → `src/components/dossier/*`
- **Notes** : Les filtres de projets hardcodés doivent être extraits aussi (cf. T-004).

### T-004 — Dédupliquer le contenu FullPageSections vs DossierModal
- **Priorité** : P1
- **Taille** : M
- **Statut** : todo
- **Description** : Le mode scroll (`FullPageSections`) et la modal (`DossierModal`) affichent le même contenu avec des styles légèrement différents. Créer des composants de contenu partagés (`ProjectCard`, `SkillCard`, `CareerCard`, `EducationCard`, `ContactSection`) utilisés par les deux modes.
- **Critères d'acceptation** :
  - [ ] Composants partagés dans `src/components/shared/`
  - [ ] Les deux modes (modal et scroll) utilisent les mêmes composants
  - [ ] Les filtres de projet sont dérivés dynamiquement des données (plus de hardcode)
  - [ ] Pas de régression visuelle
- **Fichiers impactés** : `src/components/shared/*`, `src/components/FullPageSections.tsx`, `src/components/dossier/*`

### T-005 — Corriger les bugs et incohérences mineures
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : Correctifs techniques identifiés lors de l'audit.
- **Critères d'acceptation** :
  - [ ] Initiales corrigées : "AG" → "AA" (Aristide Adouko)
  - [ ] `scroll-behavior: smooth` déplacé de `*` vers `html` uniquement
  - [ ] Three.js chargé en dynamic import (`next/dynamic`, `ssr: false`)
  - [ ] `pointer-events-none` retiré du `<main>` du Hero (garder uniquement sur les éléments nécessaires)
  - [ ] Imports inutilisés nettoyés (`Copy`, `ExternalLink`, `ShieldCheck`, `CheckCircle2` dans FullPageSections)

---

## Phase 2 — UI/UX

### T-006 — Navigation mobile (hamburger menu avec tabs)
- **Priorité** : P0
- **Taille** : M
- **Statut** : todo
- **Description** : Le `<nav>` du Header est `hidden md:flex` — aucune navigation sur mobile. Ajouter un menu hamburger qui ouvre un drawer/sheet avec les mêmes onglets.
- **Critères d'acceptation** :
  - [ ] Bouton hamburger visible sous `md` breakpoint
  - [ ] Menu mobile en slide-over (drawer) ou sheet bottom
  - [ ] Contient les mêmes liens : Stack, Projets, Parcours, Profil, Contact
  - [ ] Se ferme automatiquement après navigation
  - [ ] Animation d'ouverture/fermeture fluide
  - [ ] Focus trap actif quand le menu est ouvert
  - [ ] Fermeture via ESC
- **Fichiers impactés** : `src/components/Header.tsx`, nouveau `src/components/MobileMenu.tsx`

### T-007 — Dark mode avec détection système
- **Priorité** : P1
- **Taille** : L
- **Statut** : todo
- **Description** : Implémenter un dark mode complet avec :
  1. Détection automatique de `prefers-color-scheme`
  2. Toggle manuel (3 états : system / light / dark)
  3. Persistance du choix en `localStorage`
- **Critères d'acceptation** :
  - [ ] Palette dark définie dans `globals.css` (CSS custom properties)
  - [ ] Toggle dans le Header (icône soleil/lune/auto)
  - [ ] Détection automatique du mode système au premier chargement
  - [ ] Persistance du choix utilisateur en localStorage
  - [ ] Pas de flash (FOUC) au chargement — script inline dans `<head>`
  - [ ] Tous les composants supportent le dark mode
  - [ ] Three.js canvas : couleurs des formes adaptées
  - [ ] Modals, cards, footer, toast — tout est couvert
- **Fichiers impactés** : `src/app/globals.css`, `src/app/layout.tsx`, `src/context/ThemeContext.tsx`, tous les composants
- **Notes** : Utiliser l'attribut `data-theme` sur `<html>` plutôt que des classes Tailwind `dark:` pour garder le contrôle CSS.

### T-008 — Section "À propos" (About)
- **Priorité** : P1
- **Taille** : M
- **Statut** : todo
- **Description** : Ajouter une section à propos avec photo en grand format, paragraphe personnel, valeurs professionnelles, approche technique. Positionnée entre le Hero et les projets.
- **Critères d'acceptation** :
  - [ ] Section visible en mode scroll entre Hero et Projets
  - [ ] Photo de profil en format large (pas juste les initiales)
  - [ ] Texte bilingue FR/EN
  - [ ] Données ajoutées dans `portfolioData.ts`
  - [ ] Disponible aussi dans la modal (nouvel onglet ou sous-section)
- **Fichiers impactés** : `src/components/shared/AboutSection.tsx`, `src/data/portfolioData.ts`, `src/components/FullPageSections.tsx`

### T-009 — Section Témoignages (Testimonials)
- **Priorité** : P1
- **Taille** : M
- **Statut** : todo
- **Description** : Ajouter une section témoignages/recommandations entre le parcours et la formation. Données statiques pour le MVP, prêtes à être alimentées par WordPress plus tard (cf. T-011).
- **Critères d'acceptation** :
  - [ ] Interface `TestimonialItem` ajoutée dans `portfolioData.ts`
  - [ ] Données statiques : 2-3 témoignages de démo (texte placeholder)
  - [ ] Composant `TestimonialCard` dans `src/components/shared/`
  - [ ] Section dans `FullPageSections` et onglet dans la modal
  - [ ] Design : avatar, nom, poste, entreprise, citation, relation
  - [ ] Bilingue FR/EN
- **Fichiers impactés** : `src/data/portfolioData.ts`, `src/components/shared/TestimonialCard.tsx`, `src/components/FullPageSections.tsx`, `src/components/dossier/TabTestimonials.tsx`

### T-010 — Lien LinkedIn + téléchargement CV
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : Ajouter LinkedIn dans les contacts (footer, section contact, modal). Ajouter un bouton "Télécharger mon CV" pointant vers un PDF dans `/public`.
- **Critères d'acceptation** :
  - [ ] `linkedinUrl` ajouté dans `personalInfo`
  - [ ] Icône LinkedIn dans le footer et la section contact
  - [ ] Bouton "Télécharger CV" dans le Hero et la section contact
  - [ ] Fichier CV placeholder dans `/public/cv-aristide-adouko.pdf`

---

## Phase 3 — Contenu dynamique

### T-011 — Intégration WordPress REST API pour les projets
- **Priorité** : P1
- **Taille** : L
- **Statut** : todo
- **Description** : Les projets doivent être chargés depuis un backend WordPress via l'API REST (`/wp-json/wp/v2/`). Créer un service d'abstraction, un mapper WordPress → `ProjectItem`, et un fallback sur les données statiques.
- **Critères d'acceptation** :
  - [ ] Service `src/services/wordpress.ts` avec fetch typed
  - [ ] Mapper `wpProjectToProjectItem()` pour transformer les données WP
  - [ ] Fallback sur `portfolioData.ts` si l'API est indisponible
  - [ ] Variable d'environnement `NEXT_PUBLIC_WP_API_URL` dans `.env.example`
  - [ ] Custom Post Type WordPress documenté (champs ACF attendus)
  - [ ] Revalidation ISR configurée (`revalidate: 3600`)
  - [ ] Les témoignages peuvent aussi venir de WP (préparer le mapper)
- **Fichiers impactés** : `src/services/wordpress.ts`, `src/app/page.tsx`, `.env.example`
- **Notes** : Le backend WordPress est géré séparément. On définit le contrat d'API ici.

### T-012 — WordPress : Custom Post Types documentation
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : Documenter les CPT et champs ACF attendus côté WordPress pour que le backend puisse être configuré indépendamment.
- **Critères d'acceptation** :
  - [ ] `docs/wordpress-schema.md` décrivant les CPT : `project`, `testimonial`
  - [ ] Champs ACF listés avec types et correspondances vers les interfaces TS
  - [ ] Exemples de réponses JSON attendues

### T-013 — Loading states et Suspense boundaries
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : Ajouter `loading.tsx`, squelettes de chargement et Suspense boundaries pour les données WordPress.
- **Critères d'acceptation** :
  - [ ] `src/app/loading.tsx` avec skeleton adapté
  - [ ] Suspense boundaries autour des sections alimentées par WP
  - [ ] Skeleton components pour `ProjectCard`, `TestimonialCard`

---

## Phase 4 — Correctifs et polish

### T-014 — Focus trap dans les modals
- **Priorité** : P1
- **Taille** : S
- **Statut** : todo
- **Description** : Les modals (`DossierModal`, `ArchitectureDetailModal`) n'ont pas de focus trap. Le focus peut sortir du dialog via Tab.
- **Critères d'acceptation** :
  - [ ] Hook `useFocusTrap.ts` ou utilisation d'une lib légère
  - [ ] Focus trap actif sur les deux modals
  - [ ] Focus restauré sur l'élément déclencheur à la fermeture

### T-015 — Skip-to-content link
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : Ajouter un lien "Aller au contenu" visible au focus pour l'accessibilité.
- **Critères d'acceptation** :
  - [ ] Lien SR-only visible au focus dans `layout.tsx`
  - [ ] Pointe vers `#main-content`
  - [ ] Bilingue

### T-016 — Optimisation Three.js (dynamic import)
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : Three.js (~600KB) est chargé au bundle initial. Le charger en dynamic import.
- **Critères d'acceptation** :
  - [ ] `ThreeHeroCanvas` chargé via `next/dynamic` avec `ssr: false`
  - [ ] Placeholder visible pendant le chargement (gradient blobs CSS)
  - [ ] Aucune régression visuelle
- **Notes** : Fusionné dans T-005 si les deux sont traités ensemble.

### T-017 — Audit final d'accessibilité
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : Passe d'audit a11y complète après toutes les modifications.
- **Critères d'acceptation** :
  - [ ] Navigation clavier complète fonctionnelle
  - [ ] Lecteur d'écran : structure de headings cohérente
  - [ ] Contrastes conformes WCAG AA en light ET dark mode
  - [ ] Rôles ARIA corrects sur tous les composants interactifs

### T-018 — Nettoyage et documentation finale
- **Priorité** : P2
- **Taille** : S
- **Statut** : todo
- **Description** : README à jour, conventions documentées, imports nettoyés.
- **Critères d'acceptation** :
  - [ ] `README.md` mis à jour avec instructions de dev, architecture, déploiement
  - [ ] `docs/conventions.md` créé
  - [ ] Aucun import inutilisé dans le codebase
  - [ ] `docs/context.md` rempli

---

## Ordre d'exécution recommandé

```
T-005 (correctifs mineurs)          ─┐
T-002 (hook useCopyToClipboard)     ─┤── Phase 1 : fondations (parallélisable)
T-003 (découpe DossierModal)        ─┤
T-004 (composants partagés)         ─┘
T-001 (SSR + OG)                    ── dépend de T-003/T-004
T-006 (nav mobile)                  ── indépendant
T-007 (dark mode)                   ── après T-001 (car touche layout.tsx)
T-008 (à propos)                    ─┐
T-009 (témoignages)                 ─┤── Phase 2 : contenu (parallélisable)
T-010 (LinkedIn + CV)               ─┘
T-011 (WordPress API)               ── après T-001 (car touche page.tsx SSR)
T-012 (WP schema doc)               ── en parallèle de T-011
T-013 (loading states)              ── après T-011
T-014 (focus trap)                  ─┐
T-015 (skip-to-content)            ─┤── Phase 4 (parallélisable)
T-016 (Three.js dynamic)           ─┘
T-017 (audit a11y)                  ── dernier
T-018 (documentation)               ── tout dernier
```

---

## Définition de "Terminé" (rappel)

Chaque tâche est `done` si :
1. Critères d'acceptation satisfaits
2. Code relu
3. Tests manuels passés (navigation, responsive, bilingue)
4. Dark mode vérifié (à partir de T-007)
5. Pas de régression sur les fonctionnalités existantes
