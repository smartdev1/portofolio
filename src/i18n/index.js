import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // Sidebar & Navigation
    nav: {
      dashboard: 'Dashboard',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    profile: {
      name: 'Aristide Adouko',
      role: 'Fullstack Developer',
    },
    // Dashboard
    dashboard: {
      path: '~/dashboard',
      title: 'Building Scalable Backend Systems',
      subtitle: 'Backend Developer specializing in API design, system architecture, and database optimization. I craft reliable, scalable solutions that power modern applications.',
      stats: {
        projects: 'Projects Completed',
        projectsTrend: '3 this year',
        apis: 'APIs Built',
        apisTrend: 'REST & GraphQL',
        years: 'Years Experience',
        yearsTrend: 'Since 2021',
      },
      featured: {
        title: 'Featured Projects',
        subtitle: 'Recent work showcasing system design and API development',
        viewAll: 'View All',
      },
      techStack: {
        title: 'Primary Tech Stack',
        laravel: 'PHP Framework',
        nodejs: 'Runtime',
        postgresql: 'Database',
        docker: 'Containers',
      },
    },
    // Projects
    projects: {
      path: '~/projects',
      title: 'Projects',
      subtitle: 'A collection of backend systems, APIs, and microservices I have built.',
      searchPlaceholder: 'Search projects...',
      filter: 'Filter:',
      clear: 'Clear',
      showing: 'Showing {count} of {total} projects',
      noResults: 'No projects found',
      noResultsHint: 'Try adjusting your search or filter criteria',
      clearFilters: 'Clear Filters',
      viewDetails: 'View Details',
    },
    // Project Details
    projectDetails: {
      back: 'Back to Projects',
      overview: 'Overview',
      context: 'Context',
      problem: 'Problem',
      solution: 'Solution',
      techStack: 'Tech Stack',
      features: 'Key Features',
      architecture: 'Architecture',
      authentication: 'Authentication',
      database: 'Database Design',
      apiEndpoints: 'API Endpoints',
      errorHandling: 'Error Handling',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      notFound: 'Project not found',
      notFoundHint: 'The project you are looking for does not exist.',
    },
    // Skills
    skills: {
      path: '~/skills',
      title: 'Skills & Expertise',
      subtitle: 'Technical skills and tools I use to build scalable backend systems.',
      categories: {
        backend: 'Backend',
        database: 'Database',
        devops: 'DevOps & Tools',
        api: 'API & Integration',
      },
      additional: 'Additional Skills',
    },
    // Experience
    experience: {
      path: '~/experience',
      title: 'Work Experience',
      subtitle: 'My professional journey in backend development and system architecture.',
      current: 'Current',
      achievements: 'Key Achievements',
      visit: 'Visit',
    },
    // Contact
    contact: {
      path: '~/contact',
      title: 'Get in Touch',
      subtitle: 'Have a project in mind or want to discuss backend architecture? I am always open to new opportunities.',
      info: 'Contact Information',
      location: 'Location',
      locationValue: 'Riviera Golf, Abidjan, Côte d\'Ivoire',
      remoteWork: 'Open to remote work worldwide',
      availability: 'Available for new projects',
      availabilityHint: 'Currently accepting freelance work and full-time opportunities.',
      form: {
        title: 'Send a Message',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Project inquiry',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        sent: 'Message Sent!',
      },
    },
    // Common
    common: {
      copied: 'Copied!',
      copy: 'Copy',
      loading: 'Loading...',
    },
  },
  fr: {
    // Sidebar & Navigation
    nav: {
      dashboard: 'Tableau de bord',
      projects: 'Projets',
      skills: 'Competences',
      experience: 'Experience',
      contact: 'Contact',
    },
    profile: {
      name: 'Aristide Adouko',
      role: 'Developpeur Fullstack',
    },
    // Dashboard
    dashboard: {
      path: '~/tableau-de-bord',
      title: 'Construire des Systemes Backend Evolutifs',
      subtitle: 'Developpeur Backend specialise dans la conception d\'API, l\'architecture systeme et l\'optimisation de bases de donnees. Je cree des solutions fiables et evolutives qui alimentent les applications modernes.',
      stats: {
        projects: 'Projets Realises',
        projectsTrend: '3 cette annee',
        apis: 'APIs Construites',
        apisTrend: 'REST & GraphQL',
        years: 'Ans d\'Experience',
        yearsTrend: 'Depuis 2021',
      },
      featured: {
        title: 'Projets en Vedette',
        subtitle: 'Travaux recents illustrant la conception de systemes et le developpement d\'API',
        viewAll: 'Voir Tout',
      },
      techStack: {
        title: 'Stack Technique Principal',
        laravel: 'Framework PHP',
        nodejs: 'Environnement',
        postgresql: 'Base de donnees',
        docker: 'Conteneurs',
      },
    },
    // Projects
    projects: {
      path: '~/projets',
      title: 'Projets',
      subtitle: 'Une collection de systemes backend, APIs et microservices que j\'ai construits.',
      searchPlaceholder: 'Rechercher des projets...',
      filter: 'Filtrer :',
      clear: 'Effacer',
      showing: 'Affichage de {count} sur {total} projets',
      noResults: 'Aucun projet trouve',
      noResultsHint: 'Essayez d\'ajuster vos criteres de recherche ou de filtre',
      clearFilters: 'Effacer les Filtres',
      viewDetails: 'Voir les Details',
    },
    // Project Details
    projectDetails: {
      back: 'Retour aux Projets',
      overview: 'Apercu',
      context: 'Contexte',
      problem: 'Probleme',
      solution: 'Solution',
      techStack: 'Stack Technique',
      features: 'Fonctionnalites Cles',
      architecture: 'Architecture',
      authentication: 'Authentification',
      database: 'Conception de Base de Donnees',
      apiEndpoints: 'Points d\'API',
      errorHandling: 'Gestion des Erreurs',
      viewDemo: 'Voir Demo',
      viewCode: 'Voir Code',
      notFound: 'Projet non trouve',
      notFoundHint: 'Le projet que vous recherchez n\'existe pas.',
    },
    // Skills
    skills: {
      path: '~/competences',
      title: 'Competences & Expertise',
      subtitle: 'Competences techniques et outils que j\'utilise pour construire des systemes backend evolutifs.',
      categories: {
        backend: 'Backend',
        database: 'Base de donnees',
        devops: 'DevOps & Outils',
        api: 'API & Integration',
      },
      additional: 'Competences Supplementaires',
    },
    // Experience
    experience: {
      path: '~/experience',
      title: 'Experience Professionnelle',
      subtitle: 'Mon parcours professionnel dans le developpement backend et l\'architecture systeme.',
      current: 'Actuel',
      achievements: 'Realisations Cles',
      visit: 'Visiter',
    },
    // Contact
    contact: {
      path: '~/contact',
      title: 'Me Contacter',
      subtitle: 'Vous avez un projet en tete ou souhaitez discuter d\'architecture backend ? Je suis toujours ouvert a de nouvelles opportunites.',
      info: 'Informations de Contact',
      location: 'Localisation',
      locationValue: 'Riviera Golf, Abidjan, Côte d\'Ivoire',
      remoteWork: 'Ouvert au travail a distance dans le monde entier',
      availability: 'Disponible pour de nouveaux projets',
      availabilityHint: 'J\'accepte actuellement le travail freelance et les opportunites a temps plein.',
      form: {
        title: 'Envoyer un Message',
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Demande de projet',
        message: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet...',
        send: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        sent: 'Message Envoye !',
      },
    },
    // Common
    common: {
      copied: 'Copie !',
      copy: 'Copier',
      loading: 'Chargement...',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages,
})

export const setLocale = (locale) => {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
}
