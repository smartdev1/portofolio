export type Locale = "fr" | "en";

export interface ProjectItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  category: {
    fr: string;
    en: string;
  };
  metric: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  technologies: string[];
  architectureDetails: {
    challenge: {
      fr: string;
      en: string;
    };
    solution: {
      fr: string;
      en: string;
    };
    highlights: {
      fr: string[];
      en: string[];
    };
    database: string;
    pattern: string;
  };
  link?: string;
  role: {
    fr: string;
    en: string;
  };
}

export interface SkillCategory {
  id: string;
  code: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  icon: string;
  featured: string[];
  skills: string[];
}

export interface CareerItem {
  id: string;
  period: string;
  isCurrent?: boolean;
  role: {
    fr: string;
    en: string;
  };
  company: string;
  tag: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  achievements: {
    fr: string[];
    en: string[];
  };
}

export interface EducationItem {
  id: string;
  year: string;
  degree: {
    fr: string;
    en: string;
  };
  institution: string;
  tag: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  skillsGained: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: { fr: string; en: string };
  company: string;
  avatar?: string;
  initials: string;
  quote: { fr: string; en: string };
  relation: { fr: string; en: string };
}

export interface AboutData {
  title: { fr: string; en: string };
  paragraphs: { fr: string[]; en: string[] };
  highlights: { label: { fr: string; en: string }; value: string }[];
}

