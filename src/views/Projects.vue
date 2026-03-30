<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { FolderKanban, Search, Filter } from 'lucide-vue-next'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import projectsData from '@/data/projects.json'

const { t } = useI18n()
const projects = ref(projectsData)
const searchQuery = ref('')
const selectedTech = ref(null)

// Get all unique tech stack items
const allTechStack = computed(() => {
  const techSet = new Set()
  projects.value.forEach(project => {
    project.techStack.forEach(tech => techSet.add(tech))
  })
  return Array.from(techSet).sort()
})

// Filter projects based on search and tech filter
const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    const matchesSearch = searchQuery.value === '' || 
      project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesTech = selectedTech.value === null || 
      project.techStack.includes(selectedTech.value)
    
    return matchesSearch && matchesTech
  })
})

const toggleTechFilter = (tech) => {
  if (selectedTech.value === tech) {
    selectedTech.value = null
  } else {
    selectedTech.value = tech
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedTech.value = null
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-lg" style="background-color: rgba(59, 130, 246, 0.1)">
          <FolderKanban class="w-5 h-5 text-primary" />
        </div>
        <span class="text-sm font-mono text-primary">{{ t('projects.path') }}</span>
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
        
        <!-- Tech Filter -->
        <div class="flex items-center gap-2 flex-wrap">
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter class="w-4 h-4" />
            <span>{{ t('projects.filter') }}</span>
          </div>
          <button
            v-for="tech in allTechStack"
            :key="tech"
            @click="toggleTechFilter(tech)"
            :class="[
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all',
              selectedTech === tech
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:opacity-80'
            ]"
          >
            {{ tech }}
          </button>
          <button
            v-if="searchQuery || selectedTech"
            @click="clearFilters"
            class="px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {{ t('projects.clear') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Results Info -->
    <div class="flex items-center justify-between mb-6">
      <p class="text-sm text-muted-foreground">
        {{ t('projects.showing', { count: filteredProjects.length, total: projects.length }) }}
      </p>
    </div>

    <!-- Projects Grid -->
    <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ProjectCard 
        v-for="project in filteredProjects" 
        :key="project.id"
        :project="project"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
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
