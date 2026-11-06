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
    fullName: "ARISTIDE GHISLAIN ADOUKO",
    preferredName: "ARISTIDE",
    initials: "AA",
    title: {
      fr: "Solutions Architect & Lead Dev",
      en: "Solutions Architect & Lead Developer"
    },
    experienceYears: "8+",
    badge: {
      fr: "8+ ans d'expérience · Solutions Architect & Lead Dev",
      en: "8+ years experience · Solutions Architect & Lead Dev"
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
      fr: "Concepteur de Solutions Logicielles, Développeur Web Full-Stack & UI Architect basé à Abidjan.",
      en: "Software Solutions Architect, Full-Stack Web Developer & UI Architect based in Abidjan."
    },
    status: {
      fr: "Disponible pour missions d'ingénierie & CDI",
      en: "Available for engineering missions & Full-Time contracts"
    },
    location: "Abidjan, Côte d'Ivoire",
    email: "aristide.adouko@epitech.eu",
    phone: "+2250787587406",
    phoneFormatted: "+225 07 87 58 74 06",
    whatsappUrl: "https://wa.me/2250787587406",
    githubUrl: "https://github.com/smartdev1",
    linkedinUrl: "https://linkedin.com/in/aristide-adouko",
    cvUrl: "/cv-aristide-adouko.pdf",
    avatarUrl: "/avatar.jpg"
  },
  projects: [
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
        fr: "Système d'écoute et de monitoring automatisé des flux médias pour le calcul et la répartition équitable des droits d'auteur. Algorithmes d'empreinte audio et tableaux de bord analytiques temps réel.",
        en: "Automated media stream monitoring and listening system for copyright calculation and fair distribution. Audio fingerprinting algorithms and real-time analytical dashboards."
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
      title: "Application de Gestion Médicale — Clinique Saint Mathieu",
      organization: "SYSTÈME DE SANTÉ & ERP · YOPOUGON",
      period: "2022 - 2023",
      category: {
        fr: "SANTÉ & SYSTÈMES CRITIQUES",
        en: "HEALTHCARE & CRITICAL SYSTEMS"
      },
      metric: {
        fr: "100% Dématérialisé",
        en: "100% Paperless Hospital"
      },
      description: {
        fr: "Logiciel intégral de gestion hospitalière : dossiers médicaux dématérialisés, gestion du bloc et des lits, facturation tiers-payant, pharmacie interne et planification des consultations.",
        en: "Comprehensive hospital management software: digitized electronic health records, operating room and bed management, insurance third-party billing, pharmacy inventory, and appointments."
      },
      technologies: ["Laravel Framework", "Livewire & Tailwind", "Windev Data Bridge", "MySQL", "PostgreSQL", "Audit Trail"],
      role: {
        fr: "Architecte Concepteur & Développeur Principal",
        en: "System Architect & Principal Developer"
      },
      architectureDetails: {
        challenge: {
          fr: "Moderniser un système hospitalier existant sous Windev sans interruption de service, en garantissant la confidentialité médicale stricte (HDS/RGPD) et la continuité 24h/7j.",
          en: "Modernize a legacy hospital system previously on Windev without downtime, enforcing strict health data privacy standards and 24/7 mission-critical uptime."
        },
        solution: {
          fr: "Conception d'une passerelle hybride (Data Bridge) assurant une synchronisation bidirectionnelle fluide entre les bases Windev historiques et la nouvelle interface web réactive Laravel Livewire.",
          en: "Designed a fault-tolerant hybrid Data Bridge enabling seamless two-way replication between historical Windev databases and a responsive, secure Laravel Livewire interface."
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
            "Complete cryptographic audit trail for prescriptions and in-house pharmacy deliveries"
          ]
        },
        database: "MySQL & HyperFileSQL Interop Bridge",
        pattern: "Modular Monolith, Domain-Driven Design (DDD)"
      }
    },
    {
      id: "official-plugins",
      title: "Extensions Officielles — WooTour & MotoPress Hotel Booking",
      organization: "ECOSYSTÈME & PLUGINS · WORDPRESS ENGINE",
      period: "2021 - 2023",
      category: {
        fr: "FINTECH & E-COMMERCE",
        en: "FINTECH & E-COMMERCE"
      },
      metric: {
        fr: "Production Globale",
        en: "Global Production Deployed"
      },
      description: {
        fr: "Développement de passerelles personnalisées, modules de paiement panafricains (Wave, Mobile Money) et synchronisations d'inventaires pour les acteurs hôteliers internationaux.",
        en: "Development of custom payment gateways, Pan-African mobile money integrations (Wave, MTN, Orange, Moov) and multi-channel inventory synchronization for international hotel chains."
      },
      technologies: ["PHP 8+", "WooCommerce Core", "Payment Webhooks", "REST APIs", "OAuth 2.0", "iCal Sync"],
      role: {
        fr: "Core Plugin Engineer & Payment Specialist",
        en: "Core Plugin Engineer & Payment Specialist"
      },
      architectureDetails: {
        challenge: {
          fr: "Permettre aux établissements touristiques d'Afrique subsaharienne de recevoir instantanément des réservations garanties via les réseaux Mobile Money tout en évitant les surréservations.",
          en: "Enable tourism operators and hotels across Sub-Saharan Africa to accept instant secured reservations through local Mobile Money rails without double-booking."
        },
        solution: {
          fr: "Création de modules de paiement conformes aux standards PSR et API WooCommerce avec gestion idempotente des webhooks et synchronisation bi-directionnelle iCal temps réel.",
          en: "Engineered PSR-compliant payment modules and WooCommerce hook integrations featuring idempotent webhook verification and real-time bidirectional iCal availability sync."
        },
        highlights: {
          fr: [
            "Support natif des devises XOF, XAF, EUR, USD avec conversion dynamique",
            "Gestion des pannes réseaux avec système de relance exponentielle des notifications",
            "Adoption par de nombreux complexes hôteliers et agences de voyages de référence"
          ],
          en: [
            "Native multi-currency support (XOF, XAF, EUR, USD) with dynamic real-time exchange rates",
            "Network resilience featuring exponential backoff retries for transactional notifications",
            "Adopted across premier hotel resorts, eco-lodges, and regional tour operators"
          ]
        },
        database: "WordPress Relational Schema & Custom Tables",
        pattern: "Plugin Hook Architecture, Idempotent Webhook Handlers"
      }
    },
    {
      id: "intranet-lps",
      title: "Intranet du Lycée Professionnel Sectoriel de Yopougon",
      organization: "FORMATION & EPITECH · ABIDJAN",
      period: "2023 - 2024",
      category: {
        fr: "EDTECH & ENTERPRISE",
        en: "EDTECH & ENTERPRISE"
      },
      metric: {
        fr: "1 200+ Utilisateurs",
        en: "1,200+ Active Users"
      },
      description: {
        fr: "Conception d'une plateforme sécurisée de suivi pédagogique : diffusion des cours, registre des présences biométriques, relevés automatisés et messagerie institutionnelle.",
        en: "Architected a secure academic lifecycle platform: course dissemination, biometric attendance tracking, automated report card generation, and institutional communications."
      },
      technologies: ["NestJS", "Angular 17", "PostgreSQL", "TypeORM", "WebSockets", "Docker"],
      role: {
        fr: "Architecte Full-Stack & Lead Pédagogique",
        en: "Full-Stack Architect & Technical Lead"
      },
      architectureDetails: {
        challenge: {
          fr: "Fédérer les flux administratifs, enseignants et étudiants avec des contrôles d'accès stricts (RBAC) et une synchronisation biométrique des entrées/sorties en atelier technique.",
          en: "Unify administrative, pedagogical, and student workflows with fine-grained RBAC and automated hardware synchronization with campus biometric attendance sensors."
        },
        solution: {
          fr: "Architecture microservices avec backend NestJS modulaire, WebSockets pour les notifications instantanées et frontend Angular 17 en composants autonomes (Standalone Components).",
          en: "Microservice-ready architecture with modular NestJS backend, WebSockets for push notifications, and Angular 17 standalone components with state management."
        },
        highlights: {
          fr: [
            "Génération instantanée de bulletins scolaires sécurisés par QR Code infalsifiable",
            "Temps de réponse de l'API inférieur à 65ms sur les requêtes lourdes d'évaluation",
            "Système de notification SMS/Email automatisé vers les parents d'élèves"
          ],
          en: [
            "Instant tamper-proof report card generation backed by cryptographically signed QR codes",
            "API response times under 65ms for complex multidimensional grading queries",
            "Automated parent notification engine via SMS and transactional email gateways"
          ]
        },
        database: "PostgreSQL 15 (ACID Compliant)",
        pattern: "Clean Architecture, CQRS & Dependency Injection"
      }
    },
    {
      id: "fatom",
      title: "Portail Numérique Institutionnel de la FATOM",
      organization: "ONG & PHILANTHROPIE · FONDATION ATOM OMAÏS",
      period: "2022 - 2023",
      category: {
        fr: "IMPACT SOCIAL & FINTECH",
        en: "SOCIAL IMPACT & FINTECH"
      },
      metric: {
        fr: "Afrique de l'Ouest",
        en: "West Africa Region"
      },
      description: {
        fr: "Plateforme web d'impact social pour la vulgarisation d'actions sanitaires infantiles, bourses éducatives et passerelle de dons transparents et certifiés.",
        en: "High-impact non-profit portal highlighting pediatric healthcare missions, academic scholarships, and a transparent certified donation gateway for corporate and individual patrons."
      },
      technologies: ["Nuxt.js", "Node.js API", "Audit PCI-DSS", "Tailwind CSS", "Stripe", "Mobile Money"],
      role: {
        fr: "Directeur Technique & Frontend Architect",
        en: "Technical Director & Frontend Architect"
      },
      architectureDetails: {
        challenge: {
          fr: "Créer une vitrine institutionnelle internationale à fort impact émotionnel, tout en intégrant un système de collecte de dons ultra-sécurisé conforme aux exigences PCI-DSS.",
          en: "Create a world-class institutional showcase with strong brand identity while embedding a bank-grade secure donation processing system meeting PCI-DSS mandates."
        },
        solution: {
          fr: "Développement en Nuxt.js SSR avec optimisation SEO maximale, passerelles bancaires chiffrées de bout en bout et publication automatisée des bilans financiers d'actions.",
          en: "Built on Nuxt.js SSR with state-of-the-art SEO and Core Web Vitals optimization, end-to-end encrypted banking conduits, and public transparency audit dashboards."
        },
        highlights: {
          fr: [
            "Score de performance Google Lighthouse 98/100 sur mobile et desktop",
            "Délivrance automatique des reçus fiscaux certifiés par signature électronique",
            "Couverture médiatique dans 4 pays d'Afrique de l'Ouest pour les campagnes de dons"
          ],
          en: [
            "Google Lighthouse performance score of 98/100 across mobile and desktop devices",
            "Automated tax-deductible receipt generation with digital certificate signing",
            "Deployed across 4 West African countries for international donation campaigns"
          ]
        },
        database: "PostgreSQL & Encrypted Vault",
        pattern: "SSR / Jamstack Hybrid with Serverless Functions"
      }
    }
  ],
  skillCategories: [
    {
      id: "backend",
      code: "CORE 01",
      title: {
        fr: "Backend Engineering",
        en: "Backend Engineering"
      },
      description: {
        fr: "Architectures monolithiques & microservices fiables, conformes aux standards PSR, MVC et Clean Architecture.",
        en: "Resilient monolithic & microservices architectures, strictly adhering to PSR standards, MVC, and Clean Architecture."
      },
      icon: "terminal",
      featured: ["Laravel 11", "PHP 8.x", "Node.js (NestJS)", "Express.js"],
      skills: ["Laravel 11", "PHP 8.x", "Node.js (NestJS)", "Express.js", "Python", "Windev", "RESTful APIs", "Microservices", "Clean Architecture", "OOP / SOLID"]
    },
    {
      id: "frontend",
      code: "CORE 02",
      title: {
        fr: "Frontend & SPAs",
        en: "Frontend & SPAs"
      },
      description: {
        fr: "Interfaces interactives à haute performance, design systems rigoureux et composants modulaires maintenables.",
        en: "High-performance interactive interfaces, rigorous design systems, and modular, maintainable component architectures."
      },
      icon: "web",
      featured: ["Angular 17", "Vue 3 / Nuxt", "React", "Next.js"],
      skills: ["Angular 17", "Vue 3 / Nuxt", "React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "HTML5 / SCSS", "State Management", "UI/UX Architecture"]
    },
    {
      id: "data-mobile",
      code: "CORE 03",
      title: {
        fr: "Données & Mobile",
        en: "Databases & Mobile"
      },
      description: {
        fr: "Persistance relationnelle et NoSQL optimisée, indexation fine et applications multiplateformes résilientes.",
        en: "Optimized relational & NoSQL persistence, deep query indexing, and resilient cross-platform mobile solutions."
      },
      icon: "database",
      featured: ["PostgreSQL", "MySQL", "MongoDB", "Flutter"],
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Flutter", "React Native", "Query Tuning", "Data Modeling", "Cache Strategies"]
    },
    {
      id: "devops-methods",
      code: "CORE 04",
      title: {
        fr: "DevOps & Méthodes",
        en: "DevOps & Methodology"
      },
      description: {
        fr: "Cycle de vie logiciel sous contrôle, pipelines CI/CD, serveurs Linux durcis et conduite de projet agile.",
        en: "Full software lifecycle orchestration, automated CI/CD pipelines, hardened Linux servers, and agile delivery."
      },
      icon: "deployed_code",
      featured: ["Git / Flow", "Linux / CentOS", "REST / OpenAPI", "Agile Scrum"],
      skills: ["Git / GitHub Flow", "Linux / CentOS / Debian", "Docker", "REST / OpenAPI", "GraphQL", "Agile Scrum", "CI/CD Pipelines", "Code Review", "Nginx / Apache"]
    }
  ],
  career: [
    {
      id: "assurland",
      period: "2024 - Présent",
      isCurrent: true,
      role: {
        fr: "Développeur Web Full-Stack",
        en: "Full-Stack Web Developer"
      },
      company: "Assurland Africa",
      tag: {
        fr: "POSTE ACTUEL · FINTECH ASSURANCE",
        en: "CURRENT POSITION · INSURTECH"
      },
      description: {
        fr: "Pilotage et conception de solutions logicielles d'assurance. Refonte d'architectures sous Laravel 11 et Angular 17. Optimisation des processus de souscription et passerelles de courtage.",
        en: "Steering and building enterprise insurance solutions. Modernizing legacy core architectures with Laravel 11 and Angular 17. Streamlining policy underwriting workflows and brokerage bridges."
      },
      achievements: {
        fr: [
          "Architecture de nouveaux modules de tarification automatisée en temps réel",
          "Refactorisation du socle applicatif vers une architecture modulaire découplée",
          "Interfaçage avec les compagnies d'assurance régionales partenaires"
        ],
        en: [
          "Architected real-time automated insurance rating and quote calculation engines",
          "Refactored legacy monolith into high-efficiency decoupled modules",
          "Integrated seamless API conduits with major Pan-African insurance underwriters"
        ]
      }
    },
    {
      id: "epitech",
      period: "2023 - 2024",
      role: {
        fr: "Accompagnateur Pédagogique",
        en: "Technical Pedagogical Mentor"
      },
      company: "Epitech / African Education & Innovation",
      tag: {
        fr: "MENTORAT TECH & EXCELLENCE",
        en: "TECH MENTORSHIP & EXCELLENCE"
      },
      description: {
        fr: "Encadrement technique intensif d'apprenants sur la pédagogie par projets : socles C, Python, revues de code rigoureuses, architectures logicielles et bonnes pratiques industrielles.",
        en: "Intensive technical mentorship of software engineering fellows in project-based learning: low-level C programming, Python, strict code reviews, and enterprise best practices."
      },
      achievements: {
        fr: [
          "Accompagnement de plus de 60 étudiants vers la réussite de leurs jurys techniques",
          "Animation de workshops sur Clean Code, Git Flow et les design patterns modernes",
          "Évaluation continue de la qualité du code et des performances algorithmiques"
        ],
        en: [
          "Mentored 60+ engineering fellows to successful project defenses and certifications",
          "Facilitated hands-on masterclasses on Clean Code, Git Flow, and GoF design patterns",
          "Continuous review of algorithmic complexity, memory hygiene, and system architecture"
        ]
      }
    },
    {
      id: "giz",
      period: "2022 - 2023",
      role: {
        fr: "Stagiaire Développeur Web",
        en: "Web Developer Intern"
      },
      company: "GIZ (Invest for Jobs / FORPRODE / IPNETP)",
      tag: {
        fr: "COOPÉRATION INTERNATIONALE",
        en: "INTERNATIONAL COOPERATION"
      },
      description: {
        fr: "Création d'outils web pour le suivi de la formation professionnelle et l'insertion en entreprise des jeunes diplômés. Modélisation de bases de données et portails d'analyse.",
        en: "Engineered web solutions for vocational training tracking and corporate placement of young technical graduates. Relational modeling and interactive analytical tracking portals."
      },
      achievements: {
        fr: [
          "Déploiement du portail d'insertion professionnelle reliant centres de formation et recruteurs",
          "Automatisation du reporting statistique pour les bailleurs internationaux de la GIZ",
          "Interface responsive moderne optimisée pour les débits mobiles à faible connectivité"
        ],
        en: [
          "Deployed placement portal bridging vocational institutes and corporate hiring managers",
          "Automated monthly statistical reporting for GIZ international project auditors",
          "Engineered high-efficiency lightweight UI tuned for low-bandwidth mobile networks"
        ]
      }
    },
    {
      id: "zenith",
      period: "2020 - 2022",
      role: {
        fr: "Responsable Production",
        en: "Production Operations Lead"
      },
      company: "Zenith Assurances",
      tag: {
        fr: "PRODUCTION & AUDIT",
        en: "OPERATIONS & AUDIT"
      },
      description: {
        fr: "Supervision de l'émission des contrats, fiabilisation des flux d'informations et automatisation des reportings. Contrôle qualité des opérations et sécurité des données de souscription.",
        en: "Supervised contract issuance operations, reinforced integrity of critical transactional pipelines, and automated reporting systems. Quality assurance and underwriting data governance."
      },
      achievements: {
        fr: [
          "Élimination des erreurs de ressaisie grâce à l'automatisation des ponts de données",
          "Amélioration des délais de traitement des dossiers de souscription de 45%",
          "Mise en place de tableaux de bord hebdomadaires pour la Direction Générale"
        ],
        en: [
          "Eliminated duplicate manual re-entry errors by automating transactional data pipelines",
          "Reduced policy underwriting turnaround time by 45%",
          "Implemented automated executive operational dashboards for Board oversight"
        ]
      }
    },
    {
      id: "jsoft",
      period: "2018 - 2020",
      role: {
        fr: "Développeur d'Applications",
        en: "Software Applications Developer"
      },
      company: "JSOFT Technologies",
      tag: {
        fr: "INGÉNIERIE LOGICIELLE",
        en: "SOFTWARE ENGINEERING"
      },
      description: {
        fr: "Développement de solutions de facturation et de gestion commerciale sous Windev et PHP/MySQL. Conception de modules métiers pour PME et grands comptes.",
        en: "Engineered billing, POS, and commercial ERP applications in Windev and PHP/MySQL. Crafted tailored business modules for SMEs and enterprise accounts."
      },
      achievements: {
        fr: [
          "Développement complet de modules de gestion de stocks et de caisse décentralisée",
          "Migration de bases de données volumineuses avec intégrité référentielle garantie",
          "Support technique niveau 2 et formation des utilisateurs finaux en entreprise"
        ],
        en: [
          "End-to-end development of inventory management and distributed POS cashier modules",
          "High-volume database migration with strict relational integrity verification",
          "Tier-2 technical support and on-site staff training for corporate clients"
        ]
      }
    },
    {
      id: "saas",
      period: "2016 - 2018",
      role: {
        fr: "Assistant Informatique",
        en: "IT & Systems Assistant"
      },
      company: "SAAS",
      tag: {
        fr: "INFRA & SYSTÈMES",
        en: "INFRASTRUCTURE & SYSTEMS"
      },
      description: {
        fr: "Administration du parc informatique, maintien des réseaux locaux (LAN), support technique utilisateurs et protocoles de sauvegardes sécurisées.",
        en: "Administered company workstation fleet, maintained local area network (LAN) stability, provided end-user hardware/software support, and enforced automated backup protocols."
      },
      achievements: {
        fr: [
          "Garantie d'une disponibilité du réseau local supérieure à 99.5%",
          "Mise en conformité des postes de travail et déploiement centralisé d'antivirus",
          "Documentation complète des procédures de maintenance et de reprise d'activité"
        ],
        en: [
          "Maintained LAN availability exceeding 99.5% uptime",
          "Harmonized company workstations and managed centralized endpoint security rollouts",
          "Authored complete IT disaster recovery procedures and maintenance runbooks"
        ]
      }
    }
  ],
  education: [
    {
      id: "epitech-wecode",
      year: "2024",
      degree: {
        fr: "Programme WECODE",
        en: "WECODE Intensive Software Engineering"
      },
      institution: "Coding Academy by Epitech",
      tag: {
        fr: "ÉLITE IMMERSION & EXCELLENCE",
        en: "ELITE IMMERSION & EXCELLENCE"
      },
      description: {
        fr: "Formation intensive en ingénierie logicielle full-stack, architectures distribuées modernes, revues de code rigoureuses et patterns de conception avancés.",
        en: "Rigorous intensive software engineering program: modern full-stack systems, distributed computing, peer code reviews, and advanced design patterns."
      },
      skillsGained: ["Architecture Logicielle", "Clean Code & Tests", "DevOps & Docker", "APIs Avancées", "TypeScript / Node"]
    },
    {
      id: "pigier",
      year: "Universitaire (2e année)",
      degree: {
        fr: "Licence Pro Génie Logiciel",
        en: "Professional Bachelor's in Software Engineering"
      },
      institution: "Pigier Côte d'Ivoire",
      tag: {
        fr: "FORMATION UNIVERSITAIRE",
        en: "UNIVERSITY CURRICULUM"
      },
      description: {
        fr: "Conception orientée objet, modélisation UML, bases de données relationnelles avancées, structures de données et administration des systèmes d'information.",
        en: "Object-oriented design, UML modeling, advanced relational database architecture, data structures, and enterprise information systems administration."
      },
      skillsGained: ["Modélisation UML", "Bases de Données (SQL)", "Algorithmique Avancée", "Réseaux & OS", "Génie Logiciel"]
    },
    {
      id: "bac",
      year: "Fondation Scientifique",
      degree: {
        fr: "Baccalauréat Série D",
        en: "Scientific Baccalaureate (Series D)"
      },
      institution: "Enseignement Secondaire Général",
      tag: {
        fr: "FONDATION SCIENTIFIQUE",
        en: "SCIENTIFIC FOUNDATION"
      },
      description: {
        fr: "Raisonnement formel rigoureux, démarche d'investigation mathématique et bases scientifiques appliquées aux structures logiques et algorithmiques.",
        en: "Rigorous analytical reasoning, mathematical logic, and scientific problem-solving methods directly applied to algorithmic thinking."
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
        fr: "Aristide a transformé notre architecture legacy en un système modulaire performant. Sa capacité à comprendre les enjeux métier de l'assurance tout en proposant des solutions techniques élégantes est remarquable.",
        en: "Aristide transformed our legacy architecture into a high-performance modular system. His ability to understand insurance business challenges while proposing elegant technical solutions is remarkable."
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
        "Ingénieur logiciel passionné avec plus de 8 ans d'expérience dans la conception et le déploiement de systèmes critiques. Basé à Abidjan, je combine une expertise technique approfondie en architectures distribuées avec une vision produit orientée impact.",
        "Mon approche : comprendre le métier avant de coder. Chaque solution que je conçois part d'une analyse rigoureuse des contraintes business, de la volumétrie attendue et des exigences de fiabilité. Je privilégie les architectures simples, testables et évolutives.",
        "Formé à Epitech et forgé par des projets allant du monitoring audio temps réel à la gestion hospitalière, je suis à l'aise aussi bien en backend haute performance qu'en interfaces utilisateur soignées."
      ],
      en: [
        "Passionate software engineer with 8+ years of experience designing and deploying mission-critical systems. Based in Abidjan, I combine deep technical expertise in distributed architectures with a product vision focused on measurable impact.",
        "My approach: understand the business before writing code. Every solution I design starts with rigorous analysis of business constraints, expected load, and reliability requirements. I favor simple, testable, and evolvable architectures.",
        "Trained at Epitech and forged through projects ranging from real-time audio monitoring to hospital management systems, I'm equally comfortable building high-performance backends and polished user interfaces."
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
