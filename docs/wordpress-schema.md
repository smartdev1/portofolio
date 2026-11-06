# WordPress Custom Post Types & ACF Schema

This document defines the WordPress backend contract for the portfolio. The Next.js frontend fetches data from these endpoints and maps them to TypeScript interfaces.

## Prerequisites

- WordPress 6.x+
- [Advanced Custom Fields (ACF) Pro](https://www.advancedcustomfields.com/)
- ACF REST API enabled (`"show_in_rest" => true` on each field group)

---

## CPT: `project`

**Slug:** `project`
**REST endpoint:** `/wp-json/wp/v2/project`
**Supports:** `title`, `custom-fields`

### ACF Field Group: "Project Details"

| Field Name | Type | Description |
|---|---|---|
| `organization` | Text | Organization or client label (e.g. "BURIDA · COTE D'IVOIRE") |
| `period` | Text | Time range (e.g. "2023 - 2024") |
| `category_fr` | Text | Category in French (e.g. "AUDIO DSP & BIG DATA") |
| `category_en` | Text | Category in English |
| `metric_fr` | Text | Key metric in French (e.g. "+45 Radios Monitorées") |
| `metric_en` | Text | Key metric in English |
| `description_fr` | Textarea | Project description in French |
| `description_en` | Textarea | Project description in English |
| `technologies` | Text | Comma-separated list (e.g. "Laravel 10, Vue.js 3, Python") |
| `role_fr` | Text | Role held, in French |
| `role_en` | Text | Role held, in English |
| `challenge_fr` | Textarea | Engineering challenge in French |
| `challenge_en` | Textarea | Engineering challenge in English |
| `solution_fr` | Textarea | Solution designed, in French |
| `solution_en` | Textarea | Solution designed, in English |
| `highlights_fr` | Textarea | Newline-separated key results in French |
| `highlights_en` | Textarea | Newline-separated key results in English |
| `database` | Text | Database stack (e.g. "MySQL 8 & Redis") |
| `pattern` | Text | Architecture pattern (e.g. "Clean Architecture, CQRS") |
| `link` | URL | Optional external link |

### Example JSON Response

```json
{
  "id": 42,
  "title": { "rendered": "Hakeyo — Plateforme de traçabilité des diffusions musicales" },
  "acf": {
    "organization": "BURIDA · CÔTE D'IVOIRE",
    "period": "2023 - 2024",
    "category_fr": "AUDIO DSP & BIG DATA",
    "category_en": "AUDIO DSP & BIG DATA",
    "metric_fr": "+45 Radios Monitorées",
    "metric_en": "+45 Live Radios Monitored",
    "description_fr": "Système d'écoute et de monitoring automatisé...",
    "description_en": "Automated media stream monitoring...",
    "technologies": "Laravel 10, Vue.js 3, Python Audio DSP, MySQL, Redis, FFmpeg, Docker",
    "role_fr": "Lead Architect & Full-Stack Engineer",
    "role_en": "Lead Architect & Full-Stack Engineer",
    "challenge_fr": "Ingérer et décoder simultanément plus de 45 flux...",
    "challenge_en": "Simultaneously ingest and decode over 45...",
    "solution_fr": "Architecture en micro-services asynchrones...",
    "solution_en": "Asynchronous microservices architecture...",
    "highlights_fr": "Fiabilité de reconnaissance acoustique supérieure à 98.4%\nMise en place d'un moteur de répartition automatisé\nDécoupage en tâches distribuées avec files d'attente Redis",
    "highlights_en": "Acoustic recognition accuracy exceeding 98.4%\nAutomated royalty distribution engine\nDistributed processing pipeline with Redis",
    "database": "MySQL 8 (Clustered) & Redis Caching",
    "pattern": "Event-Driven Audio Pipeline & Clean Architecture",
    "link": ""
  }
}
```

---

## CPT: `testimonial`

**Slug:** `testimonial`
**REST endpoint:** `/wp-json/wp/v2/testimonial`
**Supports:** `custom-fields`

### ACF Field Group: "Testimonial Details"

| Field Name | Type | Description |
|---|---|---|
| `name` | Text | Person's name or title |
| `role_fr` | Text | Role/title in French |
| `role_en` | Text | Role/title in English |
| `company` | Text | Company or organization name |
| `initials` | Text | 2-letter initials for avatar fallback |
| `quote_fr` | Textarea | Testimonial quote in French |
| `quote_en` | Textarea | Testimonial quote in English |
| `relation_fr` | Text | Relationship context in French |
| `relation_en` | Text | Relationship context in English |

### Example JSON Response

```json
{
  "id": 7,
  "acf": {
    "name": "Directeur Technique",
    "role_fr": "Directeur Technique",
    "role_en": "CTO",
    "company": "Assurland Africa",
    "initials": "DT",
    "quote_fr": "Aristide a transformé notre architecture legacy...",
    "quote_en": "Aristide transformed our legacy architecture...",
    "relation_fr": "Collaborateur direct",
    "relation_en": "Direct collaborator"
  }
}
```

---

## WordPress Registration (functions.php)

```php
// Register Project CPT
function register_project_cpt() {
    register_post_type('project', [
        'labels' => ['name' => 'Projects', 'singular_name' => 'Project'],
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'custom-fields'],
        'has_archive' => false,
    ]);
}
add_action('init', 'register_project_cpt');

// Register Testimonial CPT
function register_testimonial_cpt() {
    register_post_type('testimonial', [
        'labels' => ['name' => 'Testimonials', 'singular_name' => 'Testimonial'],
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['custom-fields'],
        'has_archive' => false,
    ]);
}
add_action('init', 'register_testimonial_cpt');
```

> **Note:** ACF field groups must have "Show in REST API" enabled for their values to appear in the REST response.
