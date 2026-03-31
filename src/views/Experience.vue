<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'

const { t } = useI18n()

const experiences = ref([
  {
    id: 1,
    role: 'Accompagnateur Pédagogique Epitech',
    company: 'African Education and Innovation Group',
    location: 'Abidjan',
    duration: 'Juin. 2025 - ce jour',
    current: true,
    description: 'Soutien pédagogique aux étudiants en développement web en utilisant des approches pratiques et théoriques adaptées.',
    achievements: [
      'Accompagnement dans la réalisation de projets web collaboratifs, encourageant l\'application concrète des compétences acquises.',
      'Organisation d\'ateliers et de séances de tutorat pour faciliter la compréhension des technologies web modernes telles que Laravel et Vue.js.',
      'Suivi personnalisé des progrès des apprenants avec mise en place de stratégies d\'amélioration continue.',
      'Coordination avec les formateurs pour adapter les contenus pédagogiques selon les besoins des étudiants.',
    ],
    Skills: ['Communication', 'Apprentissage actif', 'Pédagogie', 'Revue de code', 'Laravel', 'Vue.js'],
    link: null
  },
  {
    id: 2,
    role: 'STAGIAIRE DEVELOPPEUR WEB',
    company: 'GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)',
    location: 'Abidjan',
    duration: 'févr. 2025 - Juin 2025',
    current: false,
    description: 'Coopérative Allemande - Invest For Jobs',
    achievements: [
      'Conception du site web du Lycée Professionnel Sectoriel de Yopougon',
      'Développement d\'une application de mise en relation entre les apprenants des différents programmes d\'insertion professionnelle et les recruteurs potentiels (CVthèque), sous Laravel',
      'Développement de l\'application du projet FORPRODE avec Laravel et Nuxt.js',
      'Refonte du site web de l\'Institut Pédagogique National de l\'Enseignement Technique et Professionnel (IPNETP) avec WordPress et Vue.js',
    ],
    Skills: ['Gestion de projet', 'Postman', 'API REST', 'GIT', 'Laravel', 'Nuxt.js', 'WordPress', 'Vue.js', 'PHP'],
    link: "https://www.forprode.ci/",
  },
  {
    id: 3,
    role: 'RESPONSABLE PRODUCTION',
    company: 'Zenith Assurances',
    location: 'Abidjan, Côte d\'Ivoire',
    duration: 'juil. 2020 - oct. 2020',
    current: false,
    description: 'Gestionnaire Santé (Assurance Santé)',
    achievements: [
      'Développement d\'une plateforme de gestion interne des assurés en PHP, optimisée pour améliorer la gestion des informations clients et l\'efficacité des processus internes.',
    ],
    Skills: ['PHP', 'Gestion de données'],
    link: null
  },
  {
    id: 4,
    role: 'DEVELOPPEUR WEB',
    company: 'JSOFT Technologies',
    location: 'Abidjan, Côte d\'Ivoire',
    duration: 'juil. 2018 - juil. 2020',
    current: false,
    description: 'Intégrateur de solutions informatiques',
    achievements: [
      'Conception et développement d\'applications web en PHP et MySQL, permettant l\'optimisation des processus de souscription pour les assurances.',
      'Création d\'un module de renouvellement des contrats d\'assurance automobile en Windev, qui a amélioré l\'efficacité du suivi des renouvellements de 15 %.',
    ],
    Skills: ['PHP', 'MySQL', 'Windev'],
    link: null
  },
  {
    id: 5,
    role: 'Assistant Informatique',
    company: 'Société Africaine D\'assistance Et De Services',
    location: 'Abidjan',
    duration: 'févr. 2016 - juil. 2018',
    current: false,
    description: 'Gestionnaire Santé (Assurance santé)',
    achievements: [
      'Développement d\'un module d\'exclusion en Windev 17 pour une gestion plus flexible des remboursements des frais avancés par les assurés sur les différentes factures Pharmacies et Cliniques',
      'Mise en place d\'un système de gestion des cartes d\'assurés en PHP/MySQL, facilitant une prise en charge rapide et efficace des clients dans les centres de santé et les pharmacies',
    ],
    Skills: ['Windev', 'PHP', 'MySQL'],
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
