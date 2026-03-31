<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { FolderKanban, Search, Filter, Github } from 'lucide-vue-next'
import { useGitHub } from '@/composables/useGitHub'

const { t } = useI18n()
const searchQuery = ref('')
const selectedLanguage = ref(null)

// GitHub repositories
const { repos: githubProjects, pending: githubPending, error: githubError, fetchRepos } = useGitHub()

const localProjects = [
  {
    id: 'fatom',
    name: 'Fatom: Fondation ATEF OMAIS',
    html_url: 'https://www.fatom.org',
    description: 'VueJS + Wordpress (Headless API)',
    language: 'Vue.js',
    image: 'https://picsum.photos/400/200?random=1',
    featured: true
  },
  {
    id: 'forprode',
    name: 'Forprode',
    html_url: 'https://www.forprode.ci',
    description: 'Nuxt3 + Laravel (API)',
    language: 'Nuxt3',
    image: 'https://picsum.photos/400/200?random=2',
    featured: true
  },
  {
    id: 'custom-size-plugin',
    name: 'Custom-size-plugin',
    html_url: 'https://baanabaanaboutique.com',
    description: 'Plugin custom size pour e-commerce',
    language: 'JavaScript',
    image: 'https://picsum.photos/400/200?random=3',
    featured: true
  },
  {
    id: 'mphb-booking-hourly',
    name: 'mphb-booking-hourly',
    html_url: 'https://flexstay.fr',
    description: 'Réservation horaire pour Bookings',
    language: 'PHP',
    image: 'https://picsum.photos/400/200?random=4',
    featured: true
  }
]

const allProjects = computed(() => {
  const projects = [...githubProjects.value, ...localProjects]
  // Trier pour mettre les projets featured en premier
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
})

onMounted(async () => {
  await fetchRepos()
})

// Get all unique languages
const allLanguages = computed(() => {
  const languageSet = new Set()
  allProjects.value.forEach(project => {
    if (project.language) {
      languageSet.add(project.language)
    }
  })
  return Array.from(languageSet).sort()
})

// Filter projects based on search and language filter
const filteredProjects = computed(() => {
  return allProjects.value.filter(project => {
    const matchesSearch = searchQuery.value === '' || 
      project.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (project.description && project.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesLanguage = selectedLanguage.value === null || 
      project.language === selectedLanguage.value
    
    return matchesSearch && matchesLanguage
  })
})

const toggleLanguageFilter = (language) => {
  if (selectedLanguage.value === language) {
    selectedLanguage.value = null
  } else {
    selectedLanguage.value = language
  }
}

const showAll = ref(false)

const visibleProjects = computed(() => {
  const list = filteredProjects.value
  return showAll.value ? list : list.slice(0, 5)
})

const toggleShowAll = () => {
  showAll.value = !showAll.value
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedLanguage.value = null
  showAll.value = false
}

const handleImageError = (event) => {
  event.target.src = 'https://picsum.photos/400/200?random=999'
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-lg" style="background-color: rgba(59, 130, 246, 0.1)">
          <Github class="w-5 h-5 text-primary" />
        </div>
        <span class="text-sm font-mono text-primary">github.com/smartdev1</span>
      </div>
      
      <h1 class="text-3xl font-bold text-foreground">{{ t('projects.title') }}</h1>
      <p class="text-muted-foreground mt-2">
        {{ t('projects.subtitle') }}
      </p>
    </div>

    <!-- Filters Section -->
    <div class="bg-card border border-border rounded-lg p-4 mb-6">
      <div class="flex flex-col lg:flex-row gap-4">
        <!-- Search -->
        <div class="flex-1 relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            v-model="searchQuery"
            type="text"
            :placeholder="t('projects.searchPlaceholder')"
            class="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
        
        <!-- Language Filter -->
        <div class="flex items-center gap-2 flex-wrap">
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter class="w-4 h-4" />
            <span>{{ t('projects.filter') }}</span>
          </div>
          <button
            v-for="language in allLanguages"
            :key="language"
            @click="toggleLanguageFilter(language)"
            :class="[
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all',
              selectedLanguage === language
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:opacity-80'
            ]"
          >
            {{ language }}
          </button>
          <button
            v-if="searchQuery || selectedLanguage"
            @click="clearFilters"
            class="px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {{ t('projects.clear') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="githubPending" class="text-center py-12">
      <div class="inline-block">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
      <p class="text-muted-foreground mt-4">Loading repositories...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="githubError" class="text-center py-12">
      <p class="text-destructive">Failed to load repositories: {{ githubError }}</p>
    </div>

    <!-- Results Info -->
    <div v-else class="flex items-center justify-between mb-6">
      <p class="text-sm text-muted-foreground">
        {{ t('projects.showing', { count: filteredProjects.length, total: allProjects.length }) }}
      </p>
    </div>

    <!-- Projects Grid -->
    <div v-if="filteredProjects.length > 0 && !githubPending" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <a
        v-for="repo in visibleProjects" 
        :key="repo.id"
        :href="repo.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="group block border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all overflow-hidden"
      >
        <!-- Project Image -->
        <div class="aspect-video bg-muted overflow-hidden">
          <img
            :src="repo.image || 'https://picsum.photos/400/200?random=999'"
            :alt="repo.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            @error="handleImageError"
          />
        </div>

        <!-- Project Content -->
        <div class="p-6">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {{ repo.name }}
              </h3>
              <p class="text-sm text-muted-foreground mt-2 line-clamp-2">
                {{ repo.description || 'No description available' }}
              </p>
            </div>
            <Github class="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
          <div class="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <div v-if="repo.language">
              <span class="inline-block w-2 h-2 rounded-full bg-primary mr-1"></span>
              {{ repo.language }}
            </div>
            <div v-if="repo.stargazers_count > 0">
              ⭐ {{ repo.stargazers_count }}
            </div>
            <div v-if="repo.featured" class="ml-auto">
              <span class="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div v-if="filteredProjects.length > 5 && !githubPending" class="flex justify-center mt-6">
      <button
        @click="toggleShowAll"
        class="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-colors"
      >
        {{ showAll ? 'Voir moins' : 'Voir plus' }}
      </button>
    </div>

    <!-- Empty State -->
    <div v-else-if="!githubPending && filteredProjects.length === 0" class="text-center py-12">
      <FolderKanban class="w-12 h-12 text-muted-foreground mx-auto mb-4" />
      <h3 class="text-lg font-medium text-foreground">{{ t('projects.noResults') }}</h3>
      <p class="text-muted-foreground mt-2">{{ t('projects.noResultsHint') }}</p>
      <button
        @click="clearFilters"
        class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
      >
        {{ t('projects.clearFilters') }}
      </button>
    </div>
  </div>
</template>