export interface PortfolioData {
  personalInfo: {
    fullName: string;
    preferredName: string;
    initials: string;
    title: {
      fr: string;
      en: string;
    };
    experienceYears: string;
    badge: {
      fr: string;
      en: string;
    };
    greeting: {
      fr: string;
      en: string;
    };
    headlineIntro: {
      fr: string;
      en: string;
    };
    headlineAlt: {
      fr: string;
      en: string;
    };
    tagline: {
      fr: string;
      en: string;
    };
    status: {
      fr: string;
      en: string;
    };
    location: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    whatsappUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    cvUrl: string;
    avatarUrl: string;
  };
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  career: CareerItem[];
  education: EducationItem[];
  testimonials: TestimonialItem[];
  about: AboutData;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    fullName: "ADOUKO AKICHI ARISTIDE GHISLAIN",
    preferredName: "ARISTIDE",
    initials: "AA",
    title: {
      fr: "Développeur Web Full-Stack",
      en: "Full-Stack Web Developer"
    },
    experienceYears: "8+",
    badge: {
      fr: "8+ ans d'expérience · Développeur Full-Stack",
      en: "8+ years experience · Full-Stack Developer"
    },
    greeting: {
      fr: "BONJOUR, JE SUIS",
      en: "HELLO, I AM"
    },
    headlineIntro: {
      fr: "ARISTIDE GHISLAIN ADOUKO",
      en: "ARISTIDE GHISLAIN ADOUKO"
    },
    headlineAlt: {
      fr: "MAIS VOUS POUVEZ M'APPELER",
      en: "BUT YOU CAN CALL ME"
    },
    tagline: {
      fr: "Développeur Web Full-Stack · Laravel · Angular · Vue.js / Nuxt.js · Basé à Abidjan.",
      en: "Full-Stack Web Developer · Laravel · Angular · Vue.js / Nuxt.js · Based in Abidjan."
    },
    status: {
      fr: "Disponible pour missions & CDI",
      en: "Available for contracts & full-time roles"
    },
    location: "Cocody Riviera, Abidjan",
    email: "aristide.adouko@epitech.eu",
    phone: "+2250787587877",
    phoneFormatted: "+225 07 87 58 78 77",
    whatsappUrl: "https://wa.me/2250787587877",
    githubUrl: "https://github.com/smartdev1",
    linkedinUrl: "https://linkedin.com/in/aristide-ghislain-adouko",
    cvUrl: "/cv-aristide-adouko.pdf",
    avatarUrl: "/avatar.jpg"
  },
  projects: [
    {
      id: "assurland-crm",
      title: "CRM Assurland Africa",
      organization: "ASSURLAND AFRICA · ABIDJAN",
      period: "Juil. 2026 - Présent",
      category: {
        fr: "FINTECH & ASSURANCE",
        en: "INSURTECH & FINTECH"
      },
      metric: {
        fr: "4 modules métier",
        en: "4 Business Modules"
      },
      description: {
        fr: "Développement du CRM de l'entreprise sous Laravel 11 et Angular 17 (équipe de 4 personnes). Initialisation du projet, implémentation de l'API Laravel et création des pages front-end.",
        en: "Enterprise CRM development using Laravel 11 and Angular 17 (team of 4). Project initialization, Laravel API implementation, and front-end page creation."
      },
      technologies: ["Laravel 11", "Angular 17", "MySQL", "REST API", "TypeScript", "Tailwind CSS"],
      role: {
        fr: "Développeur Web",
        en: "Web Developer"
      },
      architectureDetails: {
        challenge: {
          fr: "Concevoir un CRM complet couvrant les modules Opportunités, Offres, Scoring, Contacts et Comptes clients pour le secteur de l'assurance, avec une API robuste et un front-end performant.",
          en: "Design a comprehensive CRM covering Opportunities, Offers, Scoring, Contacts and Client Accounts modules for the insurance sector, with a robust API and performant front-end."
        },
        solution: {
          fr: "Architecture découplée avec API REST Laravel 11 et front-end Angular 17. Modules métier isolés avec gestion des droits et workflows de validation.",
          en: "Decoupled architecture with Laravel 11 REST API and Angular 17 front-end. Isolated business modules with role-based access control and validation workflows."
        },
        highlights: {
          fr: [
            "Implémentation des modules Opportunités, Offres, Scoring, Contacts et Comptes clients",
            "API REST structurée avec validation et gestion des permissions",
            "Interface Angular responsive avec composants réutilisables"
          ],
          en: [
            "Implementation of Opportunities, Offers, Scoring, Contacts and Client Accounts modules",
            "Structured REST API with validation and permission management",
            "Responsive Angular interface with reusable components"
          ]
        },
        database: "MySQL",
        pattern: "MVC & REST API Architecture"
      }
    },
    {
      id: "hakeyo",
      title: "Hakeyo — Plateforme de traçabilité des diffusions musicales",
      organization: "BURIDA · CÔTE D'IVOIRE",
      period: "2023 - 2024",
      category: {
        fr: "AUDIO DSP & BIG DATA",
        en: "AUDIO DSP & BIG DATA"
      },
      metric: {
        fr: "+45 Radios Monitorées",
        en: "+45 Live Radios Monitored"
      },
      description: {
        fr: "Plateforme technologique de reconnaissance et de traçabilité des diffusions musicales dans les lieux publics, pour faciliter le versement des royalties aux artistes ivoiriens.",
        en: "Technology platform for recognition and tracking of music broadcasts in public venues, facilitating royalty payments to Ivorian artists."
      },
      technologies: ["Laravel 10", "Vue.js 3", "Python Audio DSP", "MySQL", "Redis", "FFmpeg", "Docker"],
      role: {
        fr: "Lead Architect & Full-Stack Engineer",
        en: "Lead Architect & Full-Stack Engineer"
      },
      architectureDetails: {
        challenge: {
          fr: "Ingérer et décoder simultanément plus de 45 flux webradio et FM en direct, générer des empreintes spectrales sans latence et les comparer à un catalogue de 150 000+ titres musicaux.",
          en: "Simultaneously ingest and decode over 45 live radio/web streams, compute real-time spectral fingerprints, and match against a catalog of 150,000+ registered tracks."
        },
        solution: {
          fr: "Architecture en micro-services asynchrones combinant des workers Python (Chromaprint / Librosa) avec un pipeline d'indexation inversée et une API de reporting Laravel 10 / Vue.js 3 ultra-rapide.",
          en: "Asynchronous microservices architecture pairing Python DSP workers (Chromaprint / Librosa) with an inverted index database and a high-throughput Laravel 10 / Vue 3 reporting API."
        },
        highlights: {
          fr: [
            "Fiabilité de reconnaissance acoustique supérieure à 98.4% même avec bruits de fond ou jingles",
            "Mise en place d'un moteur de répartition automatisé des royalties certifié conforme BURIDA",
            "Découpage en tâches distribuées avec files d'attente Redis et supervision Grafana"
          ],
          en: [
            "Acoustic recognition accuracy exceeding 98.4% even with voice-overs and radio jingles",
            "Automated royalty distribution engine strictly conforming to BURIDA legal mandates",
            "Distributed processing pipeline with Redis message queues and telemetry"
          ]
        },
        database: "MySQL 8 (Clustered) & Redis Caching",
        pattern: "Event-Driven Audio Pipeline & Clean Architecture"
      }
    },
    {
      id: "saint-mathieu",
      title: "Application de Gestion — Clinique Saint Mathieu",
      organization: "CLINIQUE SAINT MATHIEU · YOPOUGON",
      period: "2022 - 2023",
      category: {
        fr: "SANTÉ & SYSTÈMES CRITIQUES",
        en: "HEALTHCARE & CRITICAL SYSTEMS"
      },
      metric: {
        fr: "100% Dématérialisé",
        en: "100% Paperless"
      },
      description: {
        fr: "Développement de l'application de gestion de la clinique : dossiers médicaux, facturation, pharmacie interne et planification des consultations.",
        en: "Development of the clinic management application: medical records, billing, in-house pharmacy and appointment scheduling."
      },
      technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Windev Data Bridge"],
      role: {
        fr: "Architecte Concepteur & Développeur Principal",
        en: "System Architect & Principal Developer"
      },
      architectureDetails: {
        challenge: {
          fr: "Moderniser un système hospitalier existant sous Windev sans interruption de service, en garantissant la confidentialité médicale stricte et la continuité 24h/7j.",
          en: "Modernize a legacy hospital system previously on Windev without downtime, enforcing strict health data privacy standards and 24/7 mission-critical uptime."
        },
        solution: {
          fr: "Conception d'une passerelle hybride (Data Bridge) assurant une synchronisation bidirectionnelle entre les bases Windev historiques et la nouvelle interface web Laravel Livewire.",
          en: "Designed a hybrid Data Bridge enabling seamless two-way replication between historical Windev databases and a responsive Laravel Livewire interface."
        },
        highlights: {
          fr: [
            "Gestion en temps réel de plus de 120 lits d'hospitalisation et 8 spécialités médicales",
            "Réduction de 70% du temps de traitement des dossiers de prise en charge d'assurance",
            "Traçabilité intégrale des ordonnances et délivrances en pharmacie interne"
          ],
          en: [
            "Real-time bed management across 120+ hospital beds and 8 medical specialties",
            "70% reduction in insurance pre-authorization and claims handling processing time",
            "Complete audit trail for prescriptions and in-house pharmacy deliveries"
          ]
        },
        database: "MySQL & HyperFileSQL Interop Bridge",
        pattern: "Modular Monolith, Domain-Driven Design (DDD)"
      }
    },
    {
      id: "official-plugins",
      title: "Extensions WooTour & MotoPress Hotel Booking",
      organization: "WORDPRESS · PLUGINS OFFICIELS",
      period: "2021 - 2023",
      category: {
        fr: "E-COMMERCE & TOURISME",
        en: "E-COMMERCE & TOURISM"
      },
      metric: {
        fr: "Production Globale",
        en: "Global Production"
      },
      description: {
        fr: "Extension du plugin officiel WooTour : édition massive des disponibilités sans modifier le cœur du plugin. Extension MotoPress Hotel Booking : ajout des réservations à l'heure au plugin de réservation hôtelière.",
        en: "WooTour official plugin extension: bulk availability editing without modifying the plugin core. MotoPress Hotel Booking extension: hourly reservations added to the hotel booking plugin."
      },
      technologies: ["PHP 8+", "WooCommerce", "WordPress Hooks", "REST APIs", "iCal Sync"],
      link: "https://www.instinctvertical.com",
      role: {
        fr: "Core Plugin Engineer",
        en: "Core Plugin Engineer"
      },
      architectureDetails: {
        challenge: {
          fr: "Étendre les fonctionnalités de plugins officiels WordPress sans modifier leur cœur, tout en assurant la compatibilité avec les mises à jour futures.",
          en: "Extend official WordPress plugin functionality without modifying their core, while ensuring compatibility with future updates."
        },
        solution: {
          fr: "Utilisation des hooks et filtres WordPress pour injecter les fonctionnalités additionnelles. Architecture d'extension conforme aux standards PSR et API WooCommerce.",
          en: "Leveraged WordPress hooks and filters to inject additional functionality. Extension architecture compliant with PSR standards and WooCommerce API."
        },
        highlights: {
          fr: [
            "Édition massive des disponibilités WooTour sans toucher au cœur du plugin",
            "Ajout des réservations à l'heure au plugin MotoPress Hotel Booking",
            "Compatibilité maintenue avec les mises à jour officielles des plugins"
          ],
          en: [
            "Bulk availability editing for WooTour without touching the plugin core",
            "Hourly reservation support added to MotoPress Hotel Booking",
            "Compatibility maintained with official plugin updates"
          ]
        },
        database: "WordPress Relational Schema & Custom Tables",
        pattern: "Plugin Hook Architecture"
      }
    },
    {
      id: "intranet-lps",
      title: "Intranet du Lycée Professionnel Sectoriel de Yopougon",
      organization: "CODING ACADEMY BY EPITECH · PROJET DE FIN D'ÉTUDES",
      period: "2024",
      category: {
        fr: "EDTECH & ENTERPRISE",
        en: "EDTECH & ENTERPRISE"
      },
      metric: {
        fr: "1 200+ Utilisateurs",
        en: "1,200+ Active Users"
      },
      description: {
        fr: "Plateforme d'échange de fichiers, de gestion administrative et de suivi des étudiants lors des inscriptions : gestion des utilisateurs, filtres et recherche dynamique en JavaScript.",
        en: "File sharing platform, administrative management and student tracking during enrollment: user management, filters and dynamic JavaScript search."
      },
      technologies: ["Laravel", "JavaScript", "GitHub", "Trello", "Agile"],
      role: {
        fr: "Développeur Full-Stack",
        en: "Full-Stack Developer"
      },
      architectureDetails: {
        challenge: {
          fr: "Fédérer les flux administratifs, enseignants et étudiants avec des contrôles d'accès stricts et une gestion efficace des inscriptions et du suivi pédagogique.",
          en: "Unify administrative, teaching, and student workflows with strict access controls and efficient enrollment and academic tracking management."
        },
        solution: {
          fr: "Application Laravel avec gestion des rôles, échange de fichiers sécurisé et recherche dynamique côté client en JavaScript pour une expérience fluide.",
          en: "Laravel application with role management, secure file sharing, and client-side dynamic JavaScript search for a smooth experience."
        },
        highlights: {
          fr: [
            "Gestion complète des utilisateurs avec rôles et permissions",
            "Système d'échange de fichiers sécurisé entre administration et étudiants",
            "Filtres et recherche dynamique en JavaScript pour le suivi des inscriptions"
          ],
          en: [
            "Complete user management with roles and permissions",
            "Secure file exchange system between administration and students",
            "Dynamic JavaScript filters and search for enrollment tracking"
          ]
        },
        database: "MySQL",
        pattern: "MVC Architecture, Agile/Kanban"
      }
    },
    {
      id: "fatom",
      title: "Site web de la FATOM (Fondation ATOM OMAÏS)",
      organization: "FREELANCE · FONDATION ATOM OMAÏS",
      period: "2022",
      category: {
        fr: "IMPACT SOCIAL & ONG",
        en: "SOCIAL IMPACT & NGO"
      },
      metric: {
        fr: "Afrique de l'Ouest",
        en: "West Africa Region"
      },
      description: {
        fr: "Intégration, refonte graphique et optimisation de l'ergonomie et de l'accessibilité du site de la fondation.",
        en: "Integration, graphic redesign and optimization of the foundation website's ergonomics and accessibility."
      },
      technologies: ["Vue.js", "WordPress", "Tailwind CSS"],
      link: "https://www.fatom.org",
      role: {
        fr: "Développeur Frontend & Intégrateur",
        en: "Frontend Developer & Integrator"
      },
      architectureDetails: {
        challenge: {
          fr: "Créer une vitrine institutionnelle internationale à fort impact, avec une ergonomie optimisée pour les visiteurs et une accessibilité conforme aux standards.",
          en: "Create a high-impact international institutional showcase, with optimized ergonomics for visitors and standards-compliant accessibility."
        },
        solution: {
          fr: "Refonte complète du site sous Vue.js et WordPress avec optimisation SEO, performances mobile et accessibilité.",
          en: "Complete website redesign using Vue.js and WordPress with SEO optimization, mobile performance and accessibility."
        },
        highlights: {
          fr: [
            "Refonte graphique complète avec amélioration de l'ergonomie",
            "Optimisation de l'accessibilité conforme aux standards WCAG",
            "Performance mobile optimisée pour les réseaux à faible débit"
          ],
          en: [
            "Complete graphic redesign with improved ergonomics",
            "Accessibility optimization compliant with WCAG standards",
            "Mobile performance optimized for low-bandwidth networks"
          ]
        },
        database: "WordPress MySQL",
        pattern: "Jamstack Hybrid & WordPress CMS"
      }
    }
  ],
  skillCategories: [
    {
      id: "frontend",
      code: "CORE 01",
      title: {
        fr: "Front-end",
        en: "Front-end"
      },
      description: {
        fr: "Interfaces interactives à haute performance, design systems rigoureux et composants modulaires maintenables.",
        en: "High-performance interactive interfaces, rigorous design systems, and modular, maintainable component architectures."
      },
      icon: "web",
      featured: ["Angular", "Vue.js", "Nuxt.js", "React"],
      skills: ["Angular", "Vue.js", "Nuxt.js", "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / SCSS", "JavaScript", "State Management"]
    },
    {
      id: "backend",
      code: "CORE 02",
      title: {
        fr: "Back-end",
        en: "Back-end"
      },
      description: {
        fr: "Architectures robustes, APIs RESTful et microservices fiables, conformes aux standards PSR et Clean Architecture.",
        en: "Robust architectures, RESTful APIs and reliable microservices, adhering to PSR standards and Clean Architecture."
      },
      icon: "terminal",
      featured: ["Laravel / PHP", "Node.js (Express, NestJS)", "Python (Flask, Django)", "Windev"],
      skills: ["Laravel / PHP", "Node.js (Express, NestJS)", "Python (Flask, Django)", "Windev", "RESTful APIs", "Microservices", "Clean Architecture", "OOP / SOLID"]
    },
    {
      id: "mobile",
      code: "CORE 03",
      title: {
        fr: "Mobile",
        en: "Mobile"
      },
      description: {
        fr: "Applications multiplateformes performantes avec des frameworks modernes.",
        en: "Performant cross-platform mobile applications with modern frameworks."
      },
      icon: "smartphone",
      featured: ["Flutter", "React Native", "Ionic"],
      skills: ["Flutter", "React Native", "Ionic"]
    },
    {
      id: "data",
      code: "CORE 04",
      title: {
        fr: "Bases de données",
        en: "Databases"
      },
      description: {
        fr: "Persistance relationnelle et NoSQL optimisée, indexation fine et modélisation de données.",
        en: "Optimized relational & NoSQL persistence, query indexing, and data modeling."
      },
      icon: "database",
      featured: ["MySQL", "MongoDB", "Firebase"],
      skills: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "Redis", "Query Tuning", "Data Modeling"]
    },
    {
      id: "devops-methods",
      code: "CORE 05",
      title: {
        fr: "Outils & Méthodes",
        en: "Tools & Methods"
      },
      description: {
        fr: "Gestion de version, intégration continue, serveurs Linux et conduite de projet agile.",
        en: "Version control, continuous integration, Linux servers, and agile project management."
      },
      icon: "deployed_code",
      featured: ["Git / GitHub", "Trello (Agile / Kanban)", "Linux (CentOS)", "WordPress"],
      skills: ["Git / GitHub", "Trello (Agile / Kanban)", "Linux (CentOS)", "WordPress", "Docker", "Nginx / Apache", "CI/CD", "REST / OpenAPI"]
    }
  ],
  career: [
    {
      id: "assurland",
      period: "Juil. 2026 – Présent",
      isCurrent: true,
      role: {
        fr: "Développeur Web",
        en: "Web Developer"
      },
      company: "Assurland Africa, Abidjan",
      tag: {
        fr: "POSTE ACTUEL · ASSURANCE",
        en: "CURRENT POSITION · INSURANCE"
      },
      description: {
        fr: "Développement du CRM de l'entreprise sous Laravel 11 et Angular 17 (équipe de 4 personnes). Initialisation du projet, implémentation de l'API Laravel et création des pages front-end.",
        en: "Enterprise CRM development using Laravel 11 and Angular 17 (team of 4). Project initialization, Laravel API implementation, and front-end page creation."
      },
      achievements: {
        fr: [
          "Initialisation du projet et mise en place de l'architecture technique",
          "Implémentation de l'API Laravel et des pages front-end Angular",
          "Périmètre : modules Opportunités, Offres, Scoring, Contacts et Comptes clients"
        ],
        en: [
          "Project initialization and technical architecture setup",
          "Laravel API implementation and Angular front-end pages",
          "Scope: Opportunities, Offers, Scoring, Contacts and Client Accounts modules"
        ]
      }
    },
    {
      id: "epitech",
      period: "Juin 2025 – Juil. 2026",
      role: {
        fr: "Accompagnateur Pédagogique Epitech",
        en: "Epitech Pedagogical Mentor"
      },
      company: "African Education and Innovation Group, Abidjan",
      tag: {
        fr: "MENTORAT & PÉDAGOGIE",
        en: "MENTORSHIP & EDUCATION"
      },
      description: {
        fr: "Soutien pédagogique aux étudiants en développement web (Laravel, Vue.js) : ateliers, séances de tutorat et suivi personnalisé des progrès.",
        en: "Pedagogical support for web development students (Laravel, Vue.js): workshops, tutoring sessions and personalized progress tracking."
      },
      achievements: {
        fr: [
          "Ateliers et séances de tutorat en Laravel et Vue.js",
          "Encadrement de projets web collaboratifs",
          "Coordination avec les formateurs pour adapter les contenus pédagogiques"
        ],
        en: [
          "Laravel and Vue.js workshops and tutoring sessions",
          "Supervision of collaborative web projects",
          "Coordination with trainers to adapt educational content"
        ]
      }
    },
    {
      id: "giz",
      period: "Févr. 2025 – Juin 2025",
      role: {
        fr: "Stagiaire Développeur Web",
        en: "Web Developer Intern"
      },
      company: "GIZ (Invest for Jobs), Abidjan",
      tag: {
        fr: "COOPÉRATION INTERNATIONALE",
        en: "INTERNATIONAL COOPERATION"
      },
      description: {
        fr: "Application de mise en relation apprenants / recruteurs (CVthèque) sous Laravel ; application du projet FORPRODE (Laravel, Nuxt.js). Conception du site du Lycée Professionnel Sectoriel de Yopougon ; refonte du site de l'IPNETP (WordPress, Vue.js).",
        en: "Job matching application (CV database) connecting learners and recruiters using Laravel; FORPRODE project application (Laravel, Nuxt.js). Design of the Yopougon Vocational School website; IPNETP website redesign (WordPress, Vue.js)."
      },
      achievements: {
        fr: [
          "Application CVthèque de mise en relation apprenants / recruteurs sous Laravel",
          "Application du projet FORPRODE (Laravel, Nuxt.js)",
          "Conception du site du Lycée Professionnel et refonte du site de l'IPNETP (WordPress, Vue.js)"
        ],
        en: [
          "CV database application connecting learners and recruiters using Laravel",
          "FORPRODE project application (Laravel, Nuxt.js)",
          "Vocational School website design and IPNETP website redesign (WordPress, Vue.js)"
        ]
      }
    },
    {
      id: "zenith",
      period: "Juil. 2020 – Oct. 2020",
      role: {
        fr: "Responsable Production",
        en: "Production Manager"
      },
      company: "Zenith Assurances, Abidjan",
      tag: {
        fr: "GESTIONNAIRE SANTÉ",
        en: "HEALTH INSURANCE"
      },
      description: {
        fr: "Développement d'une plateforme de gestion interne des assurés en PHP pour optimiser la gestion des informations clients et des processus internes.",
        en: "Development of an internal insured persons management platform in PHP to optimize client information management and internal processes."
      },
      achievements: {
        fr: [
          "Développement d'une plateforme de gestion interne des assurés en PHP",
          "Optimisation de la gestion des informations clients",
          "Amélioration des processus internes de traitement"
        ],
        en: [
          "Internal insured persons management platform development in PHP",
          "Client information management optimization",
          "Internal processing workflow improvements"
        ]
      }
    },
    {
      id: "jsoft",
      period: "Juil. 2018 – Juil. 2020",
      role: {
        fr: "Développeur Web",
        en: "Web Developer"
      },
      company: "JSOFT Technologies, Abidjan",
      tag: {
        fr: "INTÉGRATEUR DE SOLUTIONS",
        en: "SOLUTIONS INTEGRATOR"
      },
      description: {
        fr: "Conception d'applications web en PHP / MySQL optimisant les processus de souscription d'assurances. Module de renouvellement des contrats d'assurance automobile en Windev.",
        en: "Web application design in PHP / MySQL optimizing insurance underwriting processes. Auto insurance contract renewal module in Windev."
      },
      achievements: {
        fr: [
          "Conception d'applications web en PHP / MySQL pour la souscription d'assurances",
          "Module de renouvellement des contrats automobile en Windev : +15% d'efficacité",
          "Optimisation des processus de souscription"
        ],
        en: [
          "PHP / MySQL web applications for insurance underwriting",
          "Auto insurance contract renewal module in Windev: +15% efficiency",
          "Underwriting process optimization"
        ]
      }
    },
    {
      id: "saas",
      period: "Févr. 2016 – Juil. 2018",
      role: {
        fr: "Assistant Informatique",
        en: "IT Assistant"
      },
      company: "Société Africaine d'Assistance et de Services, Abidjan",
      tag: {
        fr: "GESTIONNAIRE SANTÉ",
        en: "HEALTH INSURANCE"
      },
      description: {
        fr: "Module d'exclusion en Windev 17 pour une gestion plus flexible des remboursements (factures pharmacies et cliniques). Système de gestion des cartes d'assurés en PHP / MySQL.",
        en: "Exclusion module in Windev 17 for more flexible reimbursement management (pharmacy and clinic invoices). Insured card management system in PHP / MySQL."
      },
      achievements: {
        fr: [
          "Module d'exclusion en Windev 17 pour la gestion des remboursements",
          "Système de gestion des cartes d'assurés en PHP / MySQL",
          "Prise en charge rapide dans les centres de santé et pharmacies"
        ],
        en: [
          "Windev 17 exclusion module for reimbursement management",
          "Insured card management system in PHP / MySQL",
          "Faster processing at health centers and pharmacies"
        ]
      }
    }
  ],
  education: [
    {
      id: "epitech-wecode",
      year: "Avr. 2024 – Nov. 2024",
      degree: {
        fr: "Programme WECODE",
        en: "WECODE Professional Integration Program"
      },
      institution: "Coding Academy by Epitech, Abidjan",
      tag: {
        fr: "FORMATION INTENSIVE",
        en: "INTENSIVE TRAINING"
      },
      description: {
        fr: "Formation intensive web & mobile : Laravel, Vue.js / React, NestJS, Flutter / React Native, Flask.",
        en: "Intensive web & mobile training: Laravel, Vue.js / React, NestJS, Flutter / React Native, Flask."
      },
      skillsGained: ["Laravel", "Vue.js / React", "NestJS", "Flutter / React Native", "Flask"]
    },
    {
      id: "pigier",
      year: "Déc. 2014 – Août 2016",
      degree: {
        fr: "Licence Pro. Réseaux & Génie Logiciel (2e année)",
        en: "Professional Bachelor's in Networks & Software Engineering (2nd year)"
      },
      institution: "Pigier Côte d'Ivoire, Abidjan",
      tag: {
        fr: "FORMATION UNIVERSITAIRE",
        en: "UNIVERSITY CURRICULUM"
      },
      description: {
        fr: "Conception orientée objet, modélisation UML, bases de données relationnelles avancées, structures de données et administration des systèmes d'information.",
        en: "Object-oriented design, UML modeling, advanced relational database architecture, data structures, and enterprise information systems administration."
      },
      skillsGained: ["Modélisation UML", "Bases de Données (SQL)", "Algorithmique", "Réseaux & OS", "Génie Logiciel"]
    },
    {
      id: "bac",
      year: "2013 – 2014",
      degree: {
        fr: "Baccalauréat, série D",
        en: "Scientific Baccalaureate (Series D)"
      },
      institution: "Lycée Moderne Adjamé Harris, Abidjan",
      tag: {
        fr: "FONDATION SCIENTIFIQUE",
        en: "SCIENTIFIC FOUNDATION"
      },
      description: {
        fr: "Raisonnement formel, démarche d'investigation mathématique et bases scientifiques appliquées aux structures logiques.",
        en: "Formal reasoning, mathematical logic, and scientific problem-solving methods applied to logical structures."
      },
      skillsGained: ["Mathématiques", "Logique Formelle", "Physique-Chimie", "Méthode Scientifique"]
    }
  ],
  testimonials: [
    {
      id: "testimonial-1",
      name: "Directeur Technique",
      role: { fr: "Directeur Technique", en: "CTO" },
      company: "Assurland Africa",
      initials: "DT",
      quote: {
        fr: "Aristide a su initialiser et structurer le projet CRM avec une rigueur technique qui a permis à l'équipe de 4 développeurs d'avancer efficacement sur les modules métier.",
        en: "Aristide was able to initialize and structure the CRM project with technical rigor that allowed the team of 4 developers to efficiently progress on business modules."
      },
      relation: { fr: "Collaborateur direct", en: "Direct collaborator" }
    },
    {
      id: "testimonial-2",
      name: "Responsable Projet",
      role: { fr: "Responsable Projet", en: "Project Manager" },
      company: "BURIDA",
      initials: "RP",
      quote: {
        fr: "Le système de monitoring audio conçu par Aristide a révolutionné notre processus de répartition des droits d'auteur. Fiabilité de 98%+ et une interface de reporting qui a convaincu tous nos partenaires.",
        en: "The audio monitoring system designed by Aristide revolutionized our copyright distribution process. 98%+ reliability and a reporting interface that convinced all our partners."
      },
      relation: { fr: "Client & commanditaire", en: "Client & sponsor" }
    },
    {
      id: "testimonial-3",
      name: "Coordinateur Pédagogique",
      role: { fr: "Coordinateur Pédagogique", en: "Academic Coordinator" },
      company: "Epitech Abidjan",
      initials: "CP",
      quote: {
        fr: "En tant qu'accompagnateur pédagogique, Aristide a su transmettre les bonnes pratiques d'ingénierie logicielle avec une rigueur et une bienveillance qui ont marqué nos apprenants.",
        en: "As a pedagogical mentor, Aristide conveyed software engineering best practices with a rigor and care that left a lasting impression on our learners."
      },
      relation: { fr: "Collègue enseignant", en: "Teaching colleague" }
    }
  ],
  about: {
    title: {
      fr: "À Propos",
      en: "About Me"
    },
    paragraphs: {
      fr: [
        "Développeur web full-stack avec plus de 8 ans d'expérience (Laravel, Angular, Vue.js / Nuxt.js, PHP / MySQL). Actuellement en charge du développement du CRM d'Assurland Africa.",
        "J'ai auparavant livré des applications pour la GIZ et des organisations privées, et conçu des solutions métier pour le secteur de l'assurance santé. À l'aise du développement à l'accompagnement technique de profils juniors.",
        "Formé à Epitech (programme WECODE) et forgé par des projets allant du monitoring audio temps réel à la gestion hospitalière, je suis à l'aise aussi bien en backend avec Laravel qu'en interfaces frontend avec Angular et Vue.js."
      ],
      en: [
        "Full-stack web developer with 8+ years of experience (Laravel, Angular, Vue.js / Nuxt.js, PHP / MySQL). Currently in charge of CRM development at Assurland Africa.",
        "Previously delivered applications for GIZ and private organizations, and designed business solutions for the health insurance sector. Comfortable from development to technical mentoring of junior profiles.",
        "Trained at Epitech (WECODE program) and forged through projects ranging from real-time audio monitoring to hospital management, I'm equally comfortable with Laravel backends and Angular/Vue.js frontends."
      ]
    },
    highlights: [
      { label: { fr: "Années d'expérience", en: "Years of experience" }, value: "8+" },
      { label: { fr: "Projets livrés", en: "Projects delivered" }, value: "20+" },
      { label: { fr: "Spécialité", en: "Specialty" }, value: "Full-Stack" },
      { label: { fr: "Localisation", en: "Location" }, value: "Abidjan, CI" }
    ]
  }
};
