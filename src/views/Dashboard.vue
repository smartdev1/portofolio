<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { FolderKanban, Webhook, Calendar, ArrowRight, Terminal } from 'lucide-vue-next'
import StatCard from '@/components/ui/StatCard.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import projectsData from '@/data/projects.json'

const { t } = useI18n()
const router = useRouter()
const projects = ref(projectsData)
const topProjects = computed(() => projects.value.slice(0, 2))

const stats = computed(() => [
  { title: t('dashboard.stats.projects'), value: '12+', icon: FolderKanban, trend: t('dashboard.stats.projectsTrend') },
  { title: t('dashboard.stats.apis'), value: '25+', icon: Webhook, trend: t('dashboard.stats.apisTrend') },
  { title: t('dashboard.stats.years'), value: '5+', icon: Calendar, trend: t('dashboard.stats.yearsTrend') },
])

const viewAllProjects = () => {
  router.push('/projects')
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Header Section -->
    <div class="mb-8 flex items-start gap-6">
      <img src="https://zupimages.net/up/26/14/niaa.png" alt="Profile Picture" style="width: 480px; height: 480px;" class="rounded-full object-cover border-4 border-primary/20 flex-shrink-0" />
      <div class="flex-1">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg" style="background-color: rgba(59, 130, 246, 0.1)">
            <Terminal class="w-5 h-5 text-primary" />
          </div>
          <span class="text-sm font-mono text-primary">{{ t('dashboard.path') }}</span>
        </div>
        
        <h1 class="text-3xl lg:text-4xl font-bold text-foreground text-balance">
          {{ t('dashboard.title') }}
        </h1>
        <p class="text-muted-foreground mt-4 max-w-2xl text-pretty leading-relaxed">
          {{ t('dashboard.subtitle') }}
        </p>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <StatCard 
        v-for="stat in stats" 
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :icon="stat.icon"
        :trend="stat.trend"
      />
    </div>

    <!-- Featured Projects Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-xl font-semibold text-foreground">{{ t('dashboard.featured.title') }}</h2>
          <p class="text-sm text-muted-foreground mt-1">{{ t('dashboard.featured.subtitle') }}</p>
        </div>
        <button 
          @click="viewAllProjects"
          class="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {{ t('dashboard.featured.viewAll') }}
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectCard 
          v-for="project in topProjects" 
          :key="project.id"
          :project="project"
        />
      </div>
    </div>

    <!-- Tech Stack Overview -->
    <div class="bg-card border border-border rounded-lg p-6">
      <h2 class="text-lg font-semibold text-foreground mb-4">{{ t('dashboard.techStack.title') }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: rgba(239, 68, 68, 0.1)">
            <span class="text-red-400 font-bold text-sm">L</span>
          </div>
          <div>
            <p class="text-sm font-medium text-foreground">Laravel</p>
            <p class="text-xs text-muted-foreground">{{ t('dashboard.techStack.laravel') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: rgba(34, 197, 94, 0.1)">
            <span class="text-green-400 font-bold text-sm">N</span>
          </div>
          <div>
            <p class="text-sm font-medium text-foreground">Node.js</p>
            <p class="text-xs text-muted-foreground">{{ t('dashboard.techStack.nodejs') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: rgba(59, 130, 246, 0.1)">
            <span class="text-blue-400 font-bold text-sm">P</span>
          </div>
          <div>
            <p class="text-sm font-medium text-foreground">PostgreSQL</p>
            <p class="text-xs text-muted-foreground">{{ t('dashboard.techStack.postgresql') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: rgba(6, 182, 212, 0.1)">
            <span class="text-cyan-400 font-bold text-sm">D</span>
          </div>
          <div>
            <p class="text-sm font-medium text-foreground">Docker</p>
            <p class="text-xs text-muted-foreground">{{ t('dashboard.techStack.docker') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
