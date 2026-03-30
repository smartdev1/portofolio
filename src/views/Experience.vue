<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'

const { t } = useI18n()

const experiences = ref([
  {
    id: 1,
    role: 'Accompagnateur Pedagogique Epitech',
    company: 'TechFlow Solutions',
    location: 'Abidjan - Côte d\'Ivoire',
    duration: 'Juin 2025 - Present',
    current: true,
    description: 'Accompagnement des apprenants dans le développement de leurs compétences techniques et professionnelles à travers une approche pratique, collaborative et orientée vers les exigences du monde professionnel.',
    achievements: [
      'Animer des modules de formation interactifs favorisant l\’apprentissage par la pratique et l\’autonomie des étudiants.',
      'Accompagner individuellement chaque apprenant afin de lever les blocages, renforcer la confiance et améliorer la progression continue.',
      'Mettre en œuvre des méthodes actives et collaboratives pour stimuler l\’engagement, l\’esprit critique et le travail en équipe.',
      'Encadrer et évaluer des projets pratiques en apportant un retour constructif (revue de code, bonnes pratiques, méthodologie).',
    ],
    Skills: ['Communication', 'Apprentissage actif', 'Pédagogie', 'Revue de code'],
    link: null
  },
  {
    id: 2,
    role: 'Déveleoppeur Web Fullstack',
    company: 'GIZ - Coopérative Allemande pour le Développement Durable',
    location: 'Abidjan - Côte d\'Ivoire',
    duration: 'Février 2025 - Juin 2025',
    current: false,
    description: 'Stage de perfectionnement en développement web fullstack, axé sur la création d\'applications web robustes et évolutives pour soutenir les initiatives de développement durable en Afrique.',
    achievements: [
      'Développement de la plateforme web du programme FORPRODE : API Laravel, interface Nuxt.js, multilingue (FR/EN/DE), automatisation des déploiements via GitHub Actions.',
      'Built real-time data synchronization system using WebSockets and Redis pub/sub',
      'Implemented OAuth 2.0 authentication system with support for 5 identity providers',
      'Reduced API response times by 40% through caching strategies and code optimization',
    ],
    Skills: ['Gestion de projet', 'PHP', 'Laravel', 'WordPress', 'Postman', 'Git'],
    link: 'https://www.forprode.ci'
  },
  {
    id: 3,
    role: 'Junior Backend Developer',
    company: 'StartupHub',
    location: 'Denver, CO',
    duration: 'Jun 2021 - Feb 2022',
    current: false,
    description: 'Developed core backend features for e-commerce platform.',
    achievements: [
      'Built inventory management system handling 100K+ SKUs',
      'Implemented payment processing integration with Stripe and PayPal',
      'Created automated testing suite achieving 85% code coverage',
      'Collaborated with frontend team to design and document API contracts',
    ],
    techStack: ['PHP', 'Laravel', 'MySQL', 'Stripe API'],
    link: null
  },
])
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 bg-primary/10 rounded-lg">
          <Briefcase class="w-5 h-5 text-primary" />
        </div>
        <span class="text-sm font-mono text-primary">{{ t('experience.path') }}</span>
      </div>
      
      <h1 class="text-3xl font-bold text-foreground">{{ t('experience.title') }}</h1>
      <p class="text-muted-foreground mt-2">
        {{ t('experience.subtitle') }}
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

      <!-- Experience Items -->
      <div class="space-y-8">
        <div 
          v-for="exp in experiences" 
          :key="exp.id"
          class="relative pl-8 md:pl-20"
        >
          <!-- Timeline Dot -->
          <div 
            :class="[
              'absolute left-0 md:left-8 w-4 h-4 rounded-full border-4 -translate-x-1/2',
              exp.current 
                ? 'bg-primary border-primary/30' 
                : 'bg-secondary border-border'
            ]"
          />

          <!-- Card -->
          <div class="bg-card border border-border rounded-lg p-6 card-hover">
            <!-- Header -->
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-semibold text-foreground">{{ exp.role }}</h3>
                  <Badge v-if="exp.current" :label="t('experience.current')" variant="success" />
                </div>
                <p class="text-primary font-medium mt-1">{{ exp.company }}</p>
              </div>
              
              <div class="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                <div class="flex items-center gap-2">
                  <Calendar class="w-4 h-4" />
                  <span>{{ exp.duration }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <MapPin class="w-4 h-4" />
                  <span>{{ exp.location }}</span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-muted-foreground mb-4">{{ exp.description }}</p>

            <!-- Achievements -->
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">{{ t('experience.achievements') }}</h4>
              <ul class="space-y-2">
                <li 
                  v-for="(achievement, index) in exp.achievements" 
                  :key="index"
                  class="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span class="text-primary mt-1">-</span>
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>

            <!-- Tech Stack -->
            <div class="flex items-center justify-between pt-4 border-t border-border">
              <div class="flex flex-wrap gap-2">
                <Badge 
                  v-for="tech in exp.Skills" 
                  :key="tech"
                  :label="tech"
                  variant="primary"
                />
              </div>
              
              <a 
                v-if="exp.link"
                :href="exp.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink class="w-4 h-4" />
                {{ t('experience.visit') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
